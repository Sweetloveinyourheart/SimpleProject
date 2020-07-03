import React, { Component } from 'react'
import Sidebar from '../components/Shop/Sidebar'
import ShopProduct from '../components/Shop/Product'
import Title from '../components/Shop/Title'
import Modal from './ModalContainer'
import PageController from '../components/Shop/PageController'
import { connect } from 'react-redux'
import * as actions from './../actions/shopActions'


class ShopContainer extends Component {
    async componentDidMount(){
        window.scrollTo(0,0)
        await this.props.getAllProduct(1)
        
    }
    async componentDidUpdate(pP, pS, ss){
        const { category, page } = this.props
        if((pP.category !== category) || (pP.page !== page)){
            window.scrollTo(0,0)
            switch (category) {
                case "all": 
                    return await this.props.getAllProduct(page)
                case "shirt":
                    return await this.props.getShirtProduct(page)
                case "trouser":
                    return await this.props.getTrouserProduct(page)
                case "dress":
                    return await this.props.getDressProduct(page)
                case "costume":
                    return await this.props.getCostumeProduct(page)
                case "accessory":
                    return await this.props.getAccessoryProduct(page)
                default:
                    return await this.props.getAllProduct(page)
            }
        }     
    }
    render() {
        const { pageController, categoryController, activeModal } = this.props
        const { product, page } = this.props
        return (
            <section className="product-area section">
                <div className="container">
                    <div className="row">
                        <Title />
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="product-info">
                                <Sidebar category={categoryController} page={pageController}/>
                                <ShopProduct product={product} activeModal={activeModal}/>                        
                            </div>
                            <PageController page={pageController} activedPage={page}/>
                        </div>
                    </div>
                </div>
                <Modal />
            </section>
        );
    }
}
const mapStateToProps = state => {
    return {
        product: state.shopProduct.product,
        page: state.shopPage.page,
        category: state.shopCategory.category
    }
}
export default connect(mapStateToProps, actions)(ShopContainer);