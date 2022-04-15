import React, { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SignInForm } from "../../components/SignInForm";
import { SignUp } from "../../components/SignUpForm";
import { ModalConfirmation } from "../../components/ModalConfirmation";

export const PageRegister = () => {
  const [ModalConfirmationOpen, setModalConfirmationOpen] = useState(false);

  return (
    <>
      <Header />
      <SignInForm />
      <SignUp handleOpenNewTaskModal={() => setModalConfirmationOpen(true)} />
      <Footer />
      <ModalConfirmation
        isOpen={ModalConfirmationOpen}
        onRequestClose={() => setModalConfirmationOpen(false)}
      />
    </>
  );
};
