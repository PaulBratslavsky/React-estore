import React from 'react'
import { connect } from 'react-redux'
import { selectCategory } from '../../redux/products/products.selector'
import CollectionOverview from '../../components/collection-overview'

function CategoryPage({ products }) {
    return <div>
        <CollectionOverview products={products[0]}/>
    </div>
}

const mapStateToProps = (state, ownProps) =>  ({
    products: [selectCategory(ownProps.match.params.categoryID)(state)]
})
    
export default connect(mapStateToProps)(CategoryPage)