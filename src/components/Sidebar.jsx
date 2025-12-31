import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Payroll System</h2>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/employees">Employees</a></li>
                    <li><a href="/payroll">Payroll</a></li>
                    <li><a href="/reports">Reports</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;