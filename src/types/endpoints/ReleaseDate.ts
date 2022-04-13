import { Identifiable } from "../utility";

export interface ReleaseDate extends Identifiable{
    category: ReleaseDateCategory,
    created_at: number,
    date: number,
    game: number,
    human: string,
    m: number,
    platform: number,
    region: ReleaseDateRegion,
    updated_at: number,
    y: number
}

export enum ReleaseDateFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CATEGORY" = "category",
    "CREATED_AT" = "created_at",
    "DATE" = "date",
    "GAME" = "game",
    "HUMAN" = "human",
    "M" = "m",
    "PLATFORM" = "platform",
    "REGION" = "region",
    "UPDATED_AT" = "updated_at",
    "Y" = "y"
}

/**
 * Referenced from [Game]({@link Game.ts}) - release_dates field
 */
 export enum ReleaseDateReferenceFields {
    "ID" = "release_dates.id",
    "CHECKSUM" = "release_dates.checksum",
    "CATEGORY" = "release_dates.category",
    "CREATED_AT" = "release_dates.created_at",
    "DATE" = "release_dates.date",
    "GAME" = "release_dates.game",
    "HUMAN" = "release_dates.human",
    "M" = "release_dates.m",
    "PLATFORM" = "release_dates.platform",
    "REGION" = "release_dates.region",
    "UPDATED_AT" = "release_dates.updated_at",
    "Y" = "release_dates.y"
}

export enum ReleaseDateCategory {
    "YYYYMMMMDD" = 0,
    "YYYYMMMM",
    "YYYY",
    "YYYYQ1",
    "YYYYQ2",
    "YYYYQ3",
    "YYYYQ4",
    "TBD"
}

export enum ReleaseDateRegion {
    "europe" = 1,
    "north_america",
    "australia",
    "new_zealand",
    "japan",
    "china",
    "asia",
    "worldwide",
    "korea",
    "brazil"
}