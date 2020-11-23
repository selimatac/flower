import React, { Component } from 'react'

class CategoryTop extends Component {
    render() {
        return (
            <section class="section-pagetop bg">
                <div class="container">
                    <h2 class="title-page">Buketler</h2>
                    <nav>
                        <ol class="breadcrumb text-white">
                            <li class="breadcrumb-item"><a href="#">Anasayfa</a></li>
                            <li class="breadcrumb-item"><a href="#">Ürünler</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Buketler</li>
                        </ol>
                    </nav>
                </div>
            </section>
        )
    }
}
export default CategoryTop