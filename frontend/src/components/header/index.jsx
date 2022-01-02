import React from 'react';
import { Link } from 'react-router-dom';

export const LoginHeader = () => {
    return (
        <>
            <div className="navbarContainer">
                <div className="navbarLeft">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        {' '}
                        <span className="logo">CyberGram</span>
                    </Link>
                </div>
                <div className="navbarCenter">
                    <div className="searchbar">
                        <input
                            placeholder="Search for Reports"
                            className="searchInput"
                        />
                    </div>
                </div>
                <div className="navbarRight">
                    <ul className="navbarRightClick">
                        <li className="navbarRightAbout">About</li>
                    </ul>

                    <ul className="navbarRightClick">
                        <li className="navbarRightLogout">Logout</li>
                    </ul>
                </div>
            </div>
        </>
    );
};
