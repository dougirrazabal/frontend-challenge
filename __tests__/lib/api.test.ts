import { getItemById, getItemsBySearch } from "@/_lib/api";
import { ItemByIdResponse } from "@/_types/ItemByIdResponse";
import { ItemsResponse } from "@/_types/ItemsResponse";

// Mocks
const mockFetch = jest.fn();
global.fetch = mockFetch as jest.Mock;

// Dummy data
const mockItemsResponse = {
    author: {
        name: "Douglas",
        lastname: "Irrazabal"
    },
    categories: ["one", "two", "three"],
    items: [
        {
            id: '1',
            title: 'Product 1',
            price: {
                currency: 'USD',
                amount: 100,
                decimals: 0,
            },
            picture: 'image-url-1',
            condition: 'new',
            free_shipping: true,
        },
    ],
} as ItemsResponse;

const mockItemByIdResponse = {
    author: {
        name: "Douglas",
        lastname: "Irrazabal"
    },
    item: {
        id: '1',
        title: 'Product 1',
        price: {
            currency: 'USD',
            amount: 100,
            decimals: 0,
        },
        picture: 'image-url-1',
        condition: 'new',
        free_shipping: true,
    }
} as ItemByIdResponse;

describe('getItemsBySearch', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return items when the API call is successful', async () => {
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockItemsResponse),
        });

        const result = await getItemsBySearch('test-query');
        expect(result).toEqual(mockItemsResponse);
        expect(mockFetch).toHaveBeenCalledWith(`${process.env.URL}/api/items?q=test-query`);
    });

    it('should throw an error when the API call fails', async () => {
        mockFetch.mockResolvedValueOnce({
            ok: false,
        });

        await expect(getItemsBySearch('test-query')).rejects.toThrow('Failed to search Items from BFF');
    });
});

describe('getItemById', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should return an item when the API call is successful', async () => {
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockItemByIdResponse),
        });

        const result = await getItemById('1');
        expect(result).toEqual(mockItemByIdResponse);
        expect(mockFetch).toHaveBeenCalledWith(`${process.env.URL}/api/items/1`);
    });

    it('should throw an error when the API call fails', async () => {
        mockFetch.mockResolvedValueOnce({
            ok: false,
        });

        await expect(getItemById('1')).rejects.toThrow('Failed to get item by ID from BFF');
    });
});