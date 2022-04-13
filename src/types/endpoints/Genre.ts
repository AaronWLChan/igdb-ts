import { Identifiable } from "../utility";

export interface Genre extends Identifiable {
    created_at: number,
    name: string,
    slug: string,
    updated_at: number,
    url: string
}

export enum GenreFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CREATED_AT" = "created_at",
    "NAME" = "name",
    "SLUG" = "slug",
    "UPDATED_AT" = "updated_at",
    "URL" = "url"
}

/**
 * Referenced from [Game]({@link Game.ts}) - genres field
 */
export enum GenreReferenceFields {
    "ID" = "genres.id",
    "CHECKSUM" = "genres.checksum",
    "CREATED_AT" = "cgenres.reated_at",
    "NAME" = "genres.name",
    "SLUG" = "genres.slug",
    "UPDATED_AT" = "genres.updated_at",
    "URL" = "genres.url"
}