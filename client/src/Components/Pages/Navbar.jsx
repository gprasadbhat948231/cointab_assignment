import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div style={{display:"flex", gap:"20px", background:"black",padding:"10px"}}>
                <NavLink style={{color:"white",textDecoration:"none"}}to="/login">Login</NavLink>
                <NavLink style={{color:"white",textDecoration:"none"}}to="/register">Register</NavLink>
                <NavLink style={{color:"white",textDecoration:"none"}}to="/Home">Home</NavLink>
            </div>
        </div>
    )
}

export default Navbar