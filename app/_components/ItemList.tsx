import { NextPage } from 'next'
import { Item } from '../_types/Item';
import styles from './itemslist.module.css'
import Image from 'next/image';

interface Props {
  items: Item[];
}

const ItemList: NextPage<Props> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <div key={item.id} className={styles.item}>
          <Image
            className={styles.item_image}
            src={item.picture}
            width={90}
            height={90}
            alt={`Picture of ${item.title}`}
          />
          <div className={styles.item_info}>
            <h2>{item.title}</h2>
            <div className={styles.item_info__price}>
              <span>{item.price.amount}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList