# igdb-ts
An unofficial TypeScript wrapper for v4 of [IGDB.com API](https://api-docs.igdb.com/#about). 

## Install
```javascript
npm i igdb-ts
```

## Usage

#### Prerequisites
* Obtain `Client ID` and `Client Secret` from [Twitch.tv](https://dev.twitch.tv/login).
* To obtain the above, follow instructions provided by IGDB [here](https://api-docs.igdb.com/#about).
* Assign authorized URLs. For development, add `http://localhost`.

#### Important Things to Note
* You should treat your `Client Secret` like a password.
* This package is intended for backend use only.
* IGDB OAuth token limits. See [here.](https://api-docs.igdb.com/#web-and-mobile-applications)
* IGDB's notes on [CORS.](https://api-docs.igdb.com/#cors)

#### Import
```javascript
import { IGDB } from 'igdb-ts';
```

#### Instantiate & Initialise
* `CLIENT_ID` - Client ID retrieved from Twitch
* `CLIENT_SECRET` - Client Secret retrieved from Twitch
* `CLIENT_TOKEN` - Twitch App Access Token (optional). You should pass this if you have a stored app access token.
* `onAccessTokenRetrieved` 
    - Callback for you to store your access token.
    - Passes `clientToken` and `tokenExpiry` (in milliseconds from Epoch).
    - Will not call on `init()` if given `CLIENT_TOKEN`
    - Will be called whenever your access token expires and will generate a new one for you automatically.
* `RATE_OPTIONS` - Axio Rate Limit Options. Default settings are 4 requests / second as per IGDB documentation.

```typescript
const CLIENT_ID = "MY_CLIENT_ID";
const CLIENT_SECRET = "MY_CLIENT_SECRET";
const CLIENT_TOKEN = "MY_CLIENT_TOKEN";
const RATE_OPTIONS = { maxRPS: 4 }

//Callback to save token to storage
const onAccessTokenRetrieved = (token: string, tokenExpiry: number) => {
	//Save to storage
}

const igdb = new IGDB();

igdb.init(CLIENT_ID, CLIENT_SECRET, CLIENT_TOKEN, onAccessTokenRetrieved, RATE_OPTIONS?);
```

### Getting Data

##### Prebuilt Calls
All endpoints described in the API [documentation](https://api-docs.igdb.com/#endpoints) are available. For example:

```javascript
const games = await igdb.getGames();
const characters = await igdb.getCharacters()
```

##### Custom Calls
To build your own custom endpoint calls with your own typed response use the `get<T>()` function.
```typescript
interface GameCount {
    count: number
}

//Get Game Count
const gameCount = await igdb.get<GameCount>("games/count");

```

#### Fields
By default all fields (\*) are returned unless stated otherwise.

##### For Prebuilt Calls
Fields are typed based on the keys of each endpoint response.
```typescript
import { SearchableIGDBOptions } from 'igdb-ts';

const options: SearchableIGDBOptions<Game> = {
	fields: ["name", "rating", "summary"]
}

const games = await igdb.getGames(options);
```

##### For Custom Calls
Fields do not have typing. It is recommended you use provided enums instead.
```typescript
import { GameFields, GenreReferenceFields, UntypedIGDBOptions } from 'igdb-ts';

interface GameGenre {
    id: number,
    name: string
    rating: number,
    genres: { id: number, name: string }[]
}

const options: UntypedIGDBOptions = {
	fields: [GameFields.NAME, GameFields.RATING, GenreReferenceFields.NAME]
}

const games = await igdb.get<GameGenre[]>("games", options);
```


#### Exclude

##### For Prebuilt Calls
Exclude fields are typed.
```typescript
import { SearchableIGDBOptions } from 'igdb-ts'

const options: SearchableIGDBOptions<Game> = {
	exclude: ["rating"]
}

const games = await igdb.getGames(options);
```

##### For Custom Calls
Exclude fields are not typed.
```typescript
import { GameFields, UntypedIGDBOptions, Endpoints } from 'igdb-ts'

const options: UntypedIGDBOptions = {
	exclude: [GameFields.NAME]
}

const games = await igdb.get(Endpoints.GAME, options);
```

#### Expander
To use expanders, you must use the generic  `get()` function as expanders will not follow the shape of defined endpoint response types.

To help build your expander calls use provided enums.
```typescript
import { GameFields, GenreReferenceFields, UntypedIGDBOptions, Endpoints } from 'igdb-ts'

interface GameRatingGenre{
    id: number,
    name: string,
    rating: number,
    genres: { id: number, name; string }[]
}

const options: UntypedIGDBOptions = {
	fields: [GameFields.NAME, GameFields.RATING, GenreReferenceFields.NAME]
}

const games = await igdb.get<GameRatingGenre>(Endpoints.GAME, options);
```

#### Filters
Filters are not typed. This is because you can filter on expander fields e.g. `platform.releaseDates`.

Click [here](https://api-docs.igdb.com/#filters) to view all available filter methods.

Use enums provided to ensure you are using correct fields.

```typescript
import { GameFields, SearchableIGDBOptions } from 'igdb-ts';

const options: SearchableIGDBOptions<Game> = {
	filter: {
		filters: [
		    { GameFields.RATING, ">=", 80 },
	    	{ GameFields.PLATFORMS, "=", "[130, 48]" }
    	],
    	operators: ["&"]
	}
}


const games = await igdb.getGames(options);
```

##### Combined Filters
Combined filters are supported.
*Note: You cannot have a `combinedFilter` and `filter` at the same time.*

```typescript
import { Filter, SearchableIGDBOptions, GameFields } from 'igdb-ts'

// Games released for both PC (6), and PS4 (48) and also has the genre simulator (13).
const filter1: Filter = {
    filters: [
        { field: GameFields.PLATFORMS, postfix: "=", value: "[6, 48]" },
        { field: GameFields.GENRES, postfix: "=", value: 13 }
    ],
    operators: ["&"]
}

// Games released for both Switch (130), and PS4 (48) and also has the genre Role-Playing (13).
const filter2: Filter = {
    filters: [
        { field: GameFields.PLATFORMS, postfix: "=", value: "[130, 48]" },
        { field: GameFields.GENRES, postfix: "=", value: 12 }
    ],
    operators: ["&"]
}

const options: SearchableIGDBOptions<Game> = {
	combinedFilter: {
	    filters: [filter1, filter2],
	    operators: ["|"]
	}
}

const games = await igdb.getGames(options);
```


#### Sorting
Sorting fields are not typed as you can sort on expander fields. Use provided enums where possible.
```javascript
import { GameFields, SearchableIGDBOptions } from 'igdb-ts';

const options: SearchableIGDBOptions<Game> = {
	sortBy: {
		field: GameFields.NAME,
		order: "asc"
	}
}

const games = await igdb.getGames(options);
```
#### Search
Searchable endpoints:

* Characters
* Collections
* Games
* People
* Platforms
* Themes

##### Prebuilt Calls
Prebuilt endpoint calls have been typed so you can only use search for the endpoints above.

```typescript
//Will work
const games = await igdb.getGames({ search: "witcher" });

//Will show compiler error
const companies = await igdb.getCompanies({ search: "cd projekt" })

```

##### Custom Calls
Custom calls are not typed.
Both will compile however, you will encounter an error response from IGDB for trying to search the Companies endpoint.
```typescript
import { Endpoints } from 'igdb-ts';

//Will work
const games = await igdb.get(Endpoints.GAME, { search: "witcher" });

//Will work but will throw error when called
const companies = await igdb.get(Endpoints.COMPANY, { search: "cd projekt" })

```

#### Pagination
Provide an offset and limit.
```typescript
import { SearchableIGDBOptions } from 'igdb-ts'

const options: SearchableIGDBOptions<Game> = {
	limit: 20,
	offset: 10,
}

const games = await igdb.getGames(options);
```

#### Multi-Query
Multiquery is supported. Return type is `any[]`. Therefore you will have to cast each query reponse yourself.
```typescript
import { GameFields, PlatformReferenceFields, Query } from 'igdb-ts'

interface PlayStationGameResult {
    name: string,
    result: {
        id: number,
        name: string,
        platforms: { id: number, name: string }[]
    }
} 

interface PlatformCountResult {
    name: string,
    count: number
}

//Get PlayStation 4 Exclusives
const query1: Query = { 
	endpoint: "game",
	resultName: "PlayStation Games",
	options: {
		fields: [GameFields.NAME, PlatformReferenceFields.NAME],
		filter: {
		    filters: [
		        { GameFields.PLATFORM, "!=", null },
		        { GameFields.PLATFORM, "==", 48 }],
		        ],
		    operators: ["&"]
	    } 
	    limit: 1,
	}
};

//Get Count of Platforms
const query2: Query = { 
	endpoint: "platforms/count", 
	resultName: "Platform Count"
}

const multiQuery = await igdb.multiQuery([query1, query2]);

const playstationGames = multiQuery[0] as PlayStationGameResult
const platformCount = mulitQuery[1] as PlatformCountResult
```

### Images
Image options can be found [here](https://api-docs.igdb.com/#images).
```typescript
import { ImageOptions } from 'igdb-ts'

const options: ImageOptions = {
	imageId:  "mnljdjtrh44x4snmierh",
	size:  "t_thumb",
	retina: true,
}

const imageUrl = igdb.getImageUrl(options);
```

