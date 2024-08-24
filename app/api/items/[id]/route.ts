import { Item } from "@/app/_types/Item";
import { ItemByIdResponse } from "@/app/_types/ItemByIdResponse";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const itemData = getItemById(params.id);
        const descriptionData = getDescriptionById(params.id);
        const [item, description] = await Promise.all([itemData, descriptionData]);
        const data = mapToItemByIdResponse(item, description);

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    }
}

const getItemById = async (id: string): Promise<any> => {
    const API_URL = `https://api.mercadolibre.com/items/${id}`;
    const response = await fetch(API_URL);

    if(!response.ok) throw new Error('Failed to fetch data from external API')

    return response.json();
}

const getDescriptionById = async (id: string): Promise<any> => {
    const API_URL = `https://api.mercadolibre.com/items/${id}/description`;
    const response = await fetch(API_URL);

    if(!response.ok) throw new Error('Failed to fetch data from external API')

    return response.json();
}

const mapToItemByIdResponse = (itemData: any, descriptionData: any): ItemByIdResponse => {

    const item: Item = {
        id: itemData.id,
        title: itemData.title,
        price: {
            currency: itemData.currency_id,
            amount: itemData.price,
            decimals: itemData.price % 1,
        },
        picture: itemData.thumbnail,
        condition: itemData.condition,
        free_shipping: itemData.shipping.free_shipping,
        sold_quantity: itemData.sold_quantity || 0, // I couldn't find this property in the external API
        description: descriptionData.plain_text,
    };

    return {
        author: {
            name: "Douglas",
            lastname: "Irrazabal"
        },
        item: item,
    };
};
