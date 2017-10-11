import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';


const Nav = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    text-align: center;
    font-size: 22px;
    font-family: 'Oleo Script', cursive;
    p {
      display: flex;
    }
`;
    
class Navbar extends Component{
  render(){
    return (
      <Nav>
        <h3><FaInstagram /> | Instaclone</h3>
        <p>
        <FaSearch/>
        <input type="text"/>
        </p>
        <div>
          <FaCompass />
          <FaHeartO />
          <FaUser />
        </div>
      </Nav>

      
    );
  }
}

export default Navbar