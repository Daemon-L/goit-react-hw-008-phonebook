import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Nav, Link } from './AppBar.styled'
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav';
import authSelectors from "../../redux/auth/authSelectors";



function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
        
    return (
        <header>
            <Nav>
                <Link to="/">Home</Link>

                {isLoggedIn && (
                    <Link to="/contacts">Contacts</Link>
                )}
                                
                {isLoggedIn ? <UserMenu /> : <AuthNav />}

            </Nav>
            <Outlet />
        </header>
    );
}
export default AppBar;