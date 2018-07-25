import React, { Component } from "react";
import "./Posts.css";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoaded: false,
      theTitle: "",
      theAuthor: "",
      theBody: ""
    };
  }
  componentDidMount() {
    this.getBlogPosts();
  }

  getBlogPosts = () => {
    fetch("/posts")
      .then(res => res.json())
      .then(data => this.setState({ posts: data, isLoaded: true }));
  };

  setTitle = e => {
    this.setState({ theTitle: e.target.value });
  };
  setBody = e => {
    this.setState({ theBody: e.target.value });
  };
  setAuthor = e => {
    this.setState({ theAuthor: e.target.value });
  };

  addPost = e => {
    if(this.state.theTitle===""||this.state.theAuthor===""||this.state.theBody===""){

     alert("Unable to add blog post because fields were left blank");

    }else{
      fetch(
        `/posts/add?title=${this.state.theTitle}&author=${
          this.state.theAuthor
        }&body=${this.state.theBody}`
      ).then(this.getBlogPosts);
    }
    
  };

  render() {
    const postList = this.state.posts.map(post => (
      <div>
      <div id="individual_post" key={post.ID}>
        <h2>{post.title}</h2>
        <h3>By: {post.author}</h3>
        <p>{post.body}</p>
        <h4><br/></h4>       
      </div>
      <h3><br/></h3>
      </div>
    ));

    if (!this.state.isLoaded) {
      return (
        <div>
          Our server must be down please try again later          
        </div>
      );
    } else {
      return (
        <div id="wrapper">
          <div id='blogs'><h1 id="main">BLOGS</h1>{postList}</div>
          <div id='submit_blog'>
            <form id="blog_form">
            <h1 id="blg">Add A Blog</h1>
              <input className="input_field tit" onChange={this.setTitle} placeholder="TITLE" />
              <br/>
              <input className="input_field aut" onChange={this.setAuthor} placeholder="AUTHOR" />
              <br/>
              <textarea className="input_field bod" onChange={this.setBody} placeholder="YOUR POST HERE" />
              <br/>
              <input className="input_field sub" type="submit" onClick={this.addPost} value="POST BLOG"/>
            </form>
          </div>
        </div>
      );
    }
  }
}

export default Posts;
