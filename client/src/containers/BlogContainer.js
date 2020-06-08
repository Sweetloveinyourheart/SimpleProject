import React, { Component } from 'react';
import NewsFeed from '../components/Blog/Newsfeed';
import TopBlog from '../components/Blog/TopBlog';

class BlogContainer extends Component {
    state = {  }
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