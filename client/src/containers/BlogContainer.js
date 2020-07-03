import React, { Component } from 'react';
import NewsFeed from '../components/Blog/Newsfeed';
import TopBlog from '../components/Blog/TopBlog';

class BlogContainer extends Component {
	componentDidMount(){
		window.scrollTo(0,0)
	}
    render() { 
        return ( 
            <section className="blog-single section">
			<div className="container">
				<div className="row">
					<NewsFeed />
					<TopBlog />
				</div>
			</div>
		</section>
         );
    }
}
 
export default BlogContainer;