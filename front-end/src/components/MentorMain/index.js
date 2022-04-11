import { MentorCard } from "../MentorCard";

import styles from "./styles.module.css";

const { mentorMain__container, mentorList } = styles;

export const MentorMain = () => {
  return (
    <main className="mentorMain">
      <div className={mentorMain__container}>
        <ul className={mentorList}>
          <MentorCard></MentorCard>
          <MentorCard></MentorCard>
          <MentorCard></MentorCard>
          <MentorCard></MentorCard>
          <MentorCard></MentorCard>
        </ul>
      </div>
    </main>
  );
};
