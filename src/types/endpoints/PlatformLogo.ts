import { Identifiable, Image } from "../utility";

export interface PlatformLogo extends Image, Identifiable {}

export enum PlatformLogoFields {
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
 * Referenced from [Platform Version}]({@link PlatformVersion.ts}) - platform_logo field
 * 
 * Referenced from [Platform}]({@link Platform.ts}) - Platform field
 */
export enum PlatformLogoReferenceFields {
    "ID" = "platform_logo.id",
    "ALPHA_CHANNEL" = "platform_logo.alpha_channel",
    "ANIMATED" = "platform_logo.animated",
    "CHECKSUM" = "platform_logo.checksum",
    "GAME" = "platform_logo.game",
    "HEIGHT" = "platform_logo.height",
    "IMAGE_ID" = "platform_logo.image_id",
    "URL" = "platform_logo.url",
    "WIDTH" = "platform_logo.width"
}