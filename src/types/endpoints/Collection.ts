import { Identifiable } from "../utility";

export interface Collection extends Identifiable {
    created_at: number,
    games: number[],
    name: string,
    slug: string,
    updated_at: number,
    url: string
}

export enum CollectionFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CREATED_AT" = "created_at",
    "GAMES" = "games",
    "NAME" = "name",
    "SLUG" = "slug",
    "UPDATED_AT" = "updated_at",
    "URL"= "url", 
}

/**
 * Referenced from [Game]({@link Game.ts}) - collection field
 * 
 * Referenced from [Search]({@link Search.ts}) - collection field
 */
export enum CollectionReferenceFields {
    "ID" = "collection.id",
    "CHECKSUM" = "collection.checksum",
    "CREATED_AT" = "collection.created_at",
    "GAMES" = "collection.games",
    "NAME" = "collection.name",
    "SLUG" = "collection.slug",
    "UPDATED_AT" = "collection.updated_at",
    "URL"= "collection.url", 
}

