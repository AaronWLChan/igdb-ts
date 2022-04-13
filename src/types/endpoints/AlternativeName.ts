import { Identifiable } from "../utility";

export interface AlternativeName extends Identifiable {
    comment: string,
    game: number,
    name: string
}

export enum AlternativeNameFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "COMMENT" = "comment",
    "GAME" = "game",
    "NAME" = "name",
}

/**
 * Referenced from [Game]({@link Game.ts}) - alternative_names field
 */
 export enum AlternativeNameReferenceFields {
    "ID" = "alternative_names.id",
    "CHECKSUM" = "alternative_names.checksum",
    "COMMENT" = "alternative_names.comment",
    "GAME" = "alternative_names.game",
    "NAME" = "alternative_names.name",
}
