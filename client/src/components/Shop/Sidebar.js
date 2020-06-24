import React, { Component } from 'react';
class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isActive: "all"
        }
    }
    onHandleClick = async (e) => {
        const name = e.target.name
        this.setState({
            isActive: name
        })
        this.props.category(name)
        this.props.page(1)
        
    }
    isActive = (name) => {
        if (name === this.state.isActive) {
            return "nav-link active"
        }
        return "nav-link"
    }
    render() {
        return (
            <div className="nav-main">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <button className={this.isActive("all")}
                            name="all"
                            onClick={this.onHandleClick}>
                            Tất Cả
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={this.isActive("shirt")}
                            name="shirt"
                            onClick={this.onHandleClick}>
                            Áo
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={this.isActive("trouser")}
                            name="trouser"
                            onClick={this.onHandleClick}>
                            Quần
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={this.isActive("dress")}
                            name="dress"
                            onClick={this.onHandleClick}>
                            Váy
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={this.isActive("costume")}
                            name="costume"
                            onClick={this.onHandleClick}>
                            Set Trang Phục
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className={this.isActive("accessory")}
                            name="accessory"
                            onClick={this.onHandleClick}>
                            Phụ Kiện
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;