import {useEffect} from 'react';
import modalStyles from './modal.module.css';
import {createPortal} from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import {FC} from 'react';

interface IModal {
  title?: string;
  onClose: () => void;
  name: 'Order' | 'Details';
  titleType?: 'id' | 'default';
}
const modalRoot = document.getElementById('modal-root') as HTMLElement;

const Modal: FC<IModal> = ({title, onClose, children }) => {
    
  useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if(e.key === 'Escape') {
                onClose();
            }
        }
        window.addEventListener("keydown", handleEsc);

        return () => {
            window.removeEventListener("keydown", handleEsc)
        };
  }, [onClose]);

  return createPortal(
          <>
          <ModalOverlay onClick={onClose}/>
              <div className={modalStyles.modal}>
                  <h2 className ={modalStyles.heading}>{title}</h2>
                  <span className = {modalStyles.close} onClick = {onClose}>
                    <CloseIcon type = "primary"/>
                  </span>  
                {children}
              </div>
          </>  
          , modalRoot     
  )
}

export default Modal