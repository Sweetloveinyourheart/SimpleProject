import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from './../../actions/authenticateActions'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    checkAuth = () => {
        this.props.isAuth === true
            ? this.props.history.push('/admin/dashboard')
            : this.props.history.push('/admin/login')
    }
    onHandleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        })
    }
    onHandleSubmit = async (e) => {
        e.preventDefault()
        const account = this.state
        await this.props.login(account)
        this.checkAuth()
    } 
    render() {
        return (
            <section className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            
                        </div>
                        <div className="col-lg-4">
                            <div className="login-form">
                                <h5>Login To Sweet's Dashboard</h5>
                                <form onSubmit={this.onHandleSubmit}>
                                    <div className="form-group row">
                                        <label className="col-lg-12 col-12"> Admin Account </label>
                                        <div className="col-lg-12 col-12">
                                            <input type="text" className="form-control" name="username" onChange={this.onHandleChange}/>
                                        </div>
                                        <label className="col-lg-12 col-12"> Password </label>
                                        <div className="col-lg-12 col-12">
                                            <input type="password" className="form-control" name="password" onChange={this.onHandleChange}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn">Login</button>
                                        <button type="reset" className="btn">Reset</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const MapStateToProps = state => {
    return {
        isAuth: state.authenticate.isAuth,
        error: state.authenticate.error
    }
}

export default connect(MapStateToProps, actions)(Login);