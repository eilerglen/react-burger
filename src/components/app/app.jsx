import appStyles from './app.module.css';
import AppHeader from '../app-header/app-header';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import BurgerIngridients from '../burger-ingridients/burger-ingridients';
import {productsData}  from "../../utils/constants";

function App() {
  return (
    <>
      <AppHeader />
      <div className={appStyles.wrapper}>
        <BurgerIngridients data={productsData} />
        <BurgerConstructor data={productsData} />
      </div>
    </>
  );
}

export default App;