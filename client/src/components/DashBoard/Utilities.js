import React, { Component } from 'react';

class Utilities extends Component {
    render() {
        return (
            <div className="utilities">
                <div className="row">
                    <div className="col-md-6 col-lg-4 col-12"  >
                        <div className="single-utilities" onClick={this.props.add}>
                            <img src="/images/Db/add.png" alt="#" />
                            <p>Add New Product</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-12" >
                        <div className="single-utilities" onClick={this.props.update}>
                            <img src="/images/Db/update.png" alt="#" />
                            <p>Update A Product</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-12" >
                        <div className="single-utilities" onClick={this.props.remove}>
                            <img src="/images/Db/remove.png" alt="#" />
                            <p>Remove A Product</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Utilities;