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

export type PostItem = {
    "slug": string;
    "status": string;
    "user_created": string;,
    "date_created": string;
    "user_updated": string;
    "date_updated": string;
    "title": string;
    "description": string | null;
    "category": "string" | null;
    "body": string | null;
    "tags": number[] | null;
    "cover": string | null;
}

export type PostResponse = PostItem[];