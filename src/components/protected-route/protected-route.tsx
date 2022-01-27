import { useAppSelector } from "../../services/hooks";
import { Route, Redirect } from 'react-router-dom'
import { TProtectedHOC } from "../../types/types";
import {FC} from 'react';

const ProtectedRoute: FC<TProtectedHOC> = ({children, ...rest}) => {
  const { isAuthorized} = useAppSelector(store => store.auth)
  return (
    <Route 
    {...rest} 
    render={({ location }) => {
      return isAuthorized ? (
        children
      ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: location }
          }} />
        );
      }
    } 
    />
  )

}

export default ProtectedRoute