import React, { Component } from 'react'
import { connect } from 'react-redux'

export default (Original) => {
    class AuthGuard extends Component {
        checkAuth = () => {
            this.props.isAuth === true
                ? this.props.history.push('/admin/dashboard')
                : this.props.history.push('/admin/login')
        }
        componentDidMount(){
            this.checkAuth()
        }
        render() {
            return (
                <Original />
            );
        }
    }
    const MapStateToProps = state => {
        return {
            isAuth: state.authenticate.isAuth,
            error: state.authenticate.error
        }
    }
    return connect(MapStateToProps, null)(AuthGuard)
}