import { Identifiable } from "../utility";

export interface GameVersionFeature extends Identifiable {
    category: GameVersionFeatureCategory,
    description: string,
    position: number,
    title: number,
    values: number[]
}

export enum GameVersionFeatureCategory {
    "boolean" = 0,
    "description"
}

export enum GameVersionFeatureFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CATEGORY" = "category",
    "DESCRIPTION" = "description",
    "POSITION" = "position",
    "TITLE" = "title",
    "VALUES" = "values"
}

/**
 * Referenced from [Game Version]{@link GameVersion.ts} - features field
 */
export enum GameVersionFeatureReferenceFields {
    "ID" = "features.id",
    "CHECKSUM" = "features.checksum",
    "CATEGORY" = "features.category",
    "DESCRIPTION" = "features.description",
    "POSITION" = "features.position",
    "TITLE" = "features.title",
    "VALUES" = "features.values"
}