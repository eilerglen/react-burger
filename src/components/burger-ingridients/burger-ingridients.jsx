import React from "react";
import ingridientsStyles from "./burger-ingridients.module.css";
import Menu from '../menu/menu';
import Tabs from '../tabs/tabs';
import PropTypes from 'prop-types';


const BurgerIngridients = ({data}) => {
  const [current, setCurrent] = React.useState('bun')

  return (
    <section className={ingridientsStyles.ingredients}>
      <h1 className={ingridientsStyles.title}>Соберите бургер</h1>
      <Tabs current={current} onClick={setCurrent} />
      <div className={ingridientsStyles.scroller}>
        <Menu data={data} current={current} />
      </div>
    </section>
  );
}
export default BurgerIngridients;

BurgerIngridients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

