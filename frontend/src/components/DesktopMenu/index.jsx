import { NavLink } from "react-router-dom";

const DesktopMenu = () => {
    return (
        <ul className="menu menu-horizontal px-1">
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <details>
                    <summary>Categories</summary>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </details>
            </li>
            <li><a>About Us</a></li>
            <li><a>Contact Us</a></li>
        </ul>
    );
};

export default DesktopMenu;
