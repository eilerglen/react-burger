import { ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import bunStyles from './bun.module.css'
import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Bun = ({ position }) => {
    const { bun } = useSelector(store => store.cart.sortedCart);
    const [isEmpty, setEmpty] = useState(true);
    useEffect(() => {
        if(bun._id) {
            setEmpty(false)
        } else {
            setEmpty(true)
        }
    }, [bun])    
    

    return ( 
         <div className={isEmpty ? bunStyles.bun_empty : bunStyles.bun}>
            {!isEmpty ?
                <ConstructorElement
                    type={position}
                    isLocked={true}
                    text={bun.name}
                    price={bun.price}
                    thumbnail={bun.image}
                />
                :
                <ConstructorElement
                    type={position}
                    text={"Место для аппетитной булки"}
                />

            }
        </div>
     );
}
 
export default Bun;

Bun.propTypes = {
    ingredients: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }),
    position: PropTypes.string.isRequired,
}