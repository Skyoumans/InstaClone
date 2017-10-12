import React, {Component} from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  img{
    border-radius: 100%;  
    height: 45px;
    width: 45px;
  }
`

class Comment extends Component {
  render() {
    const {comment} = this.props;
    console.log(comment);
    return (
      <CommentContainer>
        <img src={comment.profile_pic}/>
        <p>
          <strong>{comment.username}</strong>
          {comment.text}</p>
      </CommentContainer>
    );
  }
}

export default Comment;