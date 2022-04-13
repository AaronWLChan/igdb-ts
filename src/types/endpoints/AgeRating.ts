import { Identifiable } from "../utility";

export interface AgeRating extends Identifiable {
    category: AgeRatingCategory,
    content_descriptions: number[],
    rating: AgeRatingType,
    rating_cover_url: string,
    synopsis: string
}

export enum AgeRatingCategory {
    "ESRB" = 1 ,
    "PEGI" ,
    "CERO" ,
    "USK" ,
    "GRAC" ,
    "CLASS_IND" ,
    "ACB"
}

export enum AgeRatingType {
    "Three" = 1,
    "Seven",
    "Twelve",
    "Sixteen",
    "Eighteen",
    "RP",
    "EC",
    "E",
    "E10",
    "T",
    "M",
    "AO",
    "CERO_A",
    "CERO_B",
    "CERO_C",
    "CERO_D",
    "CERO_Z",
    "USK_0",
    "USK_6",
    "USK_12",
    "USK_18",
    "GRAC_ALL",
    "GRAC_Twelve",
    "GRAC_Fifteen",
    "GRAC_Eighteen",
    "GRAC_TESTING",
    "CLASS_IND_L",
    "CLASS_IND_Ten",
    "CLASS_IND_Twelve",
    "CLASS_IND_Fourteen",
    "CLASS_IND_Sixteen",
    "CLASS_IND_Eighteen",
    "ACB_G",
    "ACB_PG",
    "ACB_M",
    "ACB_MA15",
    "ACB_R18",
    "ACB_RC",
}

export enum AgeRatingFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CATEGORY" = "category",
    "CONTENT_DESCRIPTIONS" = "content_descriptions",
    "RATING" = "rating",
    "RATING_COVER_URL" = "rating_cover_url",
    "SYNOPSIS" = "synopsis"
}

/**
 * Referenced from [Game]({@link Game.ts}) - age_ratings field
 */
export enum AgeRatingReferenceFields {
    "ID" = "age_ratings.id",
    "CHECKSUM" = "age_ratings.checksum",
    "CATEGORY" = "age_ratings.category",
    "CONTENT_DESCRIPTIONS" = "age_ratings.content_descriptions",
    "RATING" = "age_ratings.rating",
    "RATING_COVER_URL" = "age_ratings.rating_cover_url",
    "SYNOPSIS" = "age_ratings.synopsis"
}