import { Redirect, Route, useLocation } from 'react-router-dom';
import { TLocationState, TProtectedHOC } from "../../types/types";
import { useAppSelector } from '../../services/hooks';
import { FC } from "react";

const ProtectedRouteWithReset: FC<TProtectedHOC> = ({ children, ...rest }) => {
    const { isAuthorized } = useAppSelector(store => store.auth)
    const emailConfirmationSended = localStorage.getItem('emailConfirmationSended')
    const location = useLocation<TLocationState>();
    const { from } = location.state || { from: { pathname: '/' } }

    return (
        <Route {...rest}
            render={(location) =>
                !isAuthorized && emailConfirmationSended === 'true' ? (
                    children
                ) : (
                    <Redirect to={from} />
                )
            }
        />
    )
}
export default ProtectedRouteWithReset