import React, {useRef} from 'react';
import overlayStyles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({ onClick }) => {
  const overlay = useRef(null)
  React.useEffect(() => {
    const handleOverlayClick = (e) => {
      if (e.target === overlay.current) {
        onClick(e);
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

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired
}