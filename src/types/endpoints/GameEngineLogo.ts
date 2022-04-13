import { Identifiable, Image } from "../utility";

export interface GameEngineLogo extends Image, Identifiable {}

export enum GameEngineLogoFields {
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
 * Referenced from [Game Engine]({@link GameEngine.ts}) - logo field
 */
export enum GameEngineLogoReferenceFields {
    "ID" = "logo.id",
    "ALPHA_CHANNEL" = "logo.alpha_channel",
    "ANIMATED" = "logo.animated",
    "CHECKSUM" = "logo.checksum",
    "GAME" = "logo.game",
    "HEIGHT" = "logo.height",
    "IMAGE_ID" = "logo.image_id",
    "URL" = "logo.url",
    "WIDTH" = "logo.width"
}