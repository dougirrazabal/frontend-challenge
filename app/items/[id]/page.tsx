import { NextPage } from 'next'
import { Suspense } from 'react';
import { getItemById } from '@/_lib/api';
import styles from "./styles.module.css";
import Subtitle from '@/_components/Subtitle';
import Title from '@/_components/Title';
import Image from 'next/image';
import Price from '@/_components/Price';
import Description from '@/_components/Description';
import BuyButton from '@/_components/BuyButton';

interface Props {
  params: {
    id: string
  };
}

const ItemPage: NextPage<Props> = async ({ params: { id } }) => {
  const data = await getItemById(id);
  const { item } = data;

  return <div>
    <Suspense fallback="loading...">
      <div key={item.id} className={styles.item_container}>
        <div className={styles.item_header}>
          <Subtitle content={item.condition} />
          <Title content={item.title} />
        </div>
        <div className={styles.item_image}>
          <Image
            src={item.picture}
            width={280}
            height={280}
            alt={`Picture of ${item.title}`}
          />
        </div>
        <div className={styles.item_buybox}>
          <Price content={item.price} />
          <BuyButton content="Comprar ahora" />
        </div>
        <div className={styles.item_description}>
          <Description content={item.description || ''} />
        </div>
      </div>
    </Suspense>
  </div>
}

export default ItemPage