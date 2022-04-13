import { Identifiable } from "../utility";

export interface ExternalGame extends Identifiable {
    category: ExternalGameCategory,
    countries: number[],
    created_at: number,
    game: number,
    media: ExternalGameMedia,
    name: string,
    platform: number,
    uid: string,
    updated_at: number,
    url: string,
    year: number
}

export enum ExternalGameCategory {
    "steam" = 1,
    "gog" = 5,
    "youtube" = 10,
    "microsoft" = 11,
    "apple" = 13,
    "twitch" = 14,
    "android" = 15,
    "amazon_asin" = 20,
    "amazon_luna" = 22,
    "amazon_adg" = 23,
    "epic_game_store" = 26,
    "oculus" = 28,
}

export enum ExternalGameMedia {
    "media" = 1,
    "physical"
}

export enum ExternalGameFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CATEGORY" = "category",
    "COUNTRIES" = "countries",
    "CREATED_AT" = "created_at",
    "GAME" = "game",
    "MEDIA" = "media",
    "NAME" = "name",
    "PLATFORM" = "platform",
    "UID" = "uid",
    "UPDATED_AT" = "updated_at",
    "URL" = "url",
    "YEAR" = "year"
}

/**
 * Referenced from [Game]({@link Game.ts})
 */
export enum ExternalGameReferenceFields {
    "ID" = "external_games.id",
    "CHECKSUM" = "external_games.checksum",
    "CATEGORY" = "external_games.category",
    "COUNTRIES" = "external_games.countries",
    "CREATED_AT" = "external_games.created_at",
    "GAME" = "external_games.game",
    "MEDIA" = "external_games.media",
    "NAME" = "external_games.name",
    "PLATFORM" = "external_games.platform",
    "UID" = "external_games.uid",
    "UPDATED_AT" = "external_games.updated_at",
    "URL" = "external_games.url",
    "YEAR" = "external_games.year"
}