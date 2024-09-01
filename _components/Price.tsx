import { NextPage } from 'next'
import { Price as price_type } from '@/_types/Price';
import styles from './price.module.css'

interface Props {
    content: price_type; 
}

const Price: NextPage<Props> = ({ content }) => {
  return <p className={styles.price}>
        {Number(content.amount).toLocaleString("es-AR", {style: "currency", currency: content.currency})}
    </p>
}

export default Price