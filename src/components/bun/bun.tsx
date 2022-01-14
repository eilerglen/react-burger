import { ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import bunStyles from './bun.module.css'
import { useAppSelector } from '../../services/hooks';
import {FC, useEffect, useState} from 'react'
import { TIngredient } from '../../types/types'

interface IBunPos {
    position: 'top' | 'bottom'
}
const Bun: FC<IBunPos> = ({ position }) => {
    const [isEmpty, setIsEmpty] = useState(true)
    const { bun } = useAppSelector(store => store.cart.sortedCart);
    useEffect(() => {
        bun ? setIsEmpty(false) : setIsEmpty(true)
    }, [bun])
   
    const positionText: string= position === 'top' ? '(верх)' : '(низ)';

    return ( 
         <div className={isEmpty ? bunStyles.bun_empty : bunStyles.bun}>
            {!isEmpty 
                ? <ConstructorElement
                    type={position}
                    isLocked={true}
                    text={`${(bun as TIngredient).name} ${positionText}`}
                    price={(bun as TIngredient).price}
                    thumbnail={(bun as TIngredient).image}
                />
                :
                <ConstructorElement
                    type={position}
                    text={`Место для аппетитной булки ${positionText}`}
                    thumbnail=''
                    price = {0}
                />

            }
        </div>
     );
}

export default Bun;
