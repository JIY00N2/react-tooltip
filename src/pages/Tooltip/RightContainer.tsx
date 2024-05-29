import { Tooltip } from "../../components/Tooltip/Tooltip";
import styles from "./Tooltip.module.css";

export const RightContainer = () => {
  return (
    <div className={styles.rightContainer}>
      <Tooltip
        direction="rightTop"
        offset={5}
      >
        <Tooltip.Trigger>
          <div className={styles.trigger}>rightTop</div>
        </Tooltip.Trigger>
        <Tooltip.Content className={styles.blackContent}>
          <Tooltip.Arrow style={{ marginBottom: "-10px" }} />
          <span>prompt text</span>
          <span>prompt text</span>
          <span>prompt text</span>
        </Tooltip.Content>
      </Tooltip>
      <Tooltip
        direction="right"
        offset={5}
      >
        <Tooltip.Trigger>
          <div className={styles.trigger}>right</div>
        </Tooltip.Trigger>
        <Tooltip.Content className={styles.blackContent}>
          <Tooltip.Arrow />
          <span>prompt text</span>
          <span>prompt text</span>
          <span>prompt text</span>
        </Tooltip.Content>
      </Tooltip>
      <Tooltip
        direction="rightBottom"
        offset={5}
      >
        <Tooltip.Trigger>
          <div className={styles.trigger}>rightBottom</div>
        </Tooltip.Trigger>
        <Tooltip.Content className={styles.blackContent}>
          <Tooltip.Arrow style={{ marginBottom: "10px" }} />
          <span>prompt text</span>
          <span>prompt text</span>
          <span>prompt text</span>
        </Tooltip.Content>
      </Tooltip>
    </div>
  );
};
