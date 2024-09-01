import { NextPage } from 'next'
import styles from './buybutton.module.css';

interface Props {
    content: string;
}

const BuyButton: NextPage<Props> = ({ content }) => {
  return <button className={styles.buybutton}>
    <span>
      {content}
    </span>
  </button>
}

export default BuyButton