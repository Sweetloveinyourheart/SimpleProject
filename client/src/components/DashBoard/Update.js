import React, { Component } from 'react';

class Update extends Component {
    constructor(props) {
        super(props);

        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }
    onHandleChange(e) {
        var name = e.target.name
        var value = e.target.value
        this.setState({
            [name]: value
        });
    }
    async onHandleSubmit(e) {
        e.preventDefault();
        if (!this.state.id) { alert('You must enter Product\'s id') }
        console.log(this.state)

    }
    render() {
        return (
            <div className="update">
                <h3>Update A Product </h3>
                <form onSubmit={this.onHandleSubmit} >
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="form-group">
                                <label>Product's Name<span>*</span></label>
                                <input name="name" type="text" onChange={this.onHandleChange} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="form-group">
                                <label>Product's Cost<span>*</span></label>
                                <input name="cost" type="text" onChange={this.onHandleChange} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="form-group">
                                <label>Product's Category<span>*</span></label>
                                <input name="category" type="text" onChange={this.onHandleChange} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="form-group">
                                <label>Cover Image<span>*</span></label>
                                <input name="image1" type="text" onChange={this.onHandleChange} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="form-group">
                                <label>Main Image</label>
                                <input name="image2" type="text" onChange={this.onHandleChange} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="form-group">
                                <label>Main Image</label>
                                <input name="image3" type="text" onChange={this.onHandleChange} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="form-group">
                                <label>Main Image</label>
                                <input name="image4" type="text" onChange={this.onHandleChange} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="form-group">
                                <label>Link To Product</label>
                                <input name="link" type="text" onChange={this.onHandleChange} />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group message">
                                <label>Product Description<span>*</span></label>
                                <textarea name="description" onChange={this.onHandleChange}></textarea>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="form-group">
                                <label>Product's Id</label>
                                <input name="id" type="text" onChange={this.onHandleChange} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="form-group button" style={{ marginTop: '34px' }}>
                                <button type="submit" className="btn ">Update This Product</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Update;