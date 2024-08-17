import { NextPage } from 'next'

const { URL } = process.env;

interface Props {
  searchParams: {
    search: string;
  };
}

const ItemsPage: NextPage<Props> = async ({ searchParams }) => {
  const encodedSearchQuery = encodeURI(searchParams.search);
  const API_URL = `${URL}/api/items?q=${encodedSearchQuery}`;

  const response = await fetch(API_URL);

  if (!response.ok) throw new Error('Failed to fetch data from BFF');

  const data = await response.json();
  
  return <div>List of products</div>
}

export default ItemsPage