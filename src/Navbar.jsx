import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
function Navbar(props) {
    return (
        <>
            <nav>
                <ul className="sidebar">
                    <li onClick={hideSidebar}><Link to="/" className="nav-ham"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg></Link></li>
                    <li onClick={hideSidebar}><Link to="/home">Home</Link></li>
                    <li onClick={hideSidebar}><Link to="/">Events</Link></li>
                    <li onClick={hideSidebar}><Link to="/">About</Link></li>
                    <li onClick={hideSidebar}><Link to="/">Contact</Link></li>
                    <li onClick={hideSidebar}><Link to="/">Registration</Link></li>
                </ul>
                <ul>
                    <li><Link to="/" className="nav-logo">VERTIGO</Link></li>
                    <li className="hideOnMobile"><Link to="/">Home</Link></li>
                    <li className="hideOnMobile"><Link to="/">Events</Link></li>
                    <li className="hideOnMobile"><Link to="/">About</Link></li>
                    <li className="hideOnMobile"><Link to="/">Contact</Link></li>
                    <li className="hideOnMobile"><Link to="/">Registration</Link></li>
                    <li className="menu-button" onClick={showSidebar}><Link to="/" className="nav-ham"><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg></Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;