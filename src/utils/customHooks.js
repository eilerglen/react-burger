import { useState } from "react";

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openingModal = () => {
        setIsOpen(true);
    }
    const closingModal = () => {
        setIsOpen(false);
    }
    return {
        isOpen, 
        openingModal,
        closingModal};
}
export {useModal}