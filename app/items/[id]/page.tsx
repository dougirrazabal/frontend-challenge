import ItemDetail from '@/_components/ItemDetail';
import { getItemById } from '@/_lib/api';
import { NextPage } from 'next'
import { Suspense } from 'react';

interface Props {
    params: {
        id: string
    };
}

const ItemPage: NextPage<Props> = async ({ params: { id } }) => {
    const data = await getItemById(id);
    const { item } = data;

    return <div>
        <Suspense fallback="loading...">
            <ItemDetail item={item} />
        </Suspense>
    </div>
}

export default ItemPage