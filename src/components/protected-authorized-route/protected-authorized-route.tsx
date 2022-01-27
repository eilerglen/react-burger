import { useAppSelector } from '../../services/hooks';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { TLocationState, TProtectedHOC } from "../../types/types";
import { FC } from "react";

// роут закрыт для авторизованных пользователей

 const ProtectedAuthorizedRoute: FC<TProtectedHOC> = ({ children, ...rest }) => {
  const { isAuthorized } = useAppSelector(store => store.auth);
  const location = useLocation<TLocationState>();
  const { from } = location.state || { from: { pathname: '/' } }

  return (
    <Route
      {...rest}
      render={() => {
        return !isAuthorized ? (
          children
        ) : (
          <Redirect to={from} />
        )
      }
      }
    />
  );
}
export default ProtectedAuthorizedRoute