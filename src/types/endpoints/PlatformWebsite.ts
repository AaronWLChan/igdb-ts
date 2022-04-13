import { Identifiable } from "../utility"

export interface PlatformWebsite extends Identifiable{
    category: PlatformWebsiteCategory
    trusted: boolean,
    url: string
}

export enum PlatformWebsiteCategory {
    "official" = 1,
    "wikia",
    "wikipedia",
    "facebook",
    "twitter",
    "twitch",
    "instagram",
    "youtube",
    "iphone",
    "ipad",
    "android",
    "steam",
    "reddit",
    "discord",
    "google_plus",
    "tumblr",
    "linkedin",
    "pinterest",
    "soundcloud"
}

export enum PlatformWebsiteFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CATEGORY" = "category",
    "TRUSTED" = "trusted",
    "URL" = "url"
}

/**
 * Referenced from [Platform]({@link Platform.ts}) - websites field
 */
export enum PlatformWebsiteReferenceFields {
    "ID" = "websites.id",
    "CHECKSUM" = "websites.checksum",
    "CATEGORY" = "websites.category",
    "TRUSTED" = "websites.trusted",
    "URL" = "websites.url"
}