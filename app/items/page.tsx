import { NextPage } from 'next'
import ItemList from '@/_components/ItemList';
import { Suspense } from 'react';
import { getItemsBySearch } from '@/_lib/api';
import styles from './styles.module.css';

interface Props {
  searchParams: {
    search: string;
  };
}

const ItemListPage: NextPage<Props> = async ({ searchParams }) => {
  const data = await getItemsBySearch(searchParams.search);
  const { categories, items } = data;

  // TODO: handle when items variable is empty

  return <div className={styles.item_list__container}>
    <Suspense fallback="loading...">
      <div className={styles.plp_container}>
        {items.map((item) => (
          <ItemList key={item.id} item={item} />
        ))}
      </div>
    </Suspense>
  </div>
}

export default ItemListPage