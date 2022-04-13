import { Identifiable } from "../utility";

export interface GameVideo extends Identifiable {
    game: number,
    name: string,
    video_id: string
}

export enum GameVideoFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "GAME" = "game",
    "NAME" = "name",
    "VIDEO_ID" = "video_id"
}

/**
 * Referenced from [Game]({@link Game.ts}) - videos field
 */
export enum GameVideoReferenceFields {
    "ID" = "videos.id",
    "CHECKSUM" = "videos.checksum",
    "GAME" = "videos.game",
    "NAME" = "videos.name",
    "VIDEO_ID" = "videos.video_id"
}