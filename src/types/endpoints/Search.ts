import { Identifiable } from "../utility";

export interface Search extends Identifiable{
    alternative_name: string,
    character: number,
    collection: number,
    company: number,
    description: string,
    game: number,
    name: string,
    platform: number,
    published_at: number,
    test_dummy: number,
    theme: number,
}

export enum SearchFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "ALTERNATIVE_NAME" = "alternative_name",
    "CHARACTER" = "character",
    "COLLECTION" = "collection",
    "COMPANY" = "company",
    "DESCRIPTION" = "description",
    "GAME" = "game",
    "NAME" = "name",
    "PLATFORM" = "platform",
    "PUBLISHED_AT" = "published_at",
    "TEST_DUMMY" = "test_dummy",
    "THEME" = "theme"
}