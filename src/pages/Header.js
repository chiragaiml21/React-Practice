import './Header.css';
import logo from './Media/logo.png';

function Header(){
    return(
        <div className="nav">
            <img src={logo} alt="logo" className='logo'></img>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </div>
    );
}

export default Header;