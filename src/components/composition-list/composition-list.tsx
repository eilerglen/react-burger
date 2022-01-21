import compositionListStyles from './composition-list.module.css';
import CompositionItem  from '../composition-item/composition-item'
import { useAppSelector} from '../../services/hooks';
import {FC} from 'react'

interface INutritionList {
    calories: number | undefined;
    proteins: number | undefined; 
    fat: number | undefined;
    carbohydrates: number | undefined;
}

const CompositionList: FC<INutritionList> = ({ calories, proteins, fat, carbohydrates }) => {
    // Данные ингредиента
    return (
        <ul className={compositionListStyles.composition}>
            <CompositionItem title='Калории,ккал' value={(calories as number)} />
            <CompositionItem title='Белки, г' value={(proteins as number)} />
            <CompositionItem title='Жиры, г' value={(proteins as number)} />
            <CompositionItem title='Углеводы, г' value={(proteins as number)} />
        </ul>
    )
}
export default CompositionList;
