import React from "react";
import ingridientsStyles from "./burger-ingridients.module.css";
import { Tabs, Menu } from './elements';
import PropTypes from 'prop-types';


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

BurgerIngridients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}