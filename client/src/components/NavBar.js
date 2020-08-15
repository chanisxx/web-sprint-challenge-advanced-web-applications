import React from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';

const NavBar = () => {
    return(
        
        <div className='navbar'>
          <div>
            <span className='logo'>bubbles</span>
          </div>
          <nav>
              <Router>
              <Link className='a' to='/'>home</Link>
              <Link className='a' to='/bubbles-list'>bubbles list</Link>
              </Router>
          </nav>
        </div>
    );
};

export default NavBar;