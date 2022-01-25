import nutritionListStyles from './nutrition-list.module.css';
import CompositionItem  from '../nutrition-item/nutrition-item'
import {FC} from 'react'

interface INutritionList {
    calories?: number;
    proteins?: number; 
    fat?: number;
    carbohydrates?: number;
}

const CompositionList: FC<INutritionList> = ({ calories, proteins, fat, carbohydrates }) => {
    // Данные ингредиента
    return (
        <ul className={nutritionListStyles.composition}>
            <CompositionItem title='Калории,ккал' value={(calories as number)} />
            <CompositionItem title='Белки, г' value={(proteins as number)} />
            <CompositionItem title='Жиры, г' value={(fat as number)} />
            <CompositionItem title='Углеводы, г' value={(carbohydrates as number)} />
        </ul>
    )
}
export default CompositionList;
