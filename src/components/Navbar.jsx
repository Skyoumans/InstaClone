import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';


const nav = styled.div`
  display: block;
  -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    text-align: center;
    font-size: 100px;
`;
const mainSearch = styled
    

class Navbar extends Component{
  render(){
    return (
      <Nav>
      <div>
        <h3><FaInstagram /> | Instaclone</h3>
        <FaSearch/><input type="text"/>
        <div>
          <FaCompass />
          <FaHeartO />
          <FaUser />
        </div>
      </div>
      </Nav>

      
    );
  }
}

export default Navbar