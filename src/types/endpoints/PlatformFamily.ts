import { Identifiable } from "../utility";

export interface PlatformFamily extends Identifiable{
    name: string,
    slug: string
}

export enum PlatformFamilyFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "NAME" = "name",
    "SLUG" = "slug"
}

/**
 * Referenced from [Platform]({@link Platform.ts}) - platform_family field
 */
export enum PlatformFamilyReferenceFields {
    "ID" = "platform_family.id",
    "CHECKSUM" = "platform_family.checksum",
    "NAME" = "platform_family.name",
    "SLUG" = "platform_family.slug"
}