import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { BecomeMentor } from "../../components/BecomeMentor";
import { Benefits } from "../../components/Benefits";
import { FAQ } from "../../components/FAQ";

export const PageHome = () => {
  return (
    <>
      <Header />
      <Hero />
      <BecomeMentor />
      <Benefits />
      <FAQ />
    </>
  );
};
