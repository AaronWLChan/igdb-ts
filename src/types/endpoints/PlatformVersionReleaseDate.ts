import { Identifiable } from "../utility";

export interface PlatformVersionReleaseDate extends Identifiable{
    category: PlatformVersionReleaseDateCategory,
    created_at: number,
    date: number, 
    human: string,
    m: number,
    platform_version: number,
    region: PlatformVersionReleaseDateRegion,
    updated_at: number,
    y: number
}

export enum PlatformVersionReleaseDateFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CREATED_AT" = "created_at",
    "DATE" = "date",
    "HUMAN" = "human",
    "M" = "m",
    "PLATFORM_VERSION" = "platform_version",
    "REGION" = "region",
    "UPDATED_AT" = "updated_at",
    "Y" = "y"
}

/**
 * Referenced from [Platform]({@link Platform.ts}) - platform_version_release_dates field
 */
export enum PlatformVersionReleaseDateReferenceFields {
    "ID" = "platform_version_release_dates.id",
    "CHECKSUM" = "platform_version_release_dates.checksum",
    "CREATED_AT" = "platform_version_release_dates.created_at",
    "DATE" = "platform_version_release_dates.date",
    "HUMAN" = "platform_version_release_dates.human",
    "M" = "platform_version_release_dates.m",
    "PLATFORM_VERSION" = "platform_version_release_dates.platform_version",
    "REGION" = "platform_version_release_dates.region",
    "UPDATED_AT" = "platform_version_release_dates.updated_at",
    "Y" = "platform_version_release_dates.y"
}


export enum PlatformVersionReleaseDateCategory {
    "YYYYMMMMDD" = 0,
    "YYYYMMMM",
    "YYYY",
    "YYYYQ1",
    "YYYYQ2",
    "YYYYQ3",
    "YYYYQ4",
    "TBD"
}

export enum PlatformVersionReleaseDateRegion {
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

