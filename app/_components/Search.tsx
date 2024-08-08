'use client';

import { NextPage } from 'next'
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

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


  return <form onSubmit={onSearch}>
    <input
      placeholder='Nunca dejes de buscar'
      value={search}
      onChange={(event) => setSearch(event.target.value)}
    />
    <button type="submit">S</button>
  </form>
}

export default SearchBar