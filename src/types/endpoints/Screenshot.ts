import { Identifiable, Image } from "../utility";

export interface Screenshot extends Image, Identifiable{
    game: number
}

export enum ScreenshotFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "ALPHA_CHANNEL" = "alpha_channel",
    "ANIMATED" = "animated",
    "GAME" = "game",
    "HEIGHT" = "height",
    "IMAGE_ID" = "image_id",
    "URL" = "url",
    "WIDTH" = "width"
}

/**
 * Referenced from [Game]({@link Game.ts}) - screenshots field
 */
export enum ScreenshotReferenceFields {
    "ID" = "screenshots.id",
    "ALPHA_CHANNEL" = "screenshots.alpha_channel",
    "ANIMATED" = "screenshots.animated",
    "CHECKSUM" = "screenshots.checksum",
    "GAME" = "screenshots.game",
    "HEIGHT" = "screenshots.height",
    "IMAGE_ID" = "screenshots.image_id",
    "URL" = "screenshots.url",
    "WIDTH" = "screenshots.width"
}