import { Identifiable } from "../utility";

export interface PlatformVersionCompany extends Identifiable{
    comment: string,
    company: number,
    developer: boolean,
    manufacturer: boolean
}

export enum PlatformVersionCompanyFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "COMMENT" = "comment",
    "COMPANY" = "company",
    "DEVELOPER" = "developer",
    "MANUFACTURER" = "manufacturer"
}

/**
 * Referenced from [Platform]({@link Platform.ts}) - companies field
 */
export enum PlatformVersionCompanyReferenceFields {
    "ID" = "companies.id",
    "CHECKSUM" = "companies.checksum",
    "COMMENT" = "companies.comment",
    "COMPANY" = "companies.company",
    "DEVELOPER" = "companies.developer",
    "MANUFACTURER" = "companies.manufacturer"
}

/**
 * Referenced from [Platform]({@link Platform.ts}) - main_manufacturer field
 */
export enum MainManufacturerPlatformVersionCompanyReferenceFields {
    "ID" = "main_manufacturer.id",
    "CHECKSUM" = "main_manufacturer.checksum",
    "COMMENT" = "main_manufacturer.comment",
    "COMPANY" = "main_manufacturer.company",
    "DEVELOPER" = "main_manufacturer.developer",
    "MANUFACTURER" = "main_manufacturer.manufacturer"
}