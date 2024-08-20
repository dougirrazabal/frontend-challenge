import { NextPage } from 'next'
import { ItemsResponse } from '../_types/ItemsResponse';
import ItemList from '../_components/ItemList';
import { Suspense } from 'react';
import ItemListSkeleton from '../_components/ItemListSkeleton';

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

  // TODO: handle when items variable is empty
  
  return <div>
    <Suspense fallback={<ItemListSkeleton />}>
      <ItemList items={items} />
    </Suspense>
  </div>
}

export default ItemsPage