import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/friend'>Friend</NavLink>
                <NavLink to='/post'>Posts</NavLink>

                {/* <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/products'>Products</Link>
                <Link to='/friend'>Friend</Link>
                <Link to='/post'>Posts</Link> */}


            </nav>
            <p>This is common for every page</p>
        </div>
    );
};

export default Header;