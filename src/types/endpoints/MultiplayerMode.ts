import { Identifiable } from "../utility";

export interface MultiplayerMode extends Identifiable{
    campaigncoop: boolean,
    dropin: boolean,
    game: number,
    lancoop: boolean,
    offlinecoop: boolean,
    offlinecoopmax: number,
    offlinemax: number,
    onlinecoop: boolean,
    onlinecoopmax: number,
    onlinemax: number,
    platform: number,
    splitscreen: boolean,
    splitscreenonline: boolean
}

export enum MultiplayerModeFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CAMPAIGNCOOP" = "campaigncoop",
    "DROPIN" = "dropin",
    "GAME" = "game",
    "LANCOOP" = "lancoop",
    "OFFLINECOOP" = "offlinecoop",
    "OFFLINECOOPMAX" = "offlinecoopmax",
    "OFFLINEMAX" = "offlinemax",
    "ONLINECOOP" = "onlinecoop",
    "ONLINECOOPMAX" = "onlinecoopmax",
    "ONLINEMAX" = "onlinemax",
    "PLATFORM" = "platform",
    "SPLITSCREEN" = "splitscreen",
    "SPLITSCREENONLINE" = "splitscreenonline"
}

/**
 * Referenced from [Game]({@link Game.ts}) - multiplayer_modes field
 */
export enum MultiplayerModeReferenceFields {
    "ID" = "multiplayer_modes.id",
    "CHECKSUM" = "multiplayer_modes.checksum",
    "CAMPAIGNCOOP" = "multiplayer_modes.campaigncoop",
    "DROPIN" = "multiplayer_modes.dropin",
    "GAME" = "multiplayer_modes.game",
    "LANCOOP" = "multiplayer_modes.lancoop",
    "OFFLINECOOP" = "multiplayer_modes.offlinecoop",
    "OFFLINECOOPMAX" = "multiplayer_modes.offlinecoopmax",
    "OFFLINEMAX" = "multiplayer_modes.offlinemax",
    "ONLINECOOP" = "multiplayer_modes.onlinecoop",
    "ONLINECOOPMAX" = "multiplayer_modes.onlinecoopmax",
    "ONLINEMAX" = "multiplayer_modes.onlinemax",
    "PLATFORM" = "multiplayer_modes.platform",
    "SPLITSCREEN" = "multiplayer_modes.splitscreen",
    "SPLITSCREENONLINE" = "multiplayer_modes.splitscreenonline"
}