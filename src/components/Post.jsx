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

const PostUser = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  img {
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }
  span {
    padding-left: 5px;
    font-weight: bold;
  }
`;
const Content = styled.div`
  img{
    max-width: 600px;
    margin: 0 auto;
  }
`;
const Info = styled.div`
  padding: 5px 16px
`;
const Actions = styled.div`
  svg{
    padding: 5px;
  }
`

class Post extends Component{

  render(){
    const { post } = this.props;
    return(
      <PostContainer>
        <PostUser>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <span>{post.user.username}</span>
        </PostUser>
        <Content>
          <img src={post.image.url} />
        </Content>
        <Info>
          <p>{post.caption}</p>
        </Info>
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