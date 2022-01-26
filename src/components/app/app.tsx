import HomePage from '../../pages/home-page/home-page'
import AuthPage from '../../pages/auth/auth'
import RegisterPage from '../../pages/register/register'
import NotFound404 from '../../pages/not-found-404/not-found-404'
import Profile from '../../pages/profile/profile'
import ForgotPassword from '../../pages/forgot-password/forgot-password'
import ResetPassword from '../../pages/reset-password/reset-password'
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import {Route, Switch, useLocation, useHistory} from 'react-router-dom'
import AppHeader from '../app-header/app-header';
import { FC, useEffect } from 'react';
import { TLocationState } from '../../types/types';
import { getIngredients } from '../../services/ingredientsSlice';


const App: FC = () => {
  const dispatch = useAppDispatch()
  const location = useLocation<TLocationState>()
  const history = useHistory()
  const isPush = history.action === 'PUSH'
  let pushLocation = isPush && location.state && location.state.pushLocation

  useEffect(() => {
    dispatch(getIngredients())
  },[dispatch])

  return (
    <>
      <AppHeader />
      <Switch location = {pushLocation || location }>
        <Route path='/' exact = {true}>
          <HomePage />
        </Route>
        <Route path='/login' exact>
          <AuthPage />
        </Route>
        <Route path='/register' exact>
          <RegisterPage />
        </Route>
        <Route path='/profile' exact>
          <Profile />
        </Route>
        <Route path='/forgot-password' exact>
          <ForgotPassword />
        </Route>
        <Route path='/reset-password' exact>
          <ResetPassword />
        </Route>
      </Switch>  
    </>
  );
}

export default App;