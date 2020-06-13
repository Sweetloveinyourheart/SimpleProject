import React, { Component } from 'react';

class Owner extends Component {
    state = {}
    render() {
        return (
            <div className="owner">
                <div className="header">
                    <h3>Page's Owner</h3>
                </div>
                <div className="profile">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-12">
                            <div className="admin">
                                <div className="name">
                                    <img src="/images/1.png" alt="#"></img>
                                    <p> Jack Donal <br /> 16-07-1999 </p>
                                </div>
                                <p>A small river named Duden flows by their place </p>
                                <p>A small river named Duden flows by their place </p>
                                <p>A small river named Duden flows by their place </p>
                                <p>A small river named Duden flows by their place </p>

                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-12">
                            <div className="admin">
                                <div className="name">
                                    <img src="/images/1.png" alt="#"></img>
                                    <p> Jack Donal <br /> 16-07-1999 </p>
                                </div>
                                <p>A small river named Duden flows by their place </p>
                                <p>A small river named Duden flows by their place </p>
                                <p>A small river named Duden flows by their place </p>
                                <p>A small river named Duden flows by their place </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Owner;