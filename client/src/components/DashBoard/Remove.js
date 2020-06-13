import React, { Component } from 'react';
import Find from './Find';

class Remove extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            check: ''
        }
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }
    checkValid(check) {
        if (check === 'Ayenlebk') {
            return true
        }
        return false
    }
    onHandleChange(e) {
        var name = e.target.name
        var value = e.target.value
        this.setState({
            [name]: value
        });
    }
    onHandleSubmit(e) {
        e.preventDefault();
        const pass = this.checkValid(this.state.check);
        if (pass === true) {
            console.log(this.state.id);
        }
    }
    render() {
        return (
            <div className="remove">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <Find />
                    </div>
                    <div className="col-lg-6 col-12">
                        <h3> Remove A Product </h3>
                        <form onSubmit={this.onHandleSubmit}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label>Product's Id:</label>
                                        <input name="id" type="text" onChange={this.onHandleChange} />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="form-group">
                                        <label>Capcha :v</label>
                                        <input name="check" type="text" onChange={this.onHandleChange} placeholder="Enter: Ayenlebk" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12">
                                    <div className="form-group button" style={{margin: '33px 0'}}>
                                        <button type="submit" className="btn ">Remove This Product</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Remove;