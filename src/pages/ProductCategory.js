import React from 'react'
import CategorySidebar from '../components/CategorySidebar'
import ProductList from '../components/ProductList'
import CategoryTop from '../components/CategoryTop'

const ProductCategory = () => {
        return (
            <div>
                <CategoryTop/>
                <section className="section-content padding-y">
                    <div className="container">
                        <div className="row">
                            <CategorySidebar />
                            <ProductList/>
                        </div>
                    </div>
                </section>
            </div>
        )
}
export default ProductCategory