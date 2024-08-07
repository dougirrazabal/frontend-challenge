import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const API_URL = `https://api.mercadolibre.com/sites/MLA/search?${searchParams.toString()}&limit=4`;
        const response = await fetch(API_URL);

        if(!response.ok) throw new Error('Failed to fetch data from API')

        const data = await response.json();

        return NextResponse.json(data);
        
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }

}
