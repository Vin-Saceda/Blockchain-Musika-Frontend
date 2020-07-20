import React from 'react'

import { Link } from 'react-router-dom'

function Copyright () {
    return (
        <div className="footer-copyright border-top p-4">
            <div className="clearfix">
                <div className="float-left">
                    <small><Link to="/" className="border-right pr-3 mr-3 text-dark ">Homepage</Link></small>
                    <small><Link to="/" className="border-right pr-3 mr-3 text-dark ">FAQ</Link></small>
                    <small><Link to="/" className="border-right pr-3 mr-3 text-dark ">Terms of Service</Link></small>
                    <small><Link to="/" className="border-right pr-3 mr-3 text-dark ">Legal Agreement</Link></small>
                    <small><Link to="/" className="border-right pr-3 mr-3 text-dark ">Need Help?</Link></small>
                </div>
                <div className="float-right">
                    <small>2020 @copyright Musika</small>
                </div>
            </div>
        </div>
    )
}

export default Copyright