import { NextPage } from 'next'
import ItemList from '@/_components/ItemList';
import { Suspense } from 'react';
import ItemListSkeleton from '@/_components/ItemListSkeleton';
import { getItemsBySearch } from '@/_lib/api';

const { URL } = process.env;

interface Props {
  searchParams: {
    search: string;
  };
}

const ItemsPage: NextPage<Props> = async ({ searchParams }) => {
  const data = await getItemsBySearch(searchParams.search);
  const { categories, items } = data;

  // TODO: handle when items variable is empty
  
  return <div>
    <Suspense fallback={<ItemListSkeleton />}>
      <ItemList items={items} />
    </Suspense>
  </div>
}

export default ItemsPage