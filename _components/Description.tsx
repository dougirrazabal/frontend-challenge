import { NextPage } from 'next'
import styles from './description.module.css'

interface Props {
  content: string;
}

const Description: NextPage<Props> = ({ content }) => {
  return <div className={styles.description_container}>
    <h2 className={styles.description_title}>
      Lo que tienes que saber de este producto
    </h2>
    <p className={styles.description_paragraph}>
      {content}
    </p>
  </div>
}

export default Description