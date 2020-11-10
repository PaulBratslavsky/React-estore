import React from 'react'
import styles from './collection-overview.module.scss'
import CollectionItem from '../collection-item'

export default function CollectionOverview({products}) {

    if (!products.title) return <h2>Loading</h2>

    return <div>
        <h1>{products.title}</h1>
        <div className={styles['overview']}>
            { products.items.map(item => <CollectionItem key={item.id} item={item}/>) }
        </div>
    </div>
}

