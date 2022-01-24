import HomePage from '../../pages/home-page/home-page'
import LoginPage from '../../pages/login/login'
import RegisterPage from '../../pages/register/register'
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import {Route, Switch, useLocation, useHistory} from 'react-router-dom'
import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import { FC } from 'react';
import { TLocationState } from '../../types/types';


const App: FC = () => {
  const dispatch = useAppDispatch()
  const location = useLocation<TLocationState>()
  const history = useHistory()
  const isPush = history.action === 'PUSH'
  let pushLocation = isPush && location.state && location.state.pushLocation

  return (
    <>
      <AppHeader />
      <Switch location = {pushLocation || location }/>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/login' exact>
          <LoginPage />
        </Route>
        <Route path='/register' exact>
          <RegisterPage />
        </Route>
    </>
  );
}

export default App;