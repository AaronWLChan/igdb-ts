import { Identifiable } from "../utility";

export interface Franchise extends Identifiable{
    created_at: number,
    games: number[],
    name: string,
    slug: string,
    updated_at: number,
    url: string,
}

export enum FranchiseFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CREATED_AT" = "created_at",
    "GAMES" = "games",
    "NAME" = "name",
    "SLUG" = "slug",
    "UPDATED_AT" = "updated_at",
    "URL" = "url"
}

/**
 * Referenced from [Game]({@link Game.ts}) - franchise field
 */
export enum FranchiseReferenceFields {
    "ID" = "franchise.id",
    "CHECKSUM" = "franchise.checksum",
    "CREATED_AT" = "franchise.created_at",
    "GAMES" = "franchise.games",
    "NAME" = "franchise.name",
    "SLUG" = "franchise.slug",
    "UPDATED_AT" = "franchise.updated_at",
    "URL" = "franchise.url"
}

/**
 * Referenced from [Game]({@link Game.ts}) - franchises field
 */
export enum FranchisesReferenceFields {
    "ID" = "franchises.id",
    "CHECKSUM" = "franchises.checksum",
    "CREATED_AT" = "franchises.created_at",
    "GAMES" = "franchises.games",
    "NAME" = "franchises.name",
    "SLUG" = "franchises.slug",
    "UPDATED_AT" = "franchises.updated_at",
    "URL" = "franchises.url"
}