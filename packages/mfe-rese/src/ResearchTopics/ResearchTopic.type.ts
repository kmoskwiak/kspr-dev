export type CategoryItem = {
    "slug": string;
    "date_updated": string;
    "description": string | null;
    "name": string;
    "parent": string | null;
    "icon": string | null;
    "cover": string | null;
}

export type ResearchTopicsResponse = {
    data: CategoryItem[]
}