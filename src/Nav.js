import React, {useState} from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import Logo from "./images/train.svg"

const Nav = () => {
    const[isMobile,setIsMobile] = useState(false);
    return (
        <div>
            <div className="container-fluid header">
                <div className="navbar">
                    <Link className="navbar-brand" to="/">
                        <img className='logo' src={Logo} Error={Logo}/>
                    </Link>
                    <nav>
                        <ul className={isMobile? "nav-links-mobile" : "MenuItems"} 
                        onclick={() => setIsMobile(false)}
                        >
                            <li>
                              <Link to="/chipta">Chiptalar</Link>
                          </li>
                          <li>
                             <Link to="/xarita">Xarita</Link>
                          </li>
                          <li>
                             <Link to="/mehmonxona">Mehmonxonalar</Link>
                          </li>
                          <li>
                             <Link to="/profile">Profil</Link>
                          </li>
                        </ul>
                        <button 
                            className='mobile-menu-icon'
                            onClick={() => setIsMobile(!isMobile)}
                        >
                            {isMobile ? (
                                <i className='fas fa-times'></i>
                            ) : (
                                <i className='fas fa-bars'></i>
                            )}
                        </button>
                    </nav>
                </div>
                
                
                </div>
        </div>
    );
};


export default Nav;