import React, { Component } from 'react';
class Sidebar extends Component {
    
    render() {
        return (
            <div className="nav-main">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#man" role="tab">Tất Cả</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#women" role="tab">Áo</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#kids" role="tab">Quần</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#accessories" role="tab">Đầm</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#essential" role="tab">Chân Váy</a></li>
                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#prices" role="tab">Phụ Kiện</a></li>
                </ul>
            </div>

        );
    }
}

export default Sidebar;