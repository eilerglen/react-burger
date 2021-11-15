import './App.css';
import AppHeader from './components/app-header/app-header';
import BurgerIngridients from './components/burger-ingridients/burger-ingridients';
import BurgerConstructor from './components/burger-constructor/burger-constructor';
import { data } from "./utils/data";

function App() {
  return (
    <>
    <AppHeader />
    <div className="wrapper">
      <BurgerIngridients data={data}/>
      <BurgerConstructor data={data}/>
    </div>

    </>
  );
}

export default App;