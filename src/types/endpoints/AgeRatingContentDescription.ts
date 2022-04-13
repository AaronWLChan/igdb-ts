import { Identifiable } from "../utility";

export interface AgeRatingContentDescription extends Identifiable {
    category: AgeRatingContentDescriptionCategory,
    description: string,
}

export enum AgeRatingContentDescriptionCategory {
    "PEGI" = 1,
    "ESRB"
}

export enum AgeRatingContentDescriptionFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CATEGORY" = "category",
    "DESCRIPTION" = "description"
}

/**
 * Referenced from [AgeRating]({@link AgeRating.ts}) - content_descriptions field
 */
export enum AgeRatingContentDescriptionReferenceFields {
    "ID" = "content_descriptions.id",
    "CHECKSUM" = "content_descriptions.checksum",
    "CATEGORY" = "content_descriptions.category",
    "DESCRIPTION" = "content_descriptions.description"
}