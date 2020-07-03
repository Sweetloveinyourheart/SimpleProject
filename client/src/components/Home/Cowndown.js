import React, { Component } from 'react';

class Cowndown extends Component {
    showImage = (product) => {
        if (product) {
            const image = product[0].images
            return image[1]
        }
        return "https://via.placeholder.com/750x590"
    }
    showDetail = (product) => {
        if(product){
            const { name, price } = product[0]
            return <div className="heading-block">
            <p className="small-title">What thing we can buy now ?</p>
            <h3 className="title">{name}</h3>
            <p className="text">Suspendisse massa leo, vestibulum cursus nulla sit amet, frungilla placerat lorem. Cars fermentum, sapien. </p>
            <h1 className="price">{price}</h1>
        </div>
        }
        return <h5>Loading...</h5>
        
        
    }
    render() {
        const { product } = this.props
        return (
            <section className="cown-down">

                <div className="section-inner ">

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-12 padding-right">
                                <div className="image">
                                    <img src={this.showImage(product)} alt="#" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 padding-left">
                                <div className="content">
                                    {this.showDetail(product)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Cowndown;