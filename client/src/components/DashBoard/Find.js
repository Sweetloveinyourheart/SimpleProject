import React, { Component } from 'react';

class Find extends Component {
    render() {
        return (
            <div className="find">
                <h4> Find the product ! </h4>
                <div className="form">
                    <input type="email" placeholder="Search Here..." />
                    <button className="btn" href="#"><i className="fa fa-search"></i></button>
                    <div className="product">
                        <div className="row">
                            <div className="col-md-6 col-"></div>
                        </div>
                        <img src="https://cf.shopee.vn/file/7a19f51e4e2e142926deccbe01b2c3e1" alt="#" />
                        <h4 >Đầm hai dây phối ren</h4>
                        <p>Cost: 220.000 vnd</p>
                        <p>Category: Đầm Váy</p>
                        <p>Description: Quần áo nữ phong cách ulzzang quảng châu</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Find;