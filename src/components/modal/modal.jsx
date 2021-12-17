import {useEffect} from 'react';
import modalStyles from './modal.module.css';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById('modal-root');

export default function Modal ({title, onClose, children })  {
    
  useEffect(() => {
        const handleEsc = (e) => {
            if(e.keyCode === 27) {
                onClose(e);
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
                    <CloseIcon/>
                  </span>  
                {children}
              </div>
          </>  
          , modalRoot     
  )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.object.isRequired,
  }
  