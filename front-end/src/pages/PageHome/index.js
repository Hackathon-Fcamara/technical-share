import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { BecomeMentor } from "../../components/BecomeMentor";
import { Benefits } from "../../components/Benefits";
import { Testimonial } from "../../components/Testimonial";
import { FAQ } from "../../components/FAQ";
import { Footer } from "../../components/Footer";

export const PageHome = () => {
  return (
    <>
      <Header />
      <Hero />
      <BecomeMentor />
      <Benefits />
      <Testimonial />
      <FAQ />
      <Footer />
    </>
  );
};
