import React from "react";
import Modal from "react-modal/lib/components/Modal";
import styles from "./styles.module.css";

const { 
  modalEmail__overlay, 
  modalEmail__container,
  modalEmail__content
} = styles;

export function ModalEmail({ isOpen, onRequestClose }) {
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={modalEmail__overlay}
      className={modalEmail__container}
      ariaHideApp={false}
    >
      <div className={modalEmail__content}>
        <figure>
          <img 
            src="https://picsum.photos/192/192" 
            alt="Foto do perfil"
          />
        </figure>
        <h1>E-mail enviado!</h1>
        <h2>Foi enviada uma mensagem para o mentor.</h2>
        <p>Em breve você terá um retorno por e-mail sobre a confirmação do agendamento.</p>
      </div>
    </Modal>
  );
};