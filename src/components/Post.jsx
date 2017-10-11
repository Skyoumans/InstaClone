import React, { Component } from 'react';
import Comment from './Comment';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'
import styled from 'styled-components';


const PostContainer = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 3px;
  width: 95vw;
  max-width: 600px;
  margin: 20px auto;
`

const PostProfile = styled.h1`
  
`

class Post extends Component{

  render(){
    const { post } = this.props;
    return(
      <PostContainer>
        <div>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <p>{post.user.username}</p>
        </div>
        <div>
          <img src={post.image.url} />
          <p>{post.caption}</p>
        </div>
        <div>
          <FaHeartO />
          <FaCommentO />
        </div>
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
      </PostContainer>
    )
  }
}

export default Post;