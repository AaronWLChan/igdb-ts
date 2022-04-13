import { Identifiable } from "../utility";

export interface GameEngine extends Identifiable {
    companies: number[],
    created_at: number,
    description: string,
    logo: number,
    name: string,
    platforms: number[],
    slug: string,
    update_at: number,
    url: string
}

export enum GameEngineFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "COMPANIES" = "companies",
    "CREATED_AT" = "created_at",
    "DESCRIPTION" = "description",
    "LOGO" = "logo",
    "NAME" = "name",
    "PLATFORMS" = "platforms",
    "SLUG" = "slug",
    "UPDATE_AT" = "update_at",
    "URL" = "url"
}

/**
 * Referenced from [Game]({@link Game.ts}) - game_engines field
 */
export enum GameEngineReferenceFields {
    "ID" = "game_engines.id",
    "CHECKSUM" = "game_engines.checksum",
    "COMPANIES" = "game_engines.companies",
    "CREATED_AT" = "game_engines.created_at",
    "DESCRIPTION" = "game_engines.description",
    "LOGO" = "game_engines.logo",
    "NAME" = "game_engines.name",
    "PLATFORMS" = "game_engines.platforms",
    "SLUG" = "game_engines.slug",
    "UPDATE_AT" = "game_engines.update_at",
    "URL" = "game_engines.url"
}