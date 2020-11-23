import React, { Component } from 'react'

class ProductList extends Component {
    render() {
        return (
            <main className="col-md-9">
                <header className="border-bottom mb-4 pb-3">
                    <div className="form-inline">
                        <span className="mr-md-auto">2 Ürün Listeleniyor </span>
                        <select className="mr-2 form-control">
                            <option>Latest items</option>
                            <option>Trending</option>
                            <option>Most Popular</option>
                            <option>Cheapest</option>
                        </select>
                        <div className="btn-group">
                            <a href="#" className="btn btn-outline-secondary" data-toggle="tooltip" title="" data-original-title="List view">
                                <i className="fa fa-bars"></i></a>
                            <a href="#" className="btn  btn-outline-secondary active" data-toggle="tooltip" title="" data-original-title="Grid view">
                                <i className="fa fa-th"></i></a>
                        </div>
                    </div>
                </header>
                <div className="row">
                    <div class="col-md-3">
                        <a href="#" class="card card-product-grid">
                            <div class="img-wrap"> <img src="images/products/buket1.jpg" /> </div>
                            <figcaption class="info-wrap">
                                <p class="title text-truncate">Sonsuz Sevgi 19 Beyaz Gül</p>
                                <small class="text-muted">Buketler</small>
                                <div class="price mt-2">119.00₺</div>
                        </figcaption>
                        </a>
                    </div>
                    <div class="col-md-3">
                        <a href="#" class="card card-product-grid">
                            <div class="img-wrap"> <img src="images/products/buket2.jpg" /> </div>
                            <figcaption class="info-wrap">
                                <p class="title text-truncate">Sonsuz Sevgi 19 Kırmızı Gül</p>
                                <small class="text-muted">Buketler</small>
                                <div class="price mt-2">119.00₺</div>
                        </figcaption>
                        </a>
                    </div>
                </div>
                <nav className="mt-4" aria-label="Page navigation sample">
                    <ul className="pagination">
                        <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </main>
        )
    }
}
export default ProductList