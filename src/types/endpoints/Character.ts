import { Identifiable } from "../utility"

export interface Character extends Identifiable{
    akas: string[],
    country_name: string,
    created_at: number,
    description: string,
    games: number[],
    gender: Gender
    mug_shot: number,
    name: string,
    slug: string,
    species: Species,
    update_at: string,
    url: string
}

export enum Gender {
    "Male" = 0,
    "Female",
    "Other"
}

export enum Species {
    "Human" = 1,
    "Alien" , 
    "Animal" , 
    "Android" , 
    "Unknown"
}

export enum CharacterFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "AKAS" = "akas",
    "COUNTRY_NAME" = "country_name",
    "CREATED_AT" = "created_at",
    "DESCRIPTION" = "description",
    "GAMES" = "games",
    "GENDER" = "gender",
    "MUG_SHOT" = "mug_shot",
    "NAME" = "name",
    "SLUG" = "slug",
    "SPECIES" = "species",
    "UPDATED_AT" = "updated_at",
    "URL" = "url"
}

/**
 * Referenced from [Search]({@link Search.ts}) - character field
 */
export enum CharacterReferenceFields {
    "ID" = "character.id",
    "CHECKSUM" = "character.checksum",
    "AKAS" = "character.akas",
    "COUNTRY_NAME" = "character.country_name",
    "CREATED_AT" = "character.created_at",
    "DESCRIPTION" = "character.description",
    "GAMES" = "character.games",
    "GENDER" = "character.gender",
    "MUG_SHOT" = "character.mug_shot",
    "NAME" = "character.name",
    "SLUG" = "character.slug",
    "SPECIES" = "character.species",
    "UPDATED_AT" = "character.updated_at",
    "URL" = "character.url"
}