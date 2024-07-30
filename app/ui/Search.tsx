'use client';

import { NextPage } from 'next'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props {}

const SearchBar: NextPage<Props> = ({}) => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const encodedQuery = encodeURI(query);
    router.push(`/items?search=${encodedQuery}`);
  }


  return <form onSubmit={onSearch}>
    <input
      placeholder='Nunca dejes de buscar'
      value={query}
      onChange={(event) => setQuery(event.target.value)}
    />
    <button type="submit">S</button>
  </form>
}

export default SearchBar