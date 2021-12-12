import React from 'react';
import overlayStyles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({ isOpen, onClick }) => {
  const overlay = React.useRef(null)
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
    <div className={isOpen ? `${overlayStyles.overlay} ${overlayStyles.overlay_opened}` : overlayStyles.overlay} ref={overlay}></div>
  );
}

export default ModalOverlay;

ModalOverlay.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func
}