import { Identifiable } from "../utility";

export interface PlatformVersion extends Identifiable{
    companies: number[],
    connectivity: string,
    cpu: string,
    graphics: string,
    main_manufacturer: number,
    media: string,
    memory: string,
    name: string, 
    os: string,
    output: string,
    platform_logo: number,
    platform_version_release_dates: number[],
    resolutions: string,
    slug: string,
    sound: string,
    storage: string,
    summary: string,
    url: string
}

export enum PlatformVersionFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "COMPANIES" = "companies",
    "CPU" = "cpu",
    "GRAPHICS" = "graphics",
    "MAIN_MANUFACTURER" = "main_manufacturer",
    "MEDIA" = "media",
    "MEMORY" = "memory",
    "NAME" = "name",
    "OS" = "os",
    "OUTPUT" = "output",
    "PLATFORM_LOGO" = "platform_logo",
    "PLATFORM_VERSION_RELEASE_DATES" = "platform_version_release_dates",
    "RESOLUTIONS" = "resolutions",
    "SLUG" = "slug",
    "SOUND" = "sound",
    "STORAGE" = "storage",
    "SUMMARY" = "summary",
    "URL" = "url"
}

/**
 * Referenced from [Platform}]({@link Platform.ts}) - versions field
 */
export enum PlatformVersionReferenceFields {
    "ID" = "versions.id",
    "CHECKSUM" = "versions.checksum",
    "COMPANIES" = "versions.companies",
    "CPU" = "versions.cpu",
    "GRAPHICS" = "versions.graphics",
    "MAIN_MANUFACTURER" = "versions.main_manufacturer",
    "MEDIA" = "versions.media",
    "MEMORY" = "versions.memory",
    "NAME" = "versions.name",
    "OS" = "versions.os",
    "OUTPUT" = "versions.output",
    "PLATFORM_LOGO" = "versions.platform_logo",
    "PLATFORM_VERSION_RELEASE_DATES" = "versions.platform_version_release_dates",
    "RESOLUTIONS" = "versions.resolutions",
    "SLUG" = "versions.slug",
    "SOUND" = "versions.sound",
    "STORAGE" = "versions.storage",
    "SUMMARY" = "versions.summary",
    "URL" = "versions.url"
}

/**
 * Referenced from [Platform Version Release Date}]({@link PlatformVersionReleaseDate.ts}) - platform_version field
 */
 export enum ReleaseDatePlatformVersionReferenceFields {
    "ID" = "platform_version.id",
    "CHECKSUM" = "platform_version.checksum",
    "COMPANIES" = "platform_version.companies",
    "CPU" = "platform_version.cpu",
    "GRAPHICS" = "platform_version.graphics",
    "MAIN_MANUFACTURER" = "platform_version.main_manufacturer",
    "MEDIA" = "platform_version.media",
    "MEMORY" = "platform_version.memory",
    "NAME" = "platform_version.name",
    "OS" = "platform_version.os",
    "OUTPUT" = "platform_version.output",
    "PLATFORM_LOGO" = "platform_version.platform_logo",
    "PLATFORM_VERSION_RELEASE_DATES" = "platform_version.platform_version_release_dates",
    "RESOLUTIONS" = "platform_version.resolutions",
    "SLUG" = "platform_version.slug",
    "SOUND" = "platform_version.sound",
    "STORAGE" = "platform_version.storage",
    "SUMMARY" = "platform_version.summary",
    "URL" = "platform_version.url"
}