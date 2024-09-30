import "./Header.scss";
import logo from './../../assets/images/BrainFlix-logo.svg';

import profilePic from './../../assets/images/Mohan-muruge.jpg';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <NavLink to="/"><img className="header__logo" src={logo} alt="BrainFlix Logo" /></NavLink>
            <div className="header__content">
                <div className="header__search-profile">
                    <input className="header__search-bar" type="text" placeholder="Search" />
                    <img className="header__profile-pic header__profile-pic--mobile" src={profilePic} alt="side profile of Mohan" />
                </div>
                <NavLink to="/upload" className="header__button--upload" type="submit">Upload</NavLink>
                <img className="header__profile-pic header__profile-pic--desktop" src={profilePic} alt="side profile of Mohan" />
            </div>
        </header>
    )
}

export default Header;