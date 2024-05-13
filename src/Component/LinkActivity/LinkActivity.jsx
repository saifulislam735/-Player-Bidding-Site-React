import { NavLink } from "react-router-dom";
import './LinkActivity.css'
const LinkActivity = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "active" : ""
            }
        >
            {children}
        </NavLink>

    );
};

export default LinkActivity;