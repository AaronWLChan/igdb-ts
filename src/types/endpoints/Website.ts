import { Identifiable } from "../utility";

export interface Website extends Identifiable{
    category: WebsiteCategory,
    game: number,
    trusted: boolean,
    url: string
}

export enum WebsiteCategory {
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
    "discord",
}

export enum WebsiteFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CATEGORY" = "category",
    "GAME" = "game",
    "TRUSTED" = "trusted",
    "URL" = "url"
}

/**
 * Referenced from [Game]({@link Game.ts}) - websites field
 */
export enum WebsiteReferenceFields {
    "ID" = "websites.id",
    "CHECKSUM" = "websites.checksum",
    "CATEGORY" = "websites.category",
    "GAME" = "websites.game",
    "TRUSTED" = "websites.trusted",
    "URL" = "websites.url"
}