import { Identifiable, Image } from "../utility";

export interface CompanyLogo extends Image, Identifiable {}

export enum CompanyLogoFields {
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
 * Referenced from [Company]({@link Company.ts}) - logo field
 */
export enum CompanyLogoReferenceFields {
    "ID" = "logo.id",
    "ALPHA_CHANNEL" = "logo.alpha_channel",
    "ANIMATED" = "logo.animated",
    "CHECKSUM" = "logo.checksum",
    "HEIGHT" = "logo.height",
    "IMAGE_ID" = "logo.image_id",
    "URL" = "logo.url",
    "WIDTH" = "logo.width"
}

