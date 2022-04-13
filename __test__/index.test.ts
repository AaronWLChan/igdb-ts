import { CombinedFilter, Filter, Franchise, FranchiseFields, Game, GameFields, IGDBOptions, PlatformReferenceFields, Query, UntypedIGDBOptions } from "../src/types"

function buildFilter({ filters, operators }: Filter){

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

function buildCombinedFilter({ filters, operators }: CombinedFilter) {

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

        _combinedFilter += `(${buildFilter(f)})`
    }


    return _combinedFilter
}

function buildOptions<T>(options?: IGDBOptions<T>){

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

    /* Cannot have both combined and normal filter based on typing. Must have one or the other. */
    if (options.combinedFilter) {
        let sFilter = buildCombinedFilter(options.combinedFilter)

        result += `where ${sFilter};`
    }

    if (options.filter){

        let sFilter = buildFilter(options.filter)

        result += `where ${sFilter};`
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

function buildUntypedOptions(options?: UntypedIGDBOptions){

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

        let filtersAsString = buildFilter(options.filter)

        result += `where ${filtersAsString};`
    }

    if (options.combinedFilter) {

      let filtersAsString = buildCombinedFilter(options.combinedFilter)

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

function buildMultiQuery(queries: Query[]){

    if (queries.length < 2) {
        throw Error("You need at least two queries to multiquery.")
    }

    if (queries.length > 10){
        throw Error("You can only run a maxiumum of 10 queries.")
    }

    let query = ""

    queries.forEach((q) => {
        query += `query ${q.endpoint} "${q.resultName}" {${q.options ? buildUntypedOptions(q.options) : ""}};`
    })

    return query

}


describe("build filter", () => {

    test("correctly with only one filter", () => {

        let expectedResult = "name = Witcher"

        let f: Filter = {
            filters: [{ field: GameFields.NAME, postfix: "=", value: "Witcher" }],
        }

        expect(buildFilter(f)).toMatch(expectedResult)
    
    })

    test("correctly with correct number of operators", () => {

        let expectedResult = "name = Witcher & rating > 70" 

        let f: Filter = {
            filters: [
                { field: GameFields.NAME, postfix: "=", value: "Witcher" },
                { field: GameFields.RATING, postfix: ">", value: "70" }
            ],
            operators: ["&"]
        }

        expect(buildFilter(f)).toMatch(expectedResult)

    
    })

    test("throws error when given incorrect number of operators", () => {

        let f: Filter = {
            filters: [
                { field: GameFields.NAME, postfix: "=", value: "Witcher" },
                { field: GameFields.RATING, postfix: ">", value: "70" }
            ],
            operators: []
        }

        expect(() => buildFilter(f)).toThrow()
    
    })

    test("throws error when given empty fields and operators", () => {

        let f: Filter = {
            filters: [],
            operators: []
        }

        expect(() => buildFilter(f)).toThrow()

    
    })

    test("throws error when given empty filters", () => {

        let f: Filter = {
            filters: [],
            operators: ["&"]
        }
    
        expect(() => buildFilter(f)).toThrow()

    })

})

describe("build combined filter", () => {

    test("correctly", () => {

        /**
         * Games released for both PC (6), and PS4 (48) and also has the genre simulator (13), OR,
         * Games released for both Switch (130), and PS4 (48) and also has the genre Role-Playing (13).
         */
        let expectedResult = "(platforms = [6,48] & genres = 13) | (platforms = [130,48] & genres = 12)"

        let f1: Filter = { filters: [
            { field: GameFields.PLATFORMS, postfix: "=", value: "[6,48]" },
            { field: GameFields.GENRES, postfix: "=", value: 13 }
        ], operators: ["&"]}

        let f2: Filter = { filters: [
            { field: GameFields.PLATFORMS, postfix: "=", value: "[130,48]" },
            { field: GameFields.GENRES, postfix: "=", value: 12 },
        ], operators: ["&"]}

        let f: CombinedFilter = {
            filters: [f1, f2],
            operators: ["|"]

        }

        expect(buildCombinedFilter(f)).toMatch(expectedResult)

    })

    test("correctly II", () => {

        /**
         * Games released which have the genre simulator (13), OR,
         * Games released for both Switch (130), and PS4 (48) and also has the genre Role-Playing (13).
         */
        let expectedResult = "(genres = 13) | (platforms = [130,48] & genres = 12)"

        let f1: Filter = { filters: [
            { field: GameFields.GENRES, postfix: "=", value: 13 }
        ]}

        let f2: Filter = { filters: [
            { field: GameFields.PLATFORMS, postfix: "=", value: "[130,48]" },
            { field: GameFields.GENRES, postfix: "=", value: 12 },
        ], operators: ["&"]}

        let f: CombinedFilter = {
            filters: [f1, f2],
            operators: ["|"]

        }

        expect(buildCombinedFilter(f)).toMatch(expectedResult)

    })
  
    test("correctly when given empty filters and operators", () => {

        let f: CombinedFilter = {
            filters: [],
            operators: []

        }

        expect(() => buildCombinedFilter(f)).toThrow()

    })

    test("throws error when given only 1 filter", () => {
        let f: CombinedFilter = {
            filters: [
                { filters: [
                    { field: GameFields.NAME, postfix: "=", value: "Witcher" },
                ] }
            ],
            operators: []

        }

        expect(() => buildCombinedFilter(f)).toThrow()
    })

    test("throws error when given incorrect number of operators", () => {

        let f1: Filter = { filters: [
            { field: GameFields.GENRES, postfix: "=", value: 13 }
        ]}

        let f2: Filter = { filters: [
            { field: GameFields.PLATFORMS, postfix: "=", value: [130, 48] },
            { field: GameFields.GENRES, postfix: "=", value: 12 },
        ], operators: ["&"]}

        let f: CombinedFilter = {
            filters: [f1, f2],
            operators: ["|", "&"]
        }

        expect(() => buildCombinedFilter(f)).toThrow()

    })

})

describe("build options", () => {

    test("correctly without filter", () => {

        /**
         * Options:
         * - Get Name, Rating
         * - Limit to 5
         * - Sort by rating desc
         */

        let expectedResult = "fields name,rating;sort name desc;limit 5;"

        let options: IGDBOptions<Game> = {
            fields: [GameFields.NAME, GameFields.RATING],
            limit: 5,
            sortBy: { field: "name", order: "desc" }

        }

        expect(buildOptions(options)).toMatch(expectedResult)


    })

    test("correctly with filter", () => {

        /**
         * Options:
         * - Get Name, Rating
         * - Limit to 3
         * - Sort by rating desc
         * - Where name contains "Witcher"
         */

        let expectedResult = 'fields name,rating;where name = *"Witcher";sort rating desc;limit 3;'

        let filter: Filter = {
            filters: [{ field: GameFields.NAME, postfix: "=", value: '*"Witcher"' }],
        }

        let options: IGDBOptions<Game> = {
            fields: [GameFields.NAME, GameFields.RATING],
            limit: 3,
            sortBy: { field: "rating", order: "desc" },
            filter
        }

        expect(buildOptions(options)).toMatch(expectedResult)


    })

    test("correctly with combined filter", () => {

        /**
         * Options:
         * - Get Name, Rating
         * - Limit to 3
         * - Sort by rating desc
         * - Where (name like "Witcher") | (name like "Gwent")
         */

        let expectedResult = 'fields name,rating;where (name = *"Witcher") | (name = *"Gwent");sort rating desc;limit 3;'

        let filter: Filter = {
            filters: [{ field: GameFields.NAME, postfix: "=", value: '*"Witcher"' }],
        }

        let filter2: Filter = {
            filters: [{ field: GameFields.NAME, postfix: "=", value: '*"Gwent"' }],
        }

        let options: IGDBOptions<Game> = {
            fields: [GameFields.NAME, GameFields.RATING],
            limit: 3,
            sortBy: { field: "rating", order: "desc" },
            combinedFilter: { filters: [filter, filter2], operators: ["|"] }
        }

        expect(buildOptions(options)).toMatch(expectedResult)

    })

    test("correctly when using exclude", () => {

        let expectedResult = "fields *;exclude created_at,updated_at;"

        let options: IGDBOptions<Franchise> = {
            exclude: [FranchiseFields.CREATED_AT, FranchiseFields.UPDATED_AT],
        }

        expect(buildOptions(options)).toMatch(expectedResult)


    })

    test("correctly when given no options", () => {

        let expectedResult = "fields *;"

        expect(buildOptions()).toMatch(expectedResult)

    })

})

describe("build multiquery", () => {

    test("correctly", () => {

        let expectedResult = 'query platforms/count "Platform Count" {};query games/count "Game Count" {};'

        let query1: Query = {
            endpoint: "platforms/count",
            resultName: "Platform Count"
        }

        let query2: Query = {
            endpoint: "games/count",
            resultName: "Game Count"
        }

        expect(buildMultiQuery([query1, query2])).toMatch(expectedResult)


    })

    test("correctly with filters", () => {

        let expectedResult = `query platforms/count "Platform Count" {};query games "Playstation Games" {fields name,platforms.name;where platforms = {48};limit 1;}`

        let query1: Query = {
            endpoint: "platforms/count",
            resultName: "Platform Count"
        }

        let query2: Query = {
            endpoint: "games",
            resultName: "Playstation Games",
            options: {
                fields: [GameFields.NAME, PlatformReferenceFields.NAME],
                filter: {
                    filters: [
                        { field: GameFields.PLATFORMS, postfix: "=", value: "{48}" }
                    ],
                },
                limit: 1
            }
        }

        expect(buildMultiQuery([query1, query2])).toMatch(expectedResult)
    })


    test("throws error when given only 1 query", () => {

        let query1: Query = {
            endpoint: "platforms/count",
            resultName: "Platform Count"
        }

        expect(() => buildMultiQuery([query1])).toThrow()

    })

    test("throws error when given no queries", () => {

        expect(() => buildMultiQuery([])).toThrow()

    })


    test("throws error when given more than 10 queries", () => {

        let queries: Query[] = []

        for(let i = 0; i < 11; i++){

            queries.push({
                endpoint: "platforms/count",
                resultName: "Platform Count"
            })

        }

        expect(() => buildMultiQuery(queries)).toThrow()

    })



})