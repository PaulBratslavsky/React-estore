import React from 'react'
import styles from './collection-overview.module.scss'
import CollectionItem from '../collection-item'
import WithSpinner from '../with-spinner'

export default function CollectionOverview({products}) {

    if (!products.title) return <WithSpinner />

    return <div>
        <h1>{products.title}</h1>
        <div className={styles['overview']}>
            { products.items.map(item => <CollectionItem key={item.id} item={item}/>) }
        </div>
    </div>
}

