import { Identifiable } from "../utility";

export interface Platform extends Identifiable{
    abbreviation: string,
    alternative_name: string,
    category: PlatformCategory
    created_at: number,
    generation: number,
    name: string,
    platform_family: number,
    platform_logo: number,
    slug: string,
    summary: string,
    updated_at: number,
    url: string,
    versions: number[],
    websites: number[]
}

export enum PlatformCategory {
    "console" = 1 , 
    "arcade" , 
    "platform" , 
    "operating_system" , 
    "portable_console" , 
    "computer",
}

export enum PlatformFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "ABBREVIATION" = "abbreviation",
    "ALTERNATIVE_NAME" = "alternative_name",
    "CATEGORY" = "category",
    "CREATED_AT" = "created_at",
    "GENERATION" = "generation",
    "NAME" = "name",
    "PLATFORM_FAMILY" = "platform_family",
    "PLATFORM_LOGO" = "platform_logo",
    "SLUG" = "slug",
    "SUMMARY" = "summary",
    "UPDATED_AT" = "updated_at",
    "URL" = "url",
    "VERSIONS" = "versions",
    "WEBSITES" = "websites"
}

/**
 * Referenced from [Game]({@link Game.ts}) - platforms field
 * 
 * 
 * Referenced from [Game Engine]({@link GameEngine.ts}) - platforms field
 */
export enum PlatformReferenceFields {
    "ID" = "platforms.id",
    "CHECKSUM" = "platforms.checksum",
    "ABBREVIATION" = "platforms.abbreviation",
    "ALTERNATIVE_NAME" = "platforms.alternative_name",
    "CATEGORY" = "platforms.category",
    "CREATED_AT" = "platforms.created_at",
    "GENERATION" = "platforms.generation",
    "NAME" = "platforms.name",
    "PLATFORM_FAMILY" = "platforms.platform_family",
    "PLATFORM_LOGO" = "platforms.platform_logo",
    "SLUG" = "platforms.slug",
    "SUMMARY" = "platforms.summary",
    "UPDATED_AT" = "platforms.updated_at",
    "URL" = "platforms.url",
    "VERSIONS" = "platforms.versions",
    "WEBSITES" = "platforms.websites"
}

/**
 * Referenced from [Search]({@link Search.ts}) - platform field
 */
export enum SearchPlatformReferenceFields {
    "ID" = "platform.id",
    "CHECKSUM" = "platform.checksum",
    "ABBREVIATION" = "platform.abbreviation",
    "ALTERNATIVE_NAME" = "platform.alternative_name",
    "CATEGORY" = "platform.category",
    "CREATED_AT" = "platform.created_at",
    "GENERATION" = "platform.generation",
    "NAME" = "platform.name",
    "PLATFORM_FAMILY" = "platform.platform_family",
    "PLATFORM_LOGO" = "platform.platform_logo",
    "SLUG" = "platform.slug",
    "SUMMARY" = "platform.summary",
    "UPDATED_AT" = "platform.updated_at",
    "URL" = "platform.url",
    "VERSIONS" = "platform.versions",
    "WEBSITES" = "platform.websites"
}