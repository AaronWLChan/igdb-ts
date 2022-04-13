import { Identifiable } from "../utility";

export interface Company extends Identifiable {
    change_date: number,
    change_date_category: ChangeDateCategory, 
    changed_company_id: number,
    country: number,
    created_at: number,
    description: string,
    developed: number[],
    logo: number,
    name: string,
    parent: number,
    published: number[],
    slug: string,
    start_date: number,
    start_date_category: StartDateCategory,
    updated_at: number,
    url: string,
    websites: number[]
}

export enum ChangeDateCategory {
    "YYYYMMMMDD" = 0, "YYYYMMMM" , "YYYY" , "YYYYQ1" , "YYYYQ2" , "YYYYQ3" , "YYYYQ4" , "TBD"
}


export enum StartDateCategory {
    "YYYYMMMMDD" = 0, "YYYYMMMM" , "YYYY" , "YYYYQ1" , "YYYYQ2" , "YYYYQ3" , "YYYYQ4" , "TBD"
}

export enum CompanyFields {
    "ID" = "id",
    "CHECKSUM" = "checksum",
    "CHANGE_DATE" = "change_date",
    "CHANGE_DATE_CATEGORY" = "change_date_category",
    "CHANGED_COMPANY_ID" = "changed_company_id",
    "COUNTRY" = "country",
    "CREATED_AT" = "created_at",
    "DESCRIPTION" = "description",
    "DEVELOPED" = "developed",
    "LOGO" = "logo",
    "NAME" = "name",
    "PARENT" = "parent",
    "PUBLISHED" = "published",
    "SLUG" = "slug",
    "START_DATE" = "start_date",
    "START_DATE_CATEGORY" = "start_date_category",
    "UPDATED_AT" = "updated_at",
    "URL" = "url",
    "WEBSITES" = "websites"
}

/**
 * Self-Referenced from [Company]({@link Company.ts}) - parent field
 */
 export enum ParentCompanyReferenceFields {
    "ID" = "parent.id",
    "CHECKSUM" = "parent.checksum",
    "CHANGE_DATE" = "parent.change_date",
    "CHANGE_DATE_CATEGORY" = "parent.change_date_category",
    "CHANGED_COMPANY_ID" = "parent.changed_company_id",
    "COUNTRY" = "parent.country",
    "CREATED_AT" = "parent.created_at",
    "DESCRIPTION" = "parent.description",
    "DEVELOPED" = "parent.developed",
    "LOGO" = "parent.logo",
    "NAME" = "parent.name",
    "PARENT" = "parent.parent",
    "PUBLISHED" = "parent.published",
    "SLUG" = "parent.slug",
    "START_DATE" = "parent.start_date",
    "START_DATE_CATEGORY" = "parent.start_date_category",
    "UPDATED_AT" = "parent.updated_at",
    "URL" = "parent.url",
    "WEBSITES" = "parent.websites"
}

/**
 * Self-Referenced from [Company]({@link Company.ts}) - changed_company_id field
 */
 export enum ChangedCompanyReferenceFields {
    "ID" = "changed_company_id.id",
    "CHECKSUM" = "changed_company_id.checksum",
    "CHANGE_DATE" = "changed_company_id.change_date",
    "CHANGE_DATE_CATEGORY" = "changed_company_id.change_date_category",
    "CHANGED_COMPANY_ID" = "changed_company_id.changed_company_id",
    "COUNTRY" = "changed_company_id.country",
    "CREATED_AT" = "changed_company_id.created_at",
    "DESCRIPTION" = "changed_company_id.description",
    "DEVELOPED" = "changed_company_id.developed",
    "LOGO" = "changed_company_id.logo",
    "NAME" = "changed_company_id.name",
    "PARENT" = "changed_company_id.parent",
    "PUBLISHED" = "changed_company_id.published",
    "SLUG" = "changed_company_id.slug",
    "START_DATE" = "changed_company_id.start_date",
    "START_DATE_CATEGORY" = "changed_company_id.start_date_category",
    "UPDATED_AT" = "changed_company_id.updated_at",
    "URL" = "changed_company_id.url",
    "WEBSITES" = "changed_company_id.websites"
}

/**
 * Referenced from [Involved Company]({@link InvolvedCompany.ts}) - company field
 * 
 * Referenced from [Platform Version Company]({@link PlatformVersionCompany.ts}) - company field
 * 
 * Referenced from [Search]({@link Search.ts}) - company field
 */
export enum CompanyReferenceFields {
    "ID" = "company.id",
    "CHECKSUM" = "company.checksum",
    "CHANGE_DATE" = "company.change_date",
    "CHANGE_DATE_CATEGORY" = "company.change_date_category",
    "CHANGED_COMPANY_ID" = "company.changed_company_id",
    "COUNTRY" = "company.country",
    "CREATED_AT" = "company.created_at",
    "DESCRIPTION" = "company.description",
    "DEVELOPED" = "company.developed",
    "LOGO" = "company.logo",
    "NAME" = "company.name",
    "PARENT" = "company.parent",
    "PUBLISHED" = "company.published",
    "SLUG" = "company.slug",
    "START_DATE" = "company.start_date",
    "START_DATE_CATEGORY" = "company.start_date_category",
    "UPDATED_AT" = "company.updated_at",
    "URL" = "company.url",
    "WEBSITES" = "company.websites"
}

/**
 * Referenced from [Game Engine]({@link GameEngine.ts}) - companies field
 */
export enum GameEngineCompanyReferenceFields {
    "ID" = "companies.id",
    "CHECKSUM" = "companies.checksum",
    "CHANGE_DATE" = "companies.change_date",
    "CHANGE_DATE_CATEGORY" = "companies.change_date_category",
    "CHANGED_companies_ID" = "companies.changed_companies_id",
    "COUNTRY" = "companies.country",
    "CREATED_AT" = "companies.created_at",
    "DESCRIPTION" = "companies.description",
    "DEVELOPED" = "companies.developed",
    "LOGO" = "companies.logo",
    "NAME" = "companies.name",
    "PARENT" = "companies.parent",
    "PUBLISHED" = "companies.published",
    "SLUG" = "companies.slug",
    "START_DATE" = "companies.start_date",
    "START_DATE_CATEGORY" = "companies.start_date_category",
    "UPDATED_AT" = "companies.updated_at",
    "URL" = "companies.url",
    "WEBSITES" = "companies.websites"
}