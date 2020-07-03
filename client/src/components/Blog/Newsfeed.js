import React, { Component } from 'react';

class NewsFeed extends Component {
    render() {
        return (
            <div className="col-lg-8 col-12">
                <div className="blog-single-main">
                    <div className="row">
                        <div className="col-12">
                            <div className="image">
                                <img src="/images/blog/blog_1.jpg" alt="#" />
                                <span className="date">
                                    <div className="day">27</div>
                                    <div className="month">June 2020</div>
                                </span>
                            </div>
                            <div className="blog-detail">
                                <h4>Cách Xác Định Số Đo Của Cơ Thể</h4>
                                <div className="blog-meta">
                                    <span className="author"><i className="fa fa-user"></i>By Admin<i className="fa fa-calendar"></i>June 27, 2020<i className="fa fa-comments"></i>View(15)</span>
                                </div>
                            </div>
                            <div className="content">
                                <blockquote> <i className="fa fa-quote-left"></i> Nếu chưa biết số đo cơ thể của các nhân hoặc người được tặng để lựa chọn size áo, loại áo phù hợp, các bạn có thể dùng thước dây mềm chuyên dụng (thước hay dùng trong may đo quần áo) và tiến hành đo các số đo cần thiết trong cơ thể mình</blockquote>
                                <p> - Đo vòng ngực: Các bạn vòng dây qua phần lớn nhất ngực rồi tiến hành đo. Lưu ý, khi lấy kích thước nhớ trừ hao thêm 0.5 cm <br />
                                    - Số đo vòng bụng: Các bạn cũng lấy thước vòng quanh bụng, sau đó lấy kích thước lớn nhất đo được <br />
                                    - Đo chiều dài áo: Các bạn dùng dây đo từ phần cao nhất của vai áo xuống phần dưới bụng. <br />
                                    - Đo ngang vai: Nhờ người dùng thước đo từ phần thoải của vai bên này sang vai bên kia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsFeed;