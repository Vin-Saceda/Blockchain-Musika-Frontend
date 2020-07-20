import React, { Component } from 'react'
import Copyright from '../MainPage/Footer/Copyright'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

class RegisterPage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row pb-5">
                    <div className="col-lg-4 col-md-3 col-sm-3"></div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="mt-4" >
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-3"></div>
                </div>
                <Copyright />
            </div>
        )
    }
}

export default RegisterPage