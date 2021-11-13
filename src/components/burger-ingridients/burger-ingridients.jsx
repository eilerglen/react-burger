import React from "react";
import ingridientsStyles from "./burger-ingridients.module.css";
import { Tabs, Menu } from './elements';

const BurgerIngridients = (props) => {
  const [current, setCurrent] = React.useState('Все ингридиенты')

  return (
    <section className={ingridientsStyles.ingridients}>
      <h1 className={ingridientsStyles.title}>Соберите бургер</h1>
      <Tabs current={current} onClick={setCurrent} />
      <div className = {ingridientsStyles.scroller}>
        <Menu data={props.data} current={current} />
      </div>  
    </section>
  );
}
export default BurgerIngridients;