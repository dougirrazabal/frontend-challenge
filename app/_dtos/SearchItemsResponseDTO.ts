import { ItemDTO } from "./ItemDTO";

export interface SearchItemsResponseDTO {
    author: {
        name: string;
        lastname: string; 
    },
    categories: string[];
    items: ItemDTO[];
}
