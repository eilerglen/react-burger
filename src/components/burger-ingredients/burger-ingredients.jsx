import React from "react";
import {useEffect} from 'react';
import ingredientsStyles from "./burger-ingredients.module.css";
import Menu from '../menu/menu';
import Tabs from '../tabs/tabs';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients, resetIngredientToShow, setIngredientToShow } from '../../services/ingredientsSlice';
import { closeDetailsModal, openDetailsModal } from "../../services/modalSlice";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal"


const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState('bun')
  const dispatch = useDispatch();
  const {isDetailsModalOpen} = useSelector(store => store.modal)

  useEffect(() => {
    dispatch(getIngredients())
  },[dispatch])

  const handleOpenModal = (item) => {
    dispatch(setIngredientToShow(item))
    dispatch(openDetailsModal())
  }

  const handleClose = (e) => {
    e.stopPropagation();
    dispatch(closeDetailsModal())
    dispatch(resetIngredientToShow())
  };

  return (
    <section className={ingredientsStyles.ingredients}>
      <h1 className={ingredientsStyles.title}>Соберите бургер</h1>
      <Tabs current={current} onClick={setCurrent} />
      <Menu current={current} setCurrent={setCurrent} onClick={handleOpenModal}/>
      {isDetailsModalOpen && (
        <Modal name = "Details" title ="Детали ингредиента" onClose = {handleClose}>
          <IngredientDetails />
        </Modal>
        )
      }
    </section>
  );
}
export default BurgerIngredients;



