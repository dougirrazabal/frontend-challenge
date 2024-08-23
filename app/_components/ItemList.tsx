import { NextPage } from 'next'
import { Item } from '../_types/Item';
import styles from './itemslist.module.css'
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  items: Item[];
}

const ItemList: NextPage<Props> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item) => (
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
              {item.title}
            </Link>
            <p>
              {Number(item.price.amount).toLocaleString("es-AR", {style: "currency", currency: item.price.currency})}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList