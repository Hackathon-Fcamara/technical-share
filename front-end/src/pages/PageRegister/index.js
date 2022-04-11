import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SignInForm } from "../../components/SignInForm";
import { SignUpForm } from "../../components/SignUpForm";

export const PageLogin = () => {
  return (
    <>
      <Header />
      <SignInForm />
      <SignUpForm />
      <Footer />
    </>
  );
};
