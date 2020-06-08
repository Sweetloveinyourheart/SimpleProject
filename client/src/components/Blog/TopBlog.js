import React, { Component } from 'react';

class TopBlog extends Component {
    state = {}
    render() {
        return (
            <div className="col-lg-4 col-12">
                <div className="main-sidebar">
                    <div className="single-widget recent-post">
                        <h3 className="title">Hotest Post</h3>
                        <div className="single-post">
                            <div className="image">
                                <img src="https://via.placeholder.com/100x100" alt="#" />
                            </div>
                            <div className="content">
                                <h5><a href="abc">Top 10 Beautyful Women Dress in the world</a></h5>
                                <ul className="comment">
                                    <li><i className="fa fa-calendar" aria-hidden="true"></i>Jan 11, 2020</li>
                                    <li><i className="fa fa-commenting-o" aria-hidden="true"></i>35</li>
                                </ul>
                            </div>
                        </div>
                        <div className="single-post">
                            <div className="image">
                                <img src="https://via.placeholder.com/100x100" alt="#" />
                            </div>
                            <div className="content">
                                <h5><a href="abc">Top 10 Beautyful Women Dress in the world</a></h5>
                                <ul className="comment">
                                    <li><i className="fa fa-calendar" aria-hidden="true"></i>Mar 05, 2019</li>
                                    <li><i className="fa fa-commenting-o" aria-hidden="true"></i>59</li>
                                </ul>
                            </div>
                        </div>
                        <div className="single-post">
                            <div className="image">
                                <img src="https://via.placeholder.com/100x100" alt="#" />
                            </div>
                            <div className="content">
                                <h5><a href="abc">Top 10 Beautyful Women Dress in the world</a></h5>
                                <ul className="comment">
                                    <li><i className="fa fa-calendar" aria-hidden="true"></i>June 09, 2019</li>
                                    <li><i className="fa fa-commenting-o" aria-hidden="true"></i>44</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopBlog;
