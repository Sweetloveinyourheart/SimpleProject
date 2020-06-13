import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewsFeed extends Component {
    state = {}
    render() {
        return (
            <div className="col-lg-8 col-12">
                <div className="blog-single-main">
                    <div className="row">
                        <div className="col-12">
                            <div className="image">
                                <img src="https://via.placeholder.com/950x460" alt="#" />
                                <span className="date">
                                    <div className="day">15</div>
                                    <div className="month">April 2020</div>
                                </span>
                            </div>
                            <div className="blog-detail">
                                <Link to="/blog/blog-single">What are the secrets to start- up success?</Link>
                                <div className="blog-meta">
                                    <span className="author"><i className="fa fa-user"></i>By Admin<i className="fa fa-calendar"></i>December 24, 2018<i className="fa fa-comments"></i>View(15)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-single-main">
                    <div className="row">
                        <div className="col-12">
                            <div className="image">
                                <img src="https://via.placeholder.com/950x460" alt="#" />
                                <span className="date">
                                    <div className="day">15</div>
                                    <div className="month">April 2020</div>
                                </span>
                            </div>
                            <div className="blog-detail">
                                <Link to="/blog/blog-single">What are the secrets to start- up success?</Link>
                                <div className="blog-meta">
                                    <span className="author"><i className="fa fa-user"></i>By Admin<i className="fa fa-calendar"></i>December 24, 2018<i className="fa fa-comments"></i>View(15)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsFeed;