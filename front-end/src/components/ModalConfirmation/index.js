import React from "react";
import Modal from "react-modal/lib/components/Modal";
import styles from "./styles.module.css";

const {
  modalConfirmation__overlay,
  modalConfirmation__container,
  modalConfirmation__content,
} = styles;

export function ModalConfirmation({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={modalConfirmation__overlay}
      className={modalConfirmation__container}
      ariaHideApp={false}
    >
      <div className={modalConfirmation__content}>
        {/* <figure>
          <img src="" alt="Foto do perfil" />
        </figure> */}
        <h1>Cadastro realizado com sucesso!</h1>
      </div>
    </Modal>
  );
}
