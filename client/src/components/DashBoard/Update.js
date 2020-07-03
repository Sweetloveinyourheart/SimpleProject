import React, { Component } from 'react';

class Update extends Component {
    constructor(props) {
        super(props);
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
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
        if(!this.state._id){
            alert('You must enter product ID !')
        }
        await this.props.update(this.state, this.state._id)
        this.props.isSuccess === true ? alert('Update product successfully !') : alert('Update product Failed')
        
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
                                <select onChange={this.onHandleChange} name="category">
                                    <option value="Áo"> Áo </option>
                                    <option value="Quần"> Quần </option>
                                    <option value="Váy"> Váy </option>
                                    <option value="Phụ Kiện"> Phụ Kiện </option>
                                    <option value="Set"> Set </option>
                                </select>
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
                            <label>Product ID<span>*</span></label>
                                <input name="_id" type="text" onChange={this.onHandleChange}  />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="form-group button" style={{marginTop: '30px'}}>
                                <button className="btn ">Update This Product</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Update;