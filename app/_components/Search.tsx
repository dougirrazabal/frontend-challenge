'use client';

import { NextPage } from 'next'
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { CgSearch } from "react-icons/cg";
import styles from './search.module.css'

interface Props {}

const SearchBar: NextPage<Props> = ({}) => {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams(searchParams);
    
    params.set('search', search);
    
    router.push(`/items?${params.toString()}`);
  }


  return <form className={styles.form} onSubmit={onSearch}>
    <input
      className={styles.input}
      placeholder='Nunca dejes de buscar'
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
    <button className={styles.button} type="submit">
      <CgSearch />
    </button>
  </form>
}

export default SearchBar