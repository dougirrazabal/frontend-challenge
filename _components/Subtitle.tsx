import { NextPage } from 'next'
import styles from './subtitle.module.css'

interface Props {
    content: string
}

const Subtitle: NextPage<Props> = ({ content }) => {
  return <span className={styles.subtitle}>{content}</span>
}

export default Subtitle