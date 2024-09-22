import "./Header.scss"
import logo from "../../assets/images/BrainFlix-logo.svg"

function Header(){
    return(
<head className="header">
    <img className="header__logo" src={logo} alt="BrainFlix Logo" />
    <div className="header__content">
        <div className="header__search-profile">
            <input className="header__search-bar" type="text" placeholder="Search" />
            <img className="header__profile-pic header__profile-pic--mobile" src="src/assets/images/Mohan-muruge.jpg" alt="side profile of Mohan" />
        </div>
        <button className="header__button--upload" type="submit">Upload</button>
        <img className="header__profile-pic header__profile-pic--desktop" src="src/assets/images/Mohan-muruge.jpg" alt="side profile of Mohan" />
    </div>
    
</head>
    )
    
}

export default Header;