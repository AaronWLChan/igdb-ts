//Can only have either a filter or combined filter. You cannot use both.
interface BaseIGDBOptions<T>{
    fields?: (keyof T)[],
    exclude?: (keyof T)[],
    limit?: number,
    offset?: number,
    sortBy?: OrderOption
}

interface DefaultOptions<T> extends BaseIGDBOptions<T> {
    search?: never,
}

interface DefaultOptionsWFilter<T> extends DefaultOptions<T>{
    filter?: Filter,
    combinedFilter?: never
}

interface DefaultOptionsWCombinedFilter<T> extends DefaultOptions<T>{
    filter?: never,
    combinedFilter?: CombinedFilter
}

export type DefaultIGDBOptions<T> = DefaultOptionsWFilter<T> | DefaultOptionsWCombinedFilter<T>

interface SearchOptions<T> extends BaseIGDBOptions<T> {
    search?: string,
}

interface SearchOptionsWFilter<T> extends SearchOptions<T>{
    filter?: Filter,
    combinedFilter?: never
}

interface SearchOptionsWCombinedFilter<T> extends SearchOptions<T>{
    filter?: never,
    combinedFilter?: CombinedFilter
}


export type SearchableIGDBOptions<T> = SearchOptionsWFilter<T> | SearchOptionsWCombinedFilter<T>

export type IGDBOptions<T> = DefaultIGDBOptions<T>  | SearchableIGDBOptions<T>

export interface UntypedIGDBOptionsWFilter extends BaseUntypedIGDBOptions {
    filter?: Filter,
    combinedFilter?: never
}

export interface UntypedIGDBOptionsWCombinedFilter extends BaseUntypedIGDBOptions {
    filter?: never,
    combinedFilter?: CombinedFilter
}


export interface BaseUntypedIGDBOptions {
    search?: string,
    fields?: string[],
    exclude?: string[],
    limit?: number,
    offset?: number,
    sortBy?: OrderOption
}

export type UntypedIGDBOptions = UntypedIGDBOptionsWFilter | UntypedIGDBOptionsWCombinedFilter

export interface Filter {
    filters: FilterOption[]
    operators?: FilterOperator[]
}


export interface CombinedFilter{
    filters: Filter[]
    operators: FilterOperator[]
}

export type FilterOperator = "&" | "|"

export interface FilterOption{
    field: string,
    postfix: PostFix
    value: any

}

export interface Query {
    endpoint: string,
    resultName: string,
    options?: UntypedIGDBOptions
}


export type PostFix = "=" | "!=" | ">" | ">=" | "<" | "<=" | "~" 


export interface OrderOption{
    field: string,
    order: "asc" | "desc"
}
