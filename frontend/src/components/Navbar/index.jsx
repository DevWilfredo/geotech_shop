import MobileMenu from "../MobileMenu";
import DesktopMenu from "../DesktopMenu";
import CartDrawer from "../CartDrawer";
import UserDropdown from "../UserDropdown"
import geotechLogo from "../../assets/geotech-logo.png"
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm fixed top-0 z-10">
            <div className="navbar-start">
                <MobileMenu />
                <NavLink to='/' className="btn btn-ghost text-xl">
                        <img src={geotechLogo} alt="geotechLogo" className="w-56" />
                </NavLink>
            </div>

            <div className="navbar-center hidden lg:flex">
                <DesktopMenu />
            </div>

            <div className="navbar-end gap-3">
                <div className="flex gap-4">
                    <CartDrawer />
                    <UserDropdown />
                </div>
            </div>
        </div>
    )
}
