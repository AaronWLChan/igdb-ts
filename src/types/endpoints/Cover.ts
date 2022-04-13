import { Identifiable, Image } from "../utility";

export interface Cover extends Image, Identifiable {
    game: number
}

export enum CoverFields {
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
 * Referenced from [Game]({@link Game.ts}) - cover field
 */
export enum CoverReferenceFields {
    "ID" = "cover.id",
    "ALPHA_CHANNEL" = "cover.alpha_channel",
    "ANIMATED" = "cover.animated",
    "CHECKSUM" = "cover.checksum",
    "GAME" = "cover.game",
    "HEIGHT" = "cover.height",
    "IMAGE_ID" = "cover.image_id",
    "URL" = "cover.url",
    "WIDTH" = "cover.width"
}

