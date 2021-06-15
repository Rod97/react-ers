import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <h3 className='logo'>Expense Reimbursement System</h3>
            <ul className="nav-links">
                <Link to="/employees" className='nav-link'>
                    <li >Employees</li>
                </Link>
                <Link to="/manager" className='nav-link'>
                <li>Manager</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;