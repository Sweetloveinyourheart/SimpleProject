import React, { Component } from 'react';

class Add extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            cost: '',
            category: '',
            image1: '', image2: '', image3: '', image4: '',
            description: ''
        }
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }
    onHandleChange(e){
        var name = e.target.name
        var value = e.target.value
        this.setState({
            [name]: value
        });
    }
    onHandleSubmit(e){
        e.preventDefault();
        const newProduct = {
            name: this.state.name,
            cost: this.state.cost,
            category: this.state.category,
            image: [this.state.image1, this.state.image2,this.state.image3,this.state.image4],
            description: this.state.description
        }
        console.log(newProduct)
    }   
    render() {
        return (
            <div className="add">
                <h3>Add New Product </h3>
                <form className="add-form" onSubmit={this.onHandleSubmit} >
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="form-group">
                                <label>Product's Name<span>*</span></label>
                                <input name="name" type="text" onChange={this.onHandleChange} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="form-group">
                                <label>Product's Cost<span>*</span></label>
                                <input name="cost" type="text" onChange={this.onHandleChange} />
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="form-group">
                                <label>Product's Category<span>*</span></label>
                                <input name="category" type="text" onChange={this.onHandleChange} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="form-group">
                                <label>Cover Image<span>*</span></label>
                                <input name="image1" type="text" onChange={this.onHandleChange} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="form-group">
                                <label>Main Image</label>
                                <input name="image2" type="text" onChange={this.onHandleChange} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="form-group">
                                <label>Main Image</label>
                                <input name="image3" type="text" onChange={this.onHandleChange} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-12">
                            <div className="form-group">
                                <label>Main Image</label>
                                <input name="image4" type="text" onChange={this.onHandleChange} />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group message">
                                <label>Product Description<span>*</span></label>
                                <textarea name="description" onChange={this.onHandleChange}></textarea>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group button">
                                <button type="submit" className="btn ">Add To Shop</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Add;