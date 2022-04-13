import { Identifiable } from "../utility";

export interface GameMode extends Identifiable {
    created_at: number,
    name: string,
    slug: string,
    updated_at: number,
    url: string
}

export enum GameModeFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CREATED_AT" = "created_at",
    "NAME" = "name",
    "SLUG" = "slug",
    "UPDATED_AT" = "updated_at",
    "URL" = "url"
}

/**
 * Referenced from [Game]({@link Game.ts}) - game_modes field
 */
export enum GameModeReferenceFields {
    "ID" = "game_modes.id",
    "CHECKSUM" = "game_modes.checksum",
    "CREATED_AT" = "game_modes.created_at",
    "NAME" = "game_modes.name",
    "SLUG" = "game_modes.slug",
    "UPDATED_AT" = "game_modes.updated_at",
    "URL" = "game_modes.url"
}