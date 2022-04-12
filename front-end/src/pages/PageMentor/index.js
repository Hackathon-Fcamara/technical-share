import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MentorMain } from "../../components/MentorMain";
import { MentorSpecs } from "../../components/MentorSpecs";
import { ModalEmail } from "../../components/ModalEmail";
import { useState } from "react";

export const PageMentor = () => {
  const [ModalEmailOpen, setModalEmailOpen] = useState(true);

  return (
    <>
      <Header />
      <MentorSpecs />
      <Footer />
      <MentorMain />
      <ModalEmail 
        isOpen={ModalEmailOpen} 
        onRequestClose={() => setModalEmailOpen(false)}/>
    </>
  );
};
