import React from "react";
import ingredientsStyles from "./burger-ingredients.module.css";
import { setIngredientDetails,
        resetIngredientDetails } from '../../services/ingredientDetailsSlice';
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../modal/modal"
import { useModal } from "../../utils/useModal"
import { FC, useRef, useEffect } from "react";
import {  useAppDispatch } from '../../services/hooks';
import { TIngredient } from "../../types/types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import MenuItem  from '../menu-item/menu-item'
import { useAppSelector } from "../../services/hooks";


const BurgerIngredients: FC = () => {
  const [current, setCurrent] = React.useState<string>('bun')
  const dispatch = useAppDispatch();
  const {isOpen, openingModal, closingModal} = useModal();
  const { ingredients } = useAppSelector(store => store.ingredients)

  const rootRef = useRef<HTMLDivElement>(null)
  const bunRef = useRef<HTMLDivElement>(null)
  const sauceRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)
// Крупный показ карточки ингредиента

  const handleOpenModal = (item: TIngredient): void => {
    dispatch(setIngredientDetails(item))
    openingModal()
  }

  useEffect(() => {
    if (current === 'bun') bunRef?.current?.scrollIntoView()
    if (current === 'sauce') sauceRef?.current?.scrollIntoView()
    if (current === 'main') mainRef?.current?.scrollIntoView()
  }, [current])
// Закрытие крупного показа  карточки ингредиента

const handleScroll = () => {
  if (rootRef.current && bunRef.current && sauceRef.current && mainRef.current) {
    const bunDistance = Math.abs(rootRef?.current?.getBoundingClientRect()?.top - bunRef?.current?.getBoundingClientRect()?.top)
    const sauceDistance = Math.abs(rootRef?.current?.getBoundingClientRect()?.top - sauceRef.current?.getBoundingClientRect()?.top)
    const mainDistance = Math.abs(rootRef?.current?.getBoundingClientRect()?.top - mainRef.current?.getBoundingClientRect()?.top)
    const min = Math.min(bunDistance, sauceDistance, mainDistance)
    const activeTab = min === bunDistance ? 'bun' : min === sauceDistance ? 'sauce' : 'main'
    setCurrent(activeTab)
  }
}
  const handleClose = () => {
    closingModal()
    dispatch(resetIngredientDetails())
  };

  return (
    <section className={ingredientsStyles.ingredients}>
      <h1 className={ingredientsStyles.title}>Соберите бургер</h1>
      <div className={ingredientsStyles.tab_container}>
        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
    </div>
     
      <div className={ingredientsStyles.scroller} ref = {rootRef} onScroll = {handleScroll}>
            <MenuItem title="Булки" refs={bunRef} data={ingredients && ingredients.filter(ingredient => ingredient.type === 'bun')} onClick={ handleOpenModal}/>
            <MenuItem title="Соусы" refs={sauceRef} data={ingredients && ingredients.filter(ingredient => ingredient.type === 'sauce')} onClick={ handleOpenModal }/>
            <MenuItem title="Начинки" refs={mainRef} data={ingredients && ingredients.filter(ingredient => ingredient.type === 'main')} onClick={ handleOpenModal }/>
        </div>
      {/* {isOpen && (
        <Modal title = 'Ингредиенты' onClose = {handleClose}>
          <IngredientDetails />
        </Modal>
        )
      } */}
    </section>
  );
}
export default BurgerIngredients;



