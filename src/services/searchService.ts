import { SearchResult } from "../features/SearchResults";

export interface SearchParams {
    keyword: string;
    page?: number;
    pageSize?: number;
}

export interface SearchResponse {
    results: SearchResult[];
}

export const performSearch = async (params: SearchParams): Promise<SearchResponse> => {
    const apiUrl = import.meta.env.VITE_BACKEND_URL;

    const queryParams = new URLSearchParams();
    queryParams.append('keyword', params.keyword);
    if (params.page) {
        queryParams.append('page', params.page.toString());
    }
    if (params.pageSize) {
        queryParams.append('pageSize', params.pageSize.toString());
    }

    const response = await fetch(`${apiUrl}/api/search?${queryParams.toString()}`, {
        method: 'GET'
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};
