import { NextPage } from 'next'
import { Item } from '../_types/Item';

interface Props {
  items: Item[];
}

const ItemList: NextPage<Props> = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default ItemList