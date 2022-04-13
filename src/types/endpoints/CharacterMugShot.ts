import { Identifiable, Image } from "../utility";

export interface CharacterMugShot extends Image, Identifiable {}

export enum CharacterMugShotFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "ALPHA_CHANNEL" = "alpha_channel",
    "ANIMATED" = "animated",
    "HEIGHT" = "height",
    "IMAGE_ID" = "image_id",
    "URL" = "url",
    "WIDTH" = "width"
}

/**
 * Referenced from [Character]({@link Character.ts}) - mug_shot field
 */
export enum CharacterMugShotReferenceFields {
    "ID" = "mug_shot.id",
    "ALPHA_CHANNEL" = "mug_shot.alpha_channel",
    "ANIMATED" = "mug_shot.animated",
    "CHECKSUM" = "mug_shot.checksum",
    "HEIGHT" = "mug_shot.height",
    "IMAGE_ID" = "mug_shot.image_id",
    "URL" = "mug_shot.url",
    "WIDTH" = "mug_shot.width"
}
