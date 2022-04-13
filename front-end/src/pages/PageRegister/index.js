import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SignInForm } from "../../components/SignInForm";
import { SignUp } from "../../components/SignUpForm";

export const PageRegister = () => {
  return (
    <>
      <Header />
      <SignInForm />
      <SignUp />
      <Footer />
    </>
  );
};
