import axios from 'axios';
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    componentDidMount() {
        if (this.props.id) {
            axios.get('https://jsonplaceholder.typicode.com/posts/1' + this.props.id)
       .then(response=>{
           console.log(response);
       })
        }
    }
    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.id) {
            post = (
                <div className="FullPost">
                    <h1>Title</h1>
                    <p>Content</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default FullPost;