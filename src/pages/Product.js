import React from 'react'
import CategoryTop from '../components/CategoryTop'

const Product = () => {
    return (
        <React.Fragment>
            <CategoryTop />
            <div className="container">
                <div className="row no-gutters">
                    <aside className="col-md-6">
                        <article className="gallery-wrap">
                            <div className="img-big-wrap">
                                <div> <a href="#"><img src="images/products/buket1.jpg" /></a></div>
                            </div>
                            <div className="thumbs-wrap">
                                <a href="#" className="item-thumb"> <img src="images/products/buket1.jpg" /></a>
                                <a href="#" className="item-thumb"> <img src="images/products/buket2.jpg" /></a>
                            </div>
                        </article>
                    </aside>
                    <main className="col-md-6 border-left">
                        <article className="content-body">

                            <h2 className="title">Sonsuz Sevgi 19 Beyaz Gül</h2>

                            <div className="mb-3">
                                <var className="price h4">119.00₺</var>
                            </div>

                            <p>Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.</p>


                            <dl className="row">
                                <dt className="col-sm-3">Ürün Kodu#</dt>
                                <dd className="col-sm-9">BKT-1000</dd>

                                <dt className="col-sm-3">Renk</dt>
                                <dd className="col-sm-9">Beyaz</dd>

                                <dt className="col-sm-3">Etiketler</dt>
                                <dd className="col-sm-9">
                                    <span class="badge badge-primary d-inline-block mr-1">Buket</span>
                                    <span class="badge badge-primary d-inline-block mr-1">Anneler Günü</span>
                                </dd>
                            </dl>

                            <hr />
                            <div className="form-row">
                                <div className="form-group col-md flex-grow-0">
                                    <label>Quantity</label>
                                    <div className="input-group mb-3 input-spinner">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-light" type="button" id="button-plus"> + </button>
                                        </div>
                                        <input type="text" className="form-control" value="1" />
                                        <div className="input-group-append">
                                            <button className="btn btn-light" type="button" id="button-minus"> − </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group col-md">
                                    <label>Select size</label>
                                    <div className="mt-1">
                                        <label className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" name="select_size" checked="" className="custom-control-input" />
                                            <div className="custom-control-label">Small</div>
                                        </label>

                                        <label className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" name="select_size" className="custom-control-input" />
                                            <div className="custom-control-label">Medium</div>
                                        </label>

                                        <label className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" name="select_size" className="custom-control-input" />
                                            <div className="custom-control-label">Large</div>
                                        </label>

                                    </div>
                                </div>
                            </div>

                            <a href="#" className="btn  btn-primary"> Buy now </a>
                            <a href="#" className="btn  btn-outline-primary"> <span className="text">Add to cart</span> <i className="fas fa-shopping-cart"></i>  </a>
                        </article>
                    </main>
                </div>
            </div>
        </React.Fragment >
    )
}
export default Product