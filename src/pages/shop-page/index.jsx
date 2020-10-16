import React, { Component } from 'react';
import styles from './shop-page.module.scss';
import shop from '../../mock/shop';
import PreviewCollection from '../../components/collection-preview';

export default class ShopPage extends Component {

    constructor(props) {
        super(props);
        this.state = { collections: shop };
    }

    render() {
        const { collections } = this.state;
        return <div className={styles['shop-page']}>
            <h1>Shop Page</h1>
            { collections.map((item) => 
                <PreviewCollection key={item.id} {...item} />) 
            }
        </div>
    }   
}

