import { Identifiable } from "../utility"

export interface GameVersion extends Identifiable {
    created_at: number,
    features: number[],
    game: string,
    games: number[]
    updated_at: number,
    url: string
}

export enum GameVersionFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CREATED_AT" = "created_at",
    "FEATURES" = "features",
    "GAME" = "game",
    "GAMES" = "games",
    "UPDATED_AT" = "updated_at",
    "URL" = "url"
}