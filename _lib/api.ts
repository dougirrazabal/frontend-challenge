import { ItemByIdResponse } from "@/_types/ItemByIdResponse";
import { ItemsResponse } from "@/_types/ItemsResponse";

const { URL } = process.env;

export const getItemsBySearch = async (query: string) => {
    const encodedSearchQuery = encodeURI(query);
    const API_URL = `${URL}/api/items?q=${encodedSearchQuery}`;

    const response = await fetch(API_URL);

    if (!response.ok) throw new Error('Failed to search Items from BFF');

    const data = (await response.json()) as ItemsResponse;

    return data;
}

export const getItemById = async (id: string) => {
    const API_URL = `${URL}/api/items/${id}`;
  
    const response = await fetch(API_URL);
  
    if (!response.ok) throw new Error('Failed to get item by ID from BFF');
  
    const data = (await response.json()) as ItemByIdResponse;

    return data;
};





