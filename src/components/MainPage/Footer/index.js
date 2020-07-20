import React from 'react'

import { FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Copyright from './Copyright'

function Footer () {
    return (
        <div>
            <footer className="page-footer font-small bg-light pr-5 pl-5 pt-5">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-6 mt-md-0 mt-3">
                            <h5 className="text-uppercase font-weight-bold">Musika Powered By</h5>
                            <img className="w-50" src="https://www.paxos.com/wp-content/uploads/2019/05/blockchain-logo-padded-2.png" />
                            <p>it is most simply defined as a decentralized, distributed ledger that records the provenance of a digital asset.</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-3" />

                        <div className="col-md-6 mb-md-0 mb-3 ">
                            <h5 className="text-uppercase font-weight-bold">Keep updated about Musika</h5>
                            <form className="mt-5">
                                <div className="form-group">
                                    <label><FaEnvelope /> Your Email</label>
                                    <input type="email" className="form-control p-4" placeholder="Enter your email here" />
                                </div>
                                <butto className="btn btn-primary pr-5 pl-5">Submit</butto>
                            </form>
                        </div>
                    </div>
                </div>
                <Copyright />
            </footer>
        </div>
    )
}

export default Footer