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

const ProductListPage: NextPage<Props> = async ({ searchParams }) => {
  const data = await getItemsBySearch(searchParams.search);
  const { categories, items } = data;

  // TODO: handle when items variable is empty

  return (
    <section className={styles.plp_page__container}>
      <Suspense fallback="loading...">
        <ItemList data={items} />
      </Suspense>
    </section>
  )
}

export default ProductListPage