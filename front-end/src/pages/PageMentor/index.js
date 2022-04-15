import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MentorSpecs } from "../../components/MentorSpecs";
import { MentorAbout } from "../../components/MentorAbout";
import { MentorForm } from "../../components/MentorForm";
import { ModalEmail } from "../../components/ModalEmail";
import { useState } from "react";

export const PageMentor = () => {
  const [ModalEmailOpen, setModalEmailOpen] = useState(true);

  return (
    <>
      <Header />
      <MentorSpecs />
      <MentorAbout />
      <MentorForm />
      <Footer />
      {/* <ModalEmail
        isOpen={ModalEmailOpen}
        onRequestClose={() => setModalEmailOpen(false)}
      /> */}
    </>
  );
};
