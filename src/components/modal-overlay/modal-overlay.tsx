import {useRef, useEffect} from 'react';
import overlayStyles from './modal-overlay.module.css';
import {FC} from 'react'

interface IModalOverlay {
  onClick: () => void
}
const ModalOverlay: FC<IModalOverlay> = ({ onClick }) => {
  const overlay = useRef(null)
  useEffect(() => {
    const handleOverlayClick = (e: MouseEvent) => {
      if (e.target === overlay.current) {
        onClick();
      }
    };
    document.addEventListener("click", handleOverlayClick);

    return () => {
      document.removeEventListener("click", handleOverlayClick);
    };
  }, [onClick]);
  
  return (
    <div className={ `${overlayStyles.overlay}`} ref={overlay}></div>
  );
}

export default ModalOverlay;

