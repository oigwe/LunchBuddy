import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';

class NavBar extends Component {

    logOut = () => {
        const user = localStorage.getItem('user')
        if (user) return "Log Out"
        return ""
    }

    handleClick = e => {
        e.preventDefault();
        localStorage.clear()
        this.props.history.push('/')
    }

    render() {
        return (
            <>
                <nav className="row navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "maroon" }}>
                    <div className="col"></div>
                    <div className="col-8">
                        <Link className="navbar-brand" to='/'><img src={logo} alt="Lunch Buddy" /></Link>
                    </div>
                    <div className="col-3">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active" >
                                    <Link className="nav-link" to="/" style={{ color: "white" }}> Home </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/order" style={{ color: "white" }}> Create Order </Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/" style={{ color: "white" }} onClick={this.handleClick}>{this.logOut()}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </>
        )
    }

}

export default NavBar