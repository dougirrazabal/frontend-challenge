import { Item } from '@/_types/Item'
import styles from './itemdetail.module.css'

import { NextPage } from 'next'
import Image from 'next/image';

interface Props {
    item: Item;
}

const ItemDetail: NextPage<Props> = ({ item }) => {
  return (
    <div key={item.id}>
      <Image
        src={item.picture}
        width={180}
        height={180}
        alt={`Picture of ${item.title}`}
      />
      <div>
        <p>{item.condition}</p>
        <h1>{item.title}</h1>
        <button disabled={true}>
          Comprar
        </button>
      </div>
      <div>
        <p>{item.description}</p>
      </div>
    </div>
  )
}

export default ItemDetail