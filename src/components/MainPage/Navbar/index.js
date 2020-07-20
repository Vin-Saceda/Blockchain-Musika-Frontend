import React, { Component } from 'react'
import MusikaLogo from '../../../images/musika.png'

class Navbar extends Component{
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm pt-0 pb-0">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img height="50" width="50" style={{ objectFit: "cover", objectPosition: "center"}} src={MusikaLogo} /> <span className="font-weight-bold">MUSIKA</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active border-right pr-3 mr-3">
                                    <a className="nav-link" href="/register">Create Account <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link btn btn-sm btn-primary text-white pl-5 pr-5" href="/login">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar