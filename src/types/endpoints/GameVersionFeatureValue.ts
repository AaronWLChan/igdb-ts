import { Identifiable } from "../utility";

export interface GameVersionFeatureValue extends Identifiable {
    game: number,
    game_feature: number,
    included_feature: GameVersionFeatureValueIncludedFeature,
    note: string
}

export enum GameVersionFeatureValueIncludedFeature {
    "NOT_INCLUDED" = 0,
    "INCLUDED",
    "PRE_ORDER_ONLY"
}

export enum GameVersionFeatureValueFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "GAME" = "game",
    "GAME_FEATURE" = "game_feature",
    "INCUDED_FEATURE" = "included_feature",
    "NOTE" = "note"
}

/**
 * Reference from [Game Version Feature]{@link GameVersionFeature.ts} - values field
 */
export enum GameVersionFeatureValueReferenceFields {
    "ID" = "values.id",
    "CHECKSUM" = "values.checksum",
    "GAME" = "values.game",
    "GAME_FEATURE" = "values.game_feature",
    "INCUDED_FEATURE" = "values.included_feature",
    "NOTE" = "values.note"
}
