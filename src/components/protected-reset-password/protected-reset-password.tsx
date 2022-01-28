import { Redirect, Route, useLocation } from 'react-router-dom';
import { TLocationState, TProtectedHOC } from "../../types/types";
import { useAppSelector } from '../../services/hooks';
import { FC } from "react";

const ProtectedRouteWithReset: FC<TProtectedHOC> = ({ children, ...rest }) => {
    const { isAuthorized } = useAppSelector(store => store.auth)
    const { isEmailSuccess } = useAppSelector(store => store.password)

    const emailConfirm = localStorage.getItem('isEmail')
    const location = useLocation<TLocationState>();
    const { from } = location.state || { from: { pathname: '/' } }

    return (
        <Route {...rest}
            render={() =>
                !isAuthorized && isEmailSuccess ? (
                    children
                ) : (
                    <Redirect to={from} />
                )
            }
        />
    )
}
export default ProtectedRouteWithReset