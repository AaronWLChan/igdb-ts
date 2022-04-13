import { Identifiable } from "../utility";

export interface Keyword extends Identifiable {
    created_at: number,
    name: string,
    slug: string,
    updated_at: number,
    url: string,
}

export enum KeywordField {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CREATED_AT" = "created_at",
    "NAME" = "name",
    "SLUG" = "slug",
    "UPDATED_AT" = "updated_at",
    "URL" = "url"
}

/**
 * Referenced from [Game]({@link Game.ts}) - keywords field
 */
export enum KeywordReferenceField {
    "ID" = "keywords.id",
    "CHECKSUM" = "keywords.checksum",
    "CREATED_AT" = "keywords.created_at",
    "NAME" = "keywords.name",
    "SLUG" = "keywords.slug",
    "UPDATED_AT" = "keywords.updated_at",
    "URL" = "keywords.url"
}