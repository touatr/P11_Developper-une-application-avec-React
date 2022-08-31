import * as React from 'react'
import '../../styles/Nav.css'
import { NavLink } from 'react-router-dom'


function Nav() {
    // This styling will be applied to a <NavLink> when the
    // route that it links to is currently selected.
    let activeStyle = {
        borderBottom: "1px solid #FF6060",
    } 

    return (
        <nav>
            <ul>
                <NavLink to="/" className='accueil-link' style={({ isActive }) => 
                isActive ? activeStyle : undefined}>Accueil</NavLink>
                <NavLink to="/About" style={({ isActive }) => 
                isActive ? activeStyle : undefined}>A Propos</NavLink>
            </ul>
        </nav>
    )
}

export default Nav

