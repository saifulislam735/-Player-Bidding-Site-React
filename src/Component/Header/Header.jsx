import './Header.css'
import logo from '../../assets/logo.jpg'
// import { Link } from 'react-router-dom';
import LinkActivity from '../LinkActivity/LinkActivity';
const Header = () => {
    return (
        <nav className="headerStyle">
            <div>
                <img className='logo' src={logo} alt="" />
            </div>
            <div>
                <ul className='menu'>
                    <LinkActivity to={'/-Player-Bidding-Site-React/home'}>Home</LinkActivity>
                    <LinkActivity to={'/-Player-Bidding-Site-React/list'}>List</LinkActivity>
                    <LinkActivity to={'/-Player-Bidding-Site-React/about'}>About</LinkActivity>
                    <LinkActivity to={'/-Player-Bidding-Site-React/contact'}>Contact</LinkActivity>
                </ul>
            </div>
        </nav>
    );
};

export default Header;