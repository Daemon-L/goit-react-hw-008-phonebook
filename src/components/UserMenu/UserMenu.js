import { Text, MenuConteiner } from './UserMenu.styled.jsx'
import Button from 'react-bootstrap/Button';

import { useDispatch, useSelector } from "react-redux";
import { authOperations } from '../../redux/auth/authOperations';
import  authSelectors  from "../../redux/auth/authSelectors";

const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

    return (
        <MenuConteiner>
            <Text>welcome, {name}</Text>
            <Button variant="primary" type="button" onClick={() => dispatch(authOperations.logOut())}>
                Logout
            </Button>
        </MenuConteiner>
    );
};
export default UserMenu;