import React, { Component } from 'react';
class FindContent extends Component {

    render() {
        var { content } = this.props
        return (
            <div className="product">
                <img src={content.images[0]} alt="#" />
                <h4 >{content.name}</h4>
                <p>Price: {content.price}</p>
                <p>Product ID: {content._id}</p>
            </div>
        );
    }
}

export default FindContent;