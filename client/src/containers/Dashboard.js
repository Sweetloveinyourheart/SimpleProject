import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/dashboardActions';

import Utilities from '../components/DashBoard/Utilities';

import Add from '../components/DashBoard/Add';
import Update from '../components/DashBoard/Update';
import Remove from '../components/DashBoard/Remove';

class DashBoard extends Component {

    getStatus = () => {
        switch (this.props.status) {
            case 'add':
                return <Add />
            case 'update':
                return <Update />
            case 'remove':
                return <Remove />
            default:
                return <Add />
        }
    }

    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="dashboard">
                        <Utilities add={this.props.switchToAdd}
                            update={this.props.switchToUpdate}
                            remove={this.props.switchToRemove} />
                        <div className="content">
                            {this.getStatus()}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => {
    return {
        status: state.dashboard
    }
}


export default connect(mapStateToProps, actions)(DashBoard);