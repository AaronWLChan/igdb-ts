import axios from "axios"
import axiosRateLimit, { rateLimitOptions } from "axios-rate-limit"
import { AgeRating, AgeRatingContentDescription, AlternativeName, 
        Artwork, Character, CharacterMugShot, Collection, Company, CompanyLogo, 
        CompanyWebsite, Cover, ExternalGame, Franchise, Game, GameEngine,
        TwitchAuthResponse, IGDBOptions, Query, ImageOptions, GameEngineLogo, 
        GameMode, GameVersion, GameVersionFeature, GameVersionFeatureValue, GameVideo, Genre, 
        InvolvedCompany, Keyword, MultiplayerMode, Platform, PlatformFamily, PlatformLogo, 
        PlatformVersion, PlatformVersionReleaseDate, PlatformWebsite, PlayerPerspective, 
        ReleaseDate, Screenshot, Search, Theme, Website, PlatformVersionCompany, UntypedIGDBOptions, 
        DefaultIGDBOptions, SearchableIGDBOptions, Filter, CombinedFilter, Endpoints,
} from './types'

export class IGDB {

    private clientId: string
    private clientToken: string
    private clientSecret: string
    private API_URL = "https://api.igdb.com/v4"
    private IMAGE_URL = "https://images.igdb.com/igdb/image/upload"
    public _axios = axiosRateLimit(axios.create(), { maxRPS: 4, perMilliseconds: 1000, maxRequests: 4 })
    private onAccessTokenRetrieved: (clientToken: string, expiresAt: number) => void
    private tokenExpiry: number

    /**
     * Use function init() before calling endpoints.
     */
    constructor(){}

    /**
     * Initialises wrapper and generates access token (if needed) to call API.
     * @param clientId - Twitch Client Id
     * @param clientSecret - Twitch Client Secret
     * @param clientToken - Twitch App Access Token
     * @param rateLimitOptions - Axios Rate Limit Options. Default is 4 requests/s as per IGDB documentation.
     * @param onAccessTokenRetrieved - Callback which can be used to save token to storage. Includes timestamp of when the token will expire.
     */
    public async init(clientId: string, clientSecret: string, clientToken?: { token: string, tokenExpiry: number }, onAccessTokenRetrieved?: (clientToken: string, expiresAt: number) => void, rateLimitOptions?: rateLimitOptions){

        this.clientId = clientId
        this.clientSecret = clientSecret
        this.onAccessTokenRetrieved = onAccessTokenRetrieved

        if (!clientToken) {
            await this.getToken()
        }

        else {
            this.clientToken = clientToken.token
            this.tokenExpiry = clientToken.tokenExpiry
        }
        
        if (rateLimitOptions){
            this._axios.setRateLimitOptions(rateLimitOptions)
        }

    }

    /**
     * Ensures token is valid and has not expired.
     */
    private async validateToken(){

        let currentTime = new Date().getTime()

        if (currentTime >= this.tokenExpiry) {
           await this.getToken()
        }

    }

    /**
     * Can be used to generate a new access token.
     * 
     * As per documentation, the access token cannot be refreshed. Therefore, when an access token expires you need create a new one.
     * 
     * https://dev.twitch.tv/docs/authentication/refresh-tokens
     */
    private async getToken(){

        let response = await axios.post<TwitchAuthResponse>(`https://id.twitch.tv/oauth2/token?client_id=${this.clientId}&client_secret=${this.clientSecret}&grant_type=client_credentials`)
                .then((response) => {

                    if (response.data) {
                        return response.data
                    }
                })

        const expiry = new Date().getTime() + response.expires_in

        this.clientToken = response.access_token
        this.tokenExpiry = expiry
        this.onAccessTokenRetrieved(response.access_token, expiry)

    }

    private buildFilter({ filters, operators }: Filter){

        //For every 2, filters there must be 1 operator 8 querys = 4 operators
        if (filters.length === 0) {
            throw Error("You need to provide at least one filter.")
        }
    
        if (filters.length > 1){
    
            if (!operators || (operators.length != filters.length / 2) ) {
                throw Error("You must provide 1 operator for every two filters.")
            }
    
        }
    
        let _filter = ""
    
        //if 1 then add
        for (let i = 0; i < filters.length; i++){
    
            if (i % 2 !== 0) {
                _filter += ` ${operators[i - 1]} `
            }
    
            let f = filters[i]
    
            _filter += `${f.field} ${f.postfix} ${f.value}`
        }
        
    
        return _filter
    
    }
    
    private buildCombinedFilter({ filters, operators }: CombinedFilter) {
    
        if (filters.length <= 1) {
            throw Error("A combined filter required at least two filters.")
        }
    
        else {
    
            if (!operators || (operators.length != filters.length / 2) ) {
                throw Error("You must provide 1 operator for every two filters.")
            }
    
        }
    
        let _combinedFilter = ""
    
        for (let i = 0; i < filters.length; i++){
    
            if (i % 2 !== 0) {
                _combinedFilter += ` ${operators[i - 1]} `
            }
    
            let f = filters[i]
    
            _combinedFilter += `(${this.buildFilter(f)})`
        }
    
    
        return _combinedFilter
    }
    
    private buildOptions<T>(options?: IGDBOptions<T>){

        //If no options, get all fields
        if (!options) {
            return `fields *;`
        }

        let result = ""

        if (options.fields){            
            result += `fields ${options.fields.join(",")};`
        }

        else {
            result += `fields *;`
        }

        if (options.exclude){
            result += `exclude ${options.exclude.join(",")};`
        }

        if (options.filter){

            let filtersAsString = this.buildFilter(options.filter)

            result += `where ${filtersAsString};`
        }

        if (options.combinedFilter) {

            let filtersAsString = this.buildCombinedFilter(options.combinedFilter)
  
              result += `where ${filtersAsString};`
          }

        if (options.sortBy){
            result += `sort ${options.sortBy.field} ${options.sortBy.order};`
        }

        if (options.search){
            result += `search "${options.search}";`
        }

        if (options.limit){
            result += `limit ${options.limit};`
        }

        if (options.offset){
            result += `offset ${options.offset};`
        }


        return result
    }

    private buildUntypedOptions(options?: UntypedIGDBOptions){

        //If no options, get all fields
        if (!options) {
            return `fields *;`
        }

        let result = ""

        if (options.fields){            
            result += `fields ${options.fields.join(",")};`
        }

        else {
            result += `fields *;`
        }

        if (options.exclude){
            result += `exclude ${options.exclude.join(",")};`
        }

        if (options.filter){

            let filtersAsString = this.buildFilter(options.filter)

            result += `where ${filtersAsString};`
        }

        if (options.combinedFilter) {

          let filtersAsString = this.buildCombinedFilter(options.combinedFilter)

            result += `filters ${filtersAsString};`
        }

        if (options.sortBy){
            result += `sort ${options.sortBy.field} ${options.sortBy.order};`
        }

        if (options.search){
            result += `search "${options.search}";`
        }

        if (options.limit){
            result += `limit ${options.limit};`
        }

        if (options.offset){
            result += `offset ${options.offset};`
        }


        return result
    }

    private async request<T>(endpoint: string, options?: IGDBOptions<T>){

        if (!this.clientToken) {
            throw Error("Client token not found. Make sure to init() before requesting an endpoint.")
        }

        return this.validateToken().then(() => this._axios.post<T[]>(`${this.API_URL}/${endpoint}`, this.buildOptions(options), {
            headers: {
                'Client-ID': this.clientId,
                'Authorization': `Bearer ${this.clientToken}`,
                'Accept': 'application/json',
            },
        }))
        .then((response) => {
            return response.data
        })
        
    }

    private buildMultiQuery(queries: Query[]){

        if (queries.length < 2) {
            throw Error("You need at least two queries to multiquery.")
        }
    
        if (queries.length > 10){
            throw Error("You can only run a maxiumum of 10 queries.")
        }
    
        let query = ""
    
        queries.forEach((q) => {
            query += `query ${q.endpoint} "${q.resultName}" {${q.options ? this.buildUntypedOptions(q.options) : ""}};`
        })
    
        return query
    
    }

    /** 
     * Get a multiquery. 
     * 
     * 
     * Maximum of 10 Queries.
     * 
     * {@link https://api-docs.igdb.com/#multi-query}
     * @param {Array} queries - an array of [Query]({@link Query})
     * @returns any[]   
    **/
    public async multiQuery(queries: Query[]){

        if (!this.clientToken) {
            throw Error("Client token not found. Make sure to init() before requesting an endpoint.")
        }

        return this.validateToken().then(() => this._axios.post<any[]>(`${this.API_URL}/multiquery`, this.buildMultiQuery(queries), {
            headers: {
                'Client-ID': this.clientId,
                'Authorization': `Bearer ${this.clientToken}`,
                'Accept': 'application/json',
            }
        })).then((response) => {
            return response.data
        })

    }

    /** 
     * Get an Image URL. 
     * {@link https://api-docs.igdb.com/#images}
     * @param {Object} imageOptions - [Image Options]({@link ImageOptions})
     *       
    **/
    public getImageUrl({ imageId, size, retina }: ImageOptions){
        return `${this.IMAGE_URL}/t_${size}${retina && "_2x"}/${imageId}.jpg`
    }

    /** 
     * Generic Endpoint Call.
     * 
     * Provide your own endpoint and response type.
     *  
     * {@link https://api-docs.igdb.com/#about}
     * @param {Object} options - [Untyped Endpoint Options]({@link UntypedIGDBOptions})
     * 
    **/
    public async get<T>(endpoint: string, options?: UntypedIGDBOptions){

        if (!this.clientToken) {
            throw Error("Client token not found. Make sure to init() before requesting an endpoint.")
        }

        return this.validateToken().then(() => this._axios.post<T>(`${this.API_URL}/${endpoint}`, this.buildUntypedOptions(options), {
            headers: {
                'Client-ID': this.clientId,
                'Authorization': `Bearer ${this.clientToken}`,
                'Accept': 'application/json',
            },
            }))
            .then((response) => {
                return response.data
            })

    }

    /** 
     * Get Age Ratings. 
     * {@link https://api-docs.igdb.com/#age-rating}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     * 
    **/
    public getAgeRatings(options?: DefaultIGDBOptions<AgeRating>) {
        return this.request<AgeRating>(Endpoints.AGE_RATING, options)
    }

    /** 
     * Get Age Rating Content Descriptions. 
     * {@link https://api-docs.igdb.com/#age-rating-content-description}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     * 
    **/
    public getAgeRatingContentDescriptions(options?: DefaultIGDBOptions<AgeRatingContentDescription>){
        return this.request<AgeRatingContentDescription>(Endpoints.AGE_RATING_CONTENT_DESCRIPTION, options)
    }

    /** 
     * Get Alternative Names. 
     * {@link https://api-docs.igdb.com/#alternative-name}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     * 
    **/
    public getAlternativeNames(options?: DefaultIGDBOptions<AlternativeName>) {
        return this.request<AlternativeName>(Endpoints.ALTERNATIVE_NAME, options)
    }

    /** 
     * Get Artworks. 
     * {@link https://api-docs.igdb.com/#artwork}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     * 
    **/
    public getArtworks(options?: DefaultIGDBOptions<Artwork>) {
        return this.request<Artwork>(Endpoints.ARTWORK, options)
    }

    /** 
     * Get Characters. 
     * {@link https://api-docs.igdb.com/#character}
     * @param {Object} options - [Searchable Endpoint Options]({@link SearchableIGDBOptions})
     * 
    **/
    public getCharacters(options?: SearchableIGDBOptions<Character>) {

        return this.request<Character>(Endpoints.CHARACTER, options)
    }

    /** 
     * Get Character Mug Shot. 
     * {@link https://api-docs.igdb.com/#character-mug-shot}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getCharacterMugShots(options?: DefaultIGDBOptions<CharacterMugShot>) {
        return this.request<CharacterMugShot>(Endpoints.CHARACTER_MUG_SHOT, options)
    }

    /** 
     * Get Collections. 
     * {@link https://api-docs.igdb.com/#collection}
     * @param {Object} options - [Searchable Endpoint Options]({@link SearchableIGDBOptions})
     *       
    **/
    public getCollections(options?: SearchableIGDBOptions<Collection>) {
        return this.request<Collection>(Endpoints.COLLECTION, options)
    }

    /** 
     * Get Companies. 
     * {@link https://api-docs.igdb.com/#company}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getCompanies(options?: DefaultIGDBOptions<Company>) {
        return this.request<Company>(Endpoints.COMPANY, options)
    }

    /** 
     * Get Company Logos. 
     * {@link https://api-docs.igdb.com/#company-logo}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getCompanyLogos(options?: DefaultIGDBOptions<CompanyLogo>) {
        return this.request<CompanyLogo>(Endpoints.COMPANY_LOGO, options)
    }


    /** 
     * Get Company Website. 
     * {@link https://api-docs.igdb.com/#company-website}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getCompanyWebsite(options?: DefaultIGDBOptions<CompanyWebsite>) {
        return this.request<CompanyWebsite>(Endpoints.COMPANY_WEBSITE, options)
    }

    /** 
     * Get Covers. 
     * {@link https://api-docs.igdb.com/#cover}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getCovers(options?: DefaultIGDBOptions<Cover>) {
        return this.request<Cover>(Endpoints.COVER, options)
    }

    /** 
     * Get External Games. 
     * {@link https://api-docs.igdb.com/#external-game}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getExternalGames(options?: DefaultIGDBOptions<ExternalGame>) {
        return this.request<ExternalGame>(Endpoints.EXTERNAL_GAME, options)
    }

    /** 
     * Get Franchises. 
     * {@link https://api-docs.igdb.com/#franchise}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getFranchises(options?: DefaultIGDBOptions<Franchise>) {
        return this.request<Franchise>(Endpoints.FRANCHISE, options)
    }

    /** 
     * Get Games. 
     * {@link https://api-docs.igdb.com/#game}
     * @param {Object} options - [Searchable Endpoint Options]({@link SearchableIGDBOptions})
     *       
    **/
    public getGames(options?: SearchableIGDBOptions<Game>) {
        return this.request<Game>(Endpoints.GAME, options)
    }

    /** 
     * Get Game Engines. 
     * {@link https://api-docs.igdb.com/#game-engine}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getGameEngines(options?: DefaultIGDBOptions<GameEngine>) {
        return this.request<GameEngine>(Endpoints.GAME_ENGINE, options)
    }

    /** 
     * Get Game Engine Logos. 
     * {@link https://api-docs.igdb.com/#game-engine-logo}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getGameEngineLogos(options?: DefaultIGDBOptions<GameEngineLogo>) {
        
        return this.request<GameEngineLogo>(Endpoints.GAME_ENGINE_LOGO, options)
    }

    /** 
     * Get Game Modes. 
     * {@link https://api-docs.igdb.com/#game-mode}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getGameModes(options?: DefaultIGDBOptions<GameMode>) {
        return this.request<GameMode>(Endpoints.GAME_MODE, options)
    }

    /** 
     * Get Game Versions. 
     * {@link https://api-docs.igdb.com/#game-version}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getGameVersions(options?: DefaultIGDBOptions<GameVersion>) {
        return this.request<GameVersion>(Endpoints.GAME_VERSION, options)
    }

    /** 
     * Get Game Version Features. 
     * {@link https://api-docs.igdb.com/#game-version-feature}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getGameVersionFeatures(options?: DefaultIGDBOptions<GameVersionFeature>) {
        return this.request<GameVersionFeature>(Endpoints.GAME_VERSION_FEATURE, options)
    }

    /** 
     * Get Game Version Feature Values. 
     * {@link https://api-docs.igdb.com/#game-engine-feature-value}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getGameVersionFeatureValues(options?: DefaultIGDBOptions<GameVersionFeatureValue>) {
        return this.request<GameVersionFeatureValue>(Endpoints.GAME_VERSION_FEATURE_VALUE, options)
    }

    /** 
     * Get Game Videos. 
     * {@link https://api-docs.igdb.com/#game-video}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getGameVideos(options?: DefaultIGDBOptions<GameVideo>) {
        return this.request<GameVideo>(Endpoints.GAME_VIDEO, options)
    }

    /** 
     * Get Genres. 
     * {@link https://api-docs.igdb.com/#genre}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getGenres(options?: DefaultIGDBOptions<Genre>) {
        return this.request<Genre>(Endpoints.GENRE, options)
    }

    /** 
     * Get Involved Companies. 
     * {@link https://api-docs.igdb.com/#involved-company}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getInvolvedCompanies(options?: DefaultIGDBOptions<InvolvedCompany>) {
        return this.request<InvolvedCompany>(Endpoints.INVOLVED_COMPANY, options)
    }

    /** 
     * Get Keywords. 
     * {@link https://api-docs.igdb.com/#keyword}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getKeywords(options?: DefaultIGDBOptions<Keyword>) {
        return this.request<Keyword>(Endpoints.KEYWORD, options)
    }

    /** 
     * Get Multiplayer Modes. 
     * {@link https://api-docs.igdb.com/#multiplayer-mode}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getMultiplayerModes(options?: DefaultIGDBOptions<MultiplayerMode>) {
        return this.request<MultiplayerMode>(Endpoints.MULTIPLAYER_MODE, options)
    }

    /** 
     * Get Platform. 
     * {@link https://api-docs.igdb.com/#platform}
     * @param {Object} options - [Searchable Endpoint Options]({@link SearchableIGDBOptions})
     *       
    **/
    public getPlatforms(options?: SearchableIGDBOptions<Platform>) {
        return this.request<Platform>(Endpoints.PLATFORM, options)
    }

    /** 
     * Get Platform Families. 
     * {@link https://api-docs.igdb.com/#platform-family}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getPlatformFamilies(options?: DefaultIGDBOptions<PlatformFamily>) {
        

        return this.request<PlatformFamily>(Endpoints.PLATFORM_FAMILY, options)
    }

    /** 
     * Get Platform Logos. 
     * {@link https://api-docs.igdb.com/#platform-logo}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getPlatformLogos(options?: DefaultIGDBOptions<PlatformLogo>) {
        return this.request<PlatformLogo>(Endpoints.PLATFORM_LOGO, options)
    }

    /** 
     * Get Platform Versions. 
     * {@link https://api-docs.igdb.com/#platform-version}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getPlatformVersion(options?: DefaultIGDBOptions<PlatformVersion>) {
        return this.request<PlatformVersion>(Endpoints.PLATFORM_VERSION, options)
    }

    /** 
     * Get Platform Version Companies. 
     * {@link https://api-docs.igdb.com/#platform-version-company}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getPlatformVersionCompanies(options?: DefaultIGDBOptions<PlatformVersionCompany>) {
        return this.request<PlatformVersionCompany>(Endpoints.PLATFORM_VERSION_COMPANY, options)
    }

    /** 
     * Get Platform Version Release Dates. 
     * {@link https://api-docs.igdb.com/#platform-version-release_date}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getPlatformVersionReleaseDates(options?: DefaultIGDBOptions<PlatformVersionReleaseDate>) {
        return this.request<PlatformVersionReleaseDate>(Endpoints.PLATFORM_VERSION_RELEASE_DATE, options)
    }

    /** 
     * Get Platform Websites. 
     * {@link https://api-docs.igdb.com/#platform-website}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getPlatformWebsites(options?: DefaultIGDBOptions<PlatformWebsite>) {
        return this.request<PlatformWebsite>(Endpoints.PLATFORM_WEBSITE, options)
    }

    /** 
     * Get Player Perspectives. 
     * {@link https://api-docs.igdb.com/#player-perspective}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getPlayerPerspectives(options?: DefaultIGDBOptions<PlayerPerspective>) {
        return this.request<PlayerPerspective>(Endpoints.PLAYER_PERSPECTIVE, options)
    }

    /** 
     * Get Release Dates. 
     * {@link https://api-docs.igdb.com/#release-date}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getReleaseDates(options?: DefaultIGDBOptions<ReleaseDate>) {
        return this.request<ReleaseDate>(Endpoints.RELEASE_DATE, options)
    }

    /** 
     * Get Screenshots. 
     * {@link https://api-docs.igdb.com/#screenshot}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getScreenshots(options?: DefaultIGDBOptions<Screenshot>) {
        return this.request<Screenshot>(Endpoints.SCREENSHOT, options)
    }

    /** 
     * Search IGDB. 
     * {@link https://api-docs.igdb.com/#search}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public search(options?: DefaultIGDBOptions<Search>) {
        return this.request<Search>(Endpoints.SEARCH, options)
    }

    /** 
     * Get Themes. 
     * {@link https://api-docs.igdb.com/#theme}
     * @param {Object} options - [Searchable Endpoint Options]({@link SearchableIGDBOptions})
     *       
    **/
    public getThemes(options?: SearchableIGDBOptions<Theme>) {
        return this.request<Theme>(Endpoints.THEME, options)
    }

    /** 
     * Get Websites. 
     * {@link https://api-docs.igdb.com/#website}
     * @param {Object} options - [Default Endpoint Options]({@link DefaultIGDBOptions})
     *       
    **/
    public getWebsites(options?: DefaultIGDBOptions<Website>) {
        return this.request<Website>(Endpoints.WEBSITE, options)
    }

}



