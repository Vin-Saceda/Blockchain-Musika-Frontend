import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class FormFan extends Component {
    render() {
        return (
            <div className="border rounded p-5">
                <h5 className="font-weight-bolder">Login as a Fan</h5>
                <div className="border"></div>

                <form className="mt-3">
                    <div className="form-group">
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Password" />
                    </div>
                    <a href="#">Forgot password?</a>
                    <button className="btn btn-primary form-control mt-3">Login</button>
                    <div class="strike mt-2 mb-2">
                        <span>OR</span>
                    </div>
                    <Link to="/login/artist" className="btn btn-outline-primary form-control">Login as an Artist</Link>
                </form>

                <p className="mt-5 mb-0">Not a member yet? <a href="/register">Create an Account</a></p>
            </div>
                        
        )
    }
}

export default FormFan