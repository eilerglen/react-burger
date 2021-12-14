import { ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import bunStyles from './bun.module.css'
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

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
            {!isEmpty 
                ? <ConstructorElement
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
Bun.propTypes = {
    position: PropTypes.string.isRequired,
} 
export default Bun;
