import { Identifiable } from "../utility"

export interface CompanyWebsite extends Identifiable {
    category: CompanyWebsiteCategory,
    trusted: boolean,
    url: string
}

export enum CompanyWebsiteCategory {
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
    "itch",
    "epicgames",
    "gog",
    "discord"
}

export enum CompanyWebsiteFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CATEGORY" = "category",
    "TRUSTED" = "trusted",
    "URL" = "url"
}

/**
 * Referenced from [Company]({@link Company.ts}) - websites field
 */
export enum CompanyWebsiteReferenceFields {
    "ID" = "websites.id",
    "CHECKSUM" = "websites.checksum",
    "CATEGORY" = "websites.category",
    "TRUSTED" = "websites.trusted",
    "URL" = "websites.url"
}