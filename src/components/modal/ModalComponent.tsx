import React from 'react';
import { useModalStore } from '../../stores/useModalStore';
import s from './modalComponent.module.css'

const ModalComponent: React.FC = () => {
  const { activeModal, modalsContents, closeModal } = useModalStore()

  if (!activeModal) return null

  return (
    <div className={s.modalOverlay} onClick={closeModal}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={s.modalClose} onClick={closeModal}>
          ×
        </button>
        {modalsContents[activeModal]}
      </div>
    </div>
  );
};

export default ModalComponent;
