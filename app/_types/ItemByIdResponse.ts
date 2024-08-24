import { Item } from "./Item";

export interface ItemByIdResponse {
    author: {
        name: string;
        lastname: string; 
    },
    item: Item;
}
