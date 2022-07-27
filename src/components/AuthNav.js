// import { NavLink } from "react-router-dom";
import { Link } from './AuthNav.styled'

import {MenuConteiner } from './AuthNav.styled';

function AuthNav() {
    
    return (
        <MenuConteiner>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </MenuConteiner>
    );
}
export default AuthNav;