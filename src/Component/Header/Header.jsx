import './Header.css'
import logo from '../../assets/logo.jpg'
const Header = () => {
    return (
        <nav className="headerStyle">
            <div>
                <img className='logo' src={logo} alt="" />
            </div>
            <div>
                <ul className='menu'>
                    <li>Home</li>
                    <li>List</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;