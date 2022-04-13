import { Identifiable } from "../utility";

export interface Theme extends Identifiable {
    created_at: number,
    name: string,
    slug: string,
    updated_at: number,
    url: string,
}

export enum ThemeFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CREATED_AT" = "created_at",
    "NAME" = "name",
    "SLUG" = "slug",
    "UPDATED_AT" = "updated_at",
    "URL" = "url"
}

/**
 * Referenced from [Game]({@link Game.ts}) - themes field
 */
export enum ThemeReferenceFields {
    "ID" = "themes.id",
    "CHECKSUM" = "themes.checksum",
    "CREATED_AT" = "themes.created_at",
    "NAME" = "themes.name",
    "SLUG" = "themes.slug",
    "UPDATED_AT" = "themes.updated_at",
    "URL" = "themes.url"
}

/**
 * Referenced from [Search]({@link Search.ts}) - theme field
 */
export enum SearchThemeReferenceFields {
    "ID" = "theme.id",
    "CHECKSUM" = "theme.checksum",
    "CREATED_AT" = "theme.created_at",
    "NAME" = "theme.name",
    "SLUG" = "theme.slug",
    "UPDATED_AT" = "theme.updated_at",
    "URL" = "theme.url"
}