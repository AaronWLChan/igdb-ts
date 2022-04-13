import { Identifiable } from "../utility";

export interface InvolvedCompany extends Identifiable{
    company: number,
    created_at: number,
    developer: boolean,
    game: number,
    porting: boolean,
    publisher: boolean,
    supporting: boolean,
    updated_at: number
}

export enum InvolvedCompanyFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "COMPANY" = "company",
    "CREATED_AT" = "created_at",
    "DEVELOPER" = "developer",
    "GAME" = "game",
    "PORTING" = "porting",
    "PUBLISHER" = "publisher",
    "SUPPORTING" = "supporting",
    "UPDATED_AT" = "updated_at"
}

/**
 * Referenced from [Game]({@link Game.ts}) - involved_companies field
 */
export enum InvolvedCompanyReferenceFields {
    "ID" = "involved_companies.id",
    "CHECKSUM" = "involved_companies.checksum",
    "COMPANY" = "involved_companies.company",
    "CREATED_AT" = "involved_companies.created_at",
    "DEVELOPER" = "involved_companies.developer",
    "GAME" = "involved_companies.game",
    "PORTING" = "involved_companies.porting",
    "PUBLISHER" = "involved_companies.publisher",
    "SUPPORTING" = "involved_companies.supporting",
    "UPDATED_AT" = "involved_companies.updated_at"
}