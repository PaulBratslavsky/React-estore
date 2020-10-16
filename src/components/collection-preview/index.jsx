import React from 'react'
import styles from './preview-collection.module.scss'

export default function CollectionPreview({title, items}) {

    if (!title) return <h2>No itmes  found</h2>
    
    return <div className={styles['collection-preview']}>
        <h1 className={styles['title']} >{title}</h1>
        <div className={styles['preview']}>
            { items
                .filter((item, idx) => idx < 4 && item)
                .map(item => <div key={item.id}>{item.name}</div>) }
        </div>
    </div>

}
