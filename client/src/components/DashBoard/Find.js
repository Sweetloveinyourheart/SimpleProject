import React, { Component } from 'react';
import FindContent from './Find_Content';

class Find extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
    }
    onHandleChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    async onHandleSubmit(e) {
        e.preventDefault();
        await this.props.find(this.state.name)
    }
    showProduct = (product) => {
        if (product) {
            var result = product.map((value, index) => {
                return <FindContent content={value} key={index} />
            })
            return result
        }
        return <h5>Enter product's name ...</h5>

    }
    render() {
        var { product } = this.props;
        return (
            <div className="find">
                <h4> Find the product ! </h4>
                <div className="form">
                    <form onSubmit={this.onHandleSubmit} >
                        <input type="text" placeholder="Search Here..." name="name" onChange={this.onHandleChange} />
                        <button className="btn" type="submit" name="name"><i className="fa fa-search"></i></button>
                    </form>
                    {this.showProduct(product)}
                </div>
            </div>
        );
    }
}

export default Find;