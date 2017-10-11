import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';


const Nav = styled.div`
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
padding: 26px 5vw;
width: 90vw;
height: 25px;
border-bottom: 1px solid rgba(0,0,0,.0975);
    h3 {
    font-family: 'Oleo Script', cursive;
    font-size: 26px;
    }
    search {
    }
    tags {
      width: 26px;
      display: flex;
      justify-content: space-around;
    }
`;

    
class Navbar extends Component{
  render(){
    return (
      <Nav>
        <h3><FaInstagram /> | Instaclone</h3>
        <search>
          <FaSearch/>
          <input type="text"/>
        </search>
        <tags>
          <FaCompass />
          <FaHeartO />
          <FaUser />
        </tags>
      </Nav>

      
    );
  }
}

export default Navbar