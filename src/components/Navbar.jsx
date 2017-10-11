import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';


const Nav = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 26px 5vw;
  width: 90vw;
  height: 25px;
  font-size: 22px;
  font-family: 'Oleo Script', cursive;
    p {

    }
    search {

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