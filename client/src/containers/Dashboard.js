import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/dashboardActions';

import Utilities from '../components/DashBoard/Utilities';

import Add from '../components/DashBoard/Add';
import Update from '../components/DashBoard/Update';
import Remove from '../components/DashBoard/Remove';
import Find from '../components/DashBoard/Find';

class DashBoard extends Component {
    componentDidMount(){
        window.scrollTo(0,0)
    }

    getStatus = (status, add, update, remove, isSuccess) => {
        switch (status) {
            case 'add':
                return <Add add={add} isSuccess={isSuccess}/>
            case 'update':
                return <Update update={update} isSuccess={isSuccess}/>
            case 'remove':
                return <Remove remove={remove} isSuccess={isSuccess}/>
            default:
                return <Add add={add} isSuccess={isSuccess}/>
        }
    }

    render() {
        const { status, addNewProduct, updateAProduct, removeAProduct, findAProduct, isSuccess } = this.props;
        return (
            <section className="section">
                <div className="container">
                    <div className="dashboard">
                        <Utilities add={this.props.switchToAdd}
                            update={this.props.switchToUpdate}
                            remove={this.props.switchToRemove} />
                        <div className="content">
                            <div className="row">
                                <div className="col-lg-8 col-12">
                                    {this.getStatus(status,
                                        addNewProduct,
                                        updateAProduct,
                                        removeAProduct,
                                        isSuccess)}
                                </div>
                                <div className="col-lg-4 col-12">
                                    <Find find={findAProduct} product={this.props.foundData}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => {
    return {
        status: state.dashboardSwitchUtilities.status,
        foundData: state.dashboardFindAProduct.data,
        isSuccess: state.dashboardUtilities.success
    }
}


export default connect(mapStateToProps, actions)(DashBoard);