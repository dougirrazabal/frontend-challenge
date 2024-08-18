import { NextPage } from 'next'
import { ItemsResponse } from '../_types/ItemsResponse';
import ItemList from '../_components/ItemList';

const { URL } = process.env;

interface Props {
  searchParams: {
    search: string;
  };
}

const ItemsPage: NextPage<Props> = async ({ searchParams }) => {
  const encodedSearchQuery = encodeURI(searchParams.search);
  const API_URL = `${URL}/api/items?q=${encodedSearchQuery}`;

  const response = await fetch(API_URL);

  if (!response.ok) throw new Error('Failed to fetch data from BFF');

  const data = (await response.json()) as ItemsResponse;
  const { categories, items } = data;
  
  return <div>
    <ItemList items={items} />
  </div>
}

export default ItemsPage