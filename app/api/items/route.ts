import { Item } from "@/_types/Item";
import { ItemsResponse } from "@/_types/ItemsResponse";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const data = await fetchItemList(searchParams);
        const items = mapToItemsResponse(data);

        return NextResponse.json(items);
    } catch (error) {
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    }
}

const fetchItemList = async (searchParams: URLSearchParams): Promise<any> => {
    const API_URL = `https://api.mercadolibre.com/sites/MLA/search?${searchParams.toString()}&limit=4`;
    const response = await fetch(API_URL);

    if(!response.ok) throw new Error('Failed to fetch data from external API')

    return response.json();
}

const mapToItemsResponse = (rawData: any): ItemsResponse => {
    const categories = rawData.available_filters.find((filter: any) => filter.id === 'category')?.values.map((value: any) => value.name) || [];

    const items = rawData.results.map((item: any) => ({
        id: item.id,
        title: item.title,
        price: {
            currency: item.currency_id,
            amount: item.price,
            decimals: (item: any) => item.price % 1,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
    })) as Item[];

    return {
        author: {
            name: "Douglas",
            lastname: "Irrazabal"
        },
        categories: categories,
        items: items,
    };
};
