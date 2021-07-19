import React from 'react';

const Navbar = ({ getUserData }) => 
(
    <div className="nav-bar d-flex justify-space">
      <div className="logo">The Cakesmith</div>
      <button className = "get-user-btn" type="button" onClick={() => getUserData(1)}>
        Get Users
      </button>
    </div>
  );


export default Navbar;
