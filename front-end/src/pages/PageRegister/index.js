import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SignInForm } from "../../components/SignInForm";
import { SignUp } from "../../components/SignUpForm";
import { ModalConfirmation } from "../../components/ModalConfirmation";

// STYLES
import styles from "./styles.module.css";

const { pageRegister, pageRegister__container } = styles;

export const PageRegister = () => {
  const [ModalConfirmationOpen, setModalConfirmationOpen] = useState(false);

  return (
    <>
      <Header />
      <main className={pageRegister}>
        <div className={pageRegister__container}>
          <SignInForm />
          <SignUp
            handleOpenNewTaskModal={() => setModalConfirmationOpen(true)}
          />
        </div>
      </main>
      <Footer />
      <ModalConfirmation
        isOpen={ModalConfirmationOpen}
        onRequestClose={() => setModalConfirmationOpen(false)}
      />
    </>
  );
};
