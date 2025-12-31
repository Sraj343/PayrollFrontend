import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="/">Payroll System</a>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="/dashboard" className="nav-link">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a href="/employees" className="nav-link">Employees</a>
                    </li>
                    <li className="nav-item">
                        <a href="/payroll" className="nav-link">Payroll</a>
                    </li>
                    <li className="nav-item">
                        <a href="/reports" className="nav-link">Reports</a>
                    </li>
                    <li className="nav-item">
                        <a href="/settings" className="nav-link">Settings</a>
                    </li>
                    <li className="nav-item">
                        <a href="/logout" className="nav-link logout">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;