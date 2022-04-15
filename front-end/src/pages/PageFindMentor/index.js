import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { AsideFilter } from "../../components/AsideFilter";
import { SearchMentor } from "../../components/SearchMentor";

// STYLES
import styles from "./styles.module.css";

const { findMentorMain, findMentorMain__container } = styles;

export const PageFindMentor = () => {
  return (
    <>
      <Header />
      <main className={findMentorMain}>
        <div className={findMentorMain__container}>
          <AsideFilter />
          <SearchMentor />
        </div>
      </main>
      <Footer />
    </>
  );
};
