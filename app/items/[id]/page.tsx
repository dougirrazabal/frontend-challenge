import { getItemById } from '@/_lib/api';
import { NextPage } from 'next'

interface Props {
    params: {
        id: string
    };
}

const ItemPage: NextPage<Props> = async ({ params: { id } }) => {
    const data = await getItemById(id);

  return <div>{id}</div>
}

export default ItemPage