import { NextPage } from 'next'
import styles from './title.module.css'

interface Props {
    content: string
}

const Title: NextPage<Props> = ({ content }) => {
  return <h1 className={styles.title}>{content}</h1>
}

export default Title