import React , {FC} from 'react'
import styles from  './feed-card.module.css'
import {nanoid} from '@reduxjs/toolkit'
import { TIngredient, TLocationState, TOrder } from '../../types/types'
import { useAppDispatch, useAppSelector } from '../../services/hooks'
import { findData } from '../../utils/findData'
import {Link, useLocation, useRouteMatch } from 'react-router-dom'
import { ORDER_STATUS} from '../../utils/utils'

interface IFeedCard {
  item: TOrder;
}

const renderIngredientsPreviews = (ingredients: Array<TIngredient>) => {
  const previews: Array<JSX.Element> = []

  for (let index = 0; index < ingredients.length; index++) {
    const ingredient = ingredients[index]
    let others = null
    let zIndex = null
    if (index === 5) {
      others = ingredients.length - 5
    }
    zIndex = ingredients.length - index
    if (others !== null) break

    previews.push(
      <li key={nanoid()} style={{ zIndex }}>
        <div className={styles.preview}>
          {others && <span className={styles.others}>+{others}</span>}
          <img className={styles.image} src={ingredient.image_mobile} alt={ingredient.name} />
        </div>
      </li>,
    )
  }
  return previews
}

const FeedCard: FC<IFeedCard> = ({ item }) => {
  const ingredientList = useAppSelector((store) => store.ingredients.ingredients)
  const { number, createdAt, name, status, ingredients } = item;
  const { url } = useRouteMatch()
  const dispatch = useAppDispatch()
  const location = useLocation<TLocationState>()

  // собираем данные ингредиентов по их id
  const formattedIngredients = findData(ingredients, ingredientList)

  // 

  const color =
    status === 'done'
      ? 'var(--colors-interface-success)'
      : status === 'cancel'
      ? 'var(--colors-interface-error)'
      : 'inherit'
 
 
  
  return (
    <Link
      to={{ pathname: `${url}/${number}`, state: { from: location.pathname, pushLocation: location } }}
      className={styles.link}
      // onClick={handleOpen}
    >
      <article className={styles.card}>
        <header className={styles.header}>
          <span className={styles.id}>#{number}</span>
          <time className={styles.time}>{}</time>
        </header>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.status} style={{ color }}>
          {ORDER_STATUS[status]}
        </p>
        <div className={styles.content}>
          <ul className={styles.ingredients}>{renderIngredientsPreviews(formattedIngredients)}</ul>
         
        </div>
      </article>
    </Link>
  )
}

export default FeedCard;