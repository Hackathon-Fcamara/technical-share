import styles from "./styles.module.css";

const { tagList, tagList__item, tagList__tagText, tagList__tagBtn } = styles;

export const TagList = ({ tags, removeSkill }) => {
  return (
    <ul className={tagList}>
      {tags.map((tag, index) => (
        <li key={`${tag.skill}-${index}`} className={tagList__item}>
          <span className={tagList__tagText}>{tag.skill}</span>
          <button
            onClick={() => removeSkill(index)}
            className={tagList__tagBtn}
          >
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.42538 0.797058C1.25182 0.623492 0.970411 0.623492 0.796845 0.797058C0.623278 0.970625 0.623278 1.25203 0.796845 1.4256L1.42538 0.797058ZM6.57462 7.20338C6.74819 7.37694 7.0296 7.37694 7.20316 7.20338C7.37673 7.02981 7.37673 6.7484 7.20316 6.57484L6.57462 7.20338ZM0.796845 6.57484C0.623278 6.7484 0.623278 7.02981 0.796845 7.20338C0.970411 7.37694 1.25182 7.37694 1.42538 7.20338L0.796845 6.57484ZM7.20316 1.4256C7.37673 1.25203 7.37673 0.970625 7.20316 0.797058C7.0296 0.623492 6.74819 0.623492 6.57462 0.797058L7.20316 1.4256ZM0.796845 1.4256L6.57462 7.20338L7.20316 6.57484L1.42538 0.797058L0.796845 1.4256ZM1.42538 7.20338L7.20316 1.4256L6.57462 0.797058L0.796845 6.57484L1.42538 7.20338Z"
                fill="#25145A"
              />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};
