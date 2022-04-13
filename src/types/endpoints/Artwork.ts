import { Identifiable, Image } from "../utility";

export interface Artwork extends Image, Identifiable {
    game: number,
}

export enum ArtworkFields {
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
 * Referenced from [Game]({@link Game.ts}) - artworks field
 */
export enum ArtworkReferenceFields {
    "ID" = "artworks.id",
    "ALPHA_CHANNEL" = "artworks.alpha_channel",
    "ANIMATED" = "artworks.animated",
    "CHECKSUM" = "artworks.checksum",
    "GAME" = "artworks.game",
    "HEIGHT" = "artworks.height",
    "IMAGE_ID" = "artworks.image_id",
    "URL" = "artworks.url",
    "WIDTH" = "artworks.width"
}

