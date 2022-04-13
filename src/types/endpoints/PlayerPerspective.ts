import { Identifiable } from "../utility";

export interface PlayerPerspective extends Identifiable{
    created_at: number,
    name: string,
    slug: string,
    updated_at: number,
    url: string
}

export enum PlayerPerspectiveFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CREATED_AT" = "created_at",
    "NAME" = "name",
    "SLUG" = "slug",
    "UPDATED_AT" = "updated_at",
    "URL" = "url"
}

/**
 * Referenced from [Game]({@link Game.ts}) - player_perspectives field
 */
export enum PlayerPerspectiveReferenceFields {
    "ID" = "player_perspectives.id",
    "CHECKSUM" = "player_perspectives.checksum",
    "CREATED_AT" = "player_perspectives.created_at",
    "NAME" = "player_perspectives.name",
    "SLUG" = "player_perspectives.slug",
    "UPDATED_AT" = "player_perspectives.updated_at",
    "URL" = "player_perspectives.url"
}