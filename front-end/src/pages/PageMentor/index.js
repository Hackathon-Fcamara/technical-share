import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { MentorSpecs } from "../../components/MentorSpecs";
import { MentorAbout } from "../../components/MentorAbout";
import { MentorForm } from "../../components/MentorForm";

export const PageMentor = () => {
  return (
    <>
      <Header />
      <MentorSpecs />
      <MentorAbout />
      <MentorForm />
      <Footer />
    </>
  );
};
