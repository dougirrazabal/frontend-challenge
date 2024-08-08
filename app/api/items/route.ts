import { SearchItemsResponseDTO } from "@/app/_dtos/SearchItemsResponseDTO";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const rawData = await fetchSearchItems(searchParams);
        const SearchItemsResponseDTO = mapToSearchItemsResponseDTO(rawData);

        return NextResponse.json(SearchItemsResponseDTO);
    } catch (error) {
        return NextResponse.json({ message: (error as Error).message }, { status: 500 });
    }
}

const fetchSearchItems = async (searchParams: URLSearchParams): Promise<any> => {
    const API_URL = `https://api.mercadolibre.com/sites/MLA/search?${searchParams.toString()}&limit=4`;
    const response = await fetch(API_URL);

    if(!response.ok) throw new Error('Failed to fetch data from external API')

    return response.json();
}

const mapToSearchItemsResponseDTO = (rawData: any): SearchItemsResponseDTO => {
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
    }));

    return {
        author: {
            name: "Douglas",
            lastname: "Irrazabal"
        },
        categories: categories,
        items: items,
    };
};
