import React from 'react'
import styles from './collection-item.module.scss'

export default function CollectionItem({name, price, imageUrl}) {
    return <div className={styles['collection-item']}>
        <div className={styles['image']} style={{backgroundImage: `url(${imageUrl})`}} />
        <div className={styles['collection-footer']}>
            <span className={styles['name']}>{name}</span>
            <span className={styles['price']}>${price}</span>
        </div>
    </div>
}
