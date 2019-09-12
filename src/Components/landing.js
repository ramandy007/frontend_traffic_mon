import React, { Component } from 'react';
import { decode } from 'jsonwebtoken';
import "bootstrap/dist/css/bootstrap.css"
class Landing extends Component {
    constructor() {
        super();
        this.token = localStorage.getItem("id_token") ? localStorage.getItem("id_token") : null;
        this.decoded = null;
        if (this.token !== null) {
            this.decoded = decode(this.token);


        }

    }

    render() {
        console.log(this.decoded);
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Welcome</h1>
                        {this.decoded ? (<div><p>your name is: {this.decoded.username}</p>
                            <p>your permission is : {this.decoded.user_permission}</p></div>) : 'pls login'}

                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;