import React from 'react'
import logo from '../logo.svg'
import '../App.scss'
function Header() {
    return (
        <header className="header">
            <nav>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </nav>
        </header>

    )
}

export default Header
