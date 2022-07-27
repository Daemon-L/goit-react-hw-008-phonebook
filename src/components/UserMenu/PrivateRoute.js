import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import authSelectors  from "../../redux/auth/authSelectors";

export default function PrivateRoute({ children, ...routeProps }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (isLoggedIn ? children : <Navigate to="/login" />);
};


// import { useSelector } from "react-redux";
// import { Route } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
// import authSelectors  from "../../redux/auth/authSelectors";
// export default function PrivateRoute({ children, ...routeProps }) {
//     const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//     return (
//         <Route {...routeProps}>
//             {isLoggedIn ? children : <Navigate to="/login" />}
//         </Route>
//     );
// };