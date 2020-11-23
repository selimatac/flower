import React from 'react'
import Carousel from '../components/Carousel'

const Home = () => {
    return (
        <div>
            <Carousel />
            <section class="section-specials padding-y border-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <figure class="itemside">
                                <div class="aside">
                                    <span class="icon-sm rounded-circle bg-primary">
                                        <i class="fa fa-lira-sign white"></i>
                                    </span>
                                </div>
                                <figcaption class="info">
                                    <h6 class="title">Uygun Fiyat</h6>
                                    <p class="text-muted">Tüm ürünlerde ve en iyi kalitede ve uygun fiyatla sunuyoruz.</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="col-md-4">
                            <figure class="itemside">
                                <div class="aside">
                                    <span class="icon-sm rounded-circle bg-success">
                                        <i class="fa fa-shipping-fast white"></i>
                                    </span>
                                </div>
                                <figcaption class="info">
                                    <h6 class="title">Hızlı Teslimat</h6>
                                    <p class="text-muted">Siparişinizi verdiğiniz anda hazırlanır ve hızlı bir şekilde yola çıkar.</p>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="col-md-4">
                            <figure class="itemside">
                                <div class="aside">
                                    <span class="icon-sm rounded-circle bg-danger">
                                        <i class="fa fa-comment-dots white"></i>
                                    </span>
                                </div>
                                <figcaption class="info">
                                    <h6 class="title">Bize ulaşın</h6>
                                    <p class="text-muted">İster Whatsapp, ister mail, isterseniz telefon ile ulaşabilirsiniz. </p>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home