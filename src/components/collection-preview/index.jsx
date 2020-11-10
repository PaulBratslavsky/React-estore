import React from 'react'
import styles from './collection-preview.module.scss'
import CollectionItem from '../collection-item'
import { Link } from 'react-router-dom'
import WithSpinner from '../with-spinner'

export default function CollectionPreview({title, items}) {

    if (!title) return <WithSpinner />
    
    return <div className={styles['collection-preview']}>
        <Link to={`shop/${title.toLowerCase()}`}><h1 className={styles['title']} >{title}</h1></Link>
        <div className={styles['preview']}>
            { items
                .filter((item, idx) => idx < 4 && item)
                .map(item => <CollectionItem key={item.id} item={item}/>) }
        </div>
    </div>

}
