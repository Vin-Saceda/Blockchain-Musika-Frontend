import React, { Component } from 'react'

import { FaCheck } from 'react-icons/fa';

class Section extends Component {
    render() {
        return (
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="text-uppercase font-weight-bold">Send your support using</h5>
                        <center>
                            <img className="w-100" src="https://datarella.com/wp-content/uploads/2018/03/ETHEREUM-LOGO_PORTRAIT_Black_small.png" />
                        </center>
                    </div>
                    <div className="col-md-6 ">
                        <h5 className="text-uppercase font-weight-bold mb-3">Support Your Favorite Artist Directly</h5>
                        <img className="w-100" src="https://wpvivid.com/wp-content/uploads/2019/03/Donation-plugin.png" />
                        <ul className="mt-3">
                            <li><h5>Buy digital, collectible badges</h5></li>
                            <li><h5>Tip artists</h5></li>
                            <li><h5>Showcase your collection</h5></li>
                            <li><h5>Build permanent connections</h5></li>
                            <li><h5>Fund directly send to artist</h5></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Section