import React from 'react';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    return(
        <nav>
            <NavLink exact to='/dogs'>Home</NavLink>
            <NavLink exact to='/dogs/whiskey'>Whiskey</NavLink>
            <NavLink exact to='/dogs/duke'>Duke</NavLink>
            <NavLink exact to='/dogs/perry'>Perry</NavLink>
            <NavLink exact to='/dogs/tubby'>Tubby</NavLink>
        </nav>
    )
}

export default NavBar