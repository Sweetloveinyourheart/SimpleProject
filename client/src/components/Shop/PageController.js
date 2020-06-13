import React, { Component } from 'react';

class PageController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: [1, 2, 3, 4],
            active: 1
        }
        this.morePage = this.morePage.bind(this);
        this.prePage = this.prePage.bind(this);
        this.prePage = this.prePage.bind(this);
        this.Active = this.Active.bind(this);
    }
    morePage() {
        var page = this.state.page
        var newpage = page[3] + 1
        page.shift()
        page.push(newpage)
        this.setState({
            page
        })
    }
    prePage() {
        var page = this.state.page
        if (page[0] !== 1) {
            var prepage = page[0] - 1
            page.pop()
            page.unshift(prepage)
            this.setState({
                page
            })
        }
    }
    isActive(page) {
        if(page === this.state.active){
            return "active"
        }
        return ""
    }
    Active(page){
        this.setState({
            active: page
        })
    }
    render() {
        return (
            <div className="page-controller">
                <button onClick={this.prePage}>
                    <span>...</span>
                </button>
                <button className={this.isActive(this.state.page[0])}
                        onClick={() => this.Active(this.state.page[0])}>
                    <span>{this.state.page[0]}</span>
                </button>
                <button className={this.isActive(this.state.page[1])}
                        onClick={() => this.Active(this.state.page[1])}>
                    <span>{this.state.page[1]}</span>
                </button>
                <button className={this.isActive(this.state.page[2])}
                        onClick={() => this.Active(this.state.page[2])}>
                    <span>{this.state.page[2]}</span>
                </button>
                <button className={this.isActive(this.state.page[3])}
                        onClick={() => this.Active(this.state.page[3])}>
                    <span>{this.state.page[3]}</span>
                </button>
                <button onClick={this.morePage}><span >...</span></button>
            </div>
        );
    }
}

export default PageController;