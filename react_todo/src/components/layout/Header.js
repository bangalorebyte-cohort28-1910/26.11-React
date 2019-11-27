import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style= { styleHeader }>
            <h1> Todo List </h1>
            <Link style={LinkStyle} to="/">Home</Link> | <Link style={LinkStyle} to="/about">About</Link> | <Link style={LinkStyle} to="/main">Main</Link>
        </header>
    )
}

const styleHeader = {
    background:'#333',
    color:'#fff',
    textAlign:'center',
    padding: '10px'
}

const LinkStyle = {
    color : '#fff',
    textDecoration:'none'
}

export default Header;
