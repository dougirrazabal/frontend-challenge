import { Item } from "./Item";

export interface ItemsResponse {
    author: {
        name: string;
        lastname: string; 
    },
    categories: string[];
    items: Item[];
}
