import React, { Component } from 'react'
import Copyright from '../MainPage/Footer/Copyright'
import FormFan from './FormFan'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import FormArtist from './FormArtist'

class LoginPage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row pb-5">
                    <div className="col-lg-4 col-md-3 col-sm-3"></div>
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="mt-4" >
                            <BrowserRouter>
                                <Switch>
                                    <Route exact path="/login" component={ FormFan } />
                                    <Route exact path="/login/artist" component={ FormArtist } />
                                </Switch>
                            </BrowserRouter>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-3 col-sm-3"></div>
                </div>
                <Copyright />
            </div>
        )
    }
}

export default LoginPage