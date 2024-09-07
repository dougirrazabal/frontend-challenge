import { NextPage } from 'next'
import { Item } from '../_types/Item';
import styles from './itemslist.module.css'
import Image from 'next/image';
import Link from 'next/link';
import Price from './Price';
import Title from './Title';

interface Props {
  data: Item[];
}

const ItemList: NextPage<Props> = ({ data }) => {
  return <div className={styles.item_list__container}>
    {data.map((item) => (
      <div key={item.id} className={styles.item}>
        <Link href={`/items/${item.id}`} className={styles.item_image}>
          <Image
            src={item.picture}
            width={90}
            height={90}
            alt={`Picture of ${item.title}`}
          />
        </Link>
        <div className={styles.item_info}>
          <Link href={`/items/${item.id}`} className={styles.item_info__title}>
            <Title content={item.title} />
          </Link>
          <Price content={item.price} />
        </div>
      </div>
    ))}
  </div>

}

export default ItemList