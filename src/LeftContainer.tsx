import { Tooltip } from "./components/Tooltip/Tooltip";
import styles from "./App.module.css";

export const LeftContainer = () => {
  return (
    <div className={styles.leftContainer}>
      <Tooltip
        direction="leftTop"
        offset={5}
      >
        <Tooltip.Trigger>
          <div className={styles.trigger}>leftTop</div>
        </Tooltip.Trigger>
        <Tooltip.Content className={styles.blackContent}>
          <Tooltip.Arrow style={{ marginBottom: "-10px" }} />
          <span>prompt text</span>
          <span>prompt text</span>
          <span>prompt text</span>
        </Tooltip.Content>
      </Tooltip>
      <Tooltip
        direction="left"
        offset={5}
      >
        <Tooltip.Trigger>
          <div className={styles.trigger}>left</div>
        </Tooltip.Trigger>
        <Tooltip.Content className={styles.blackContent}>
          <Tooltip.Arrow />
          <span>prompt text</span>
          <span>prompt text</span>
          <span>prompt text</span>
        </Tooltip.Content>
      </Tooltip>
      <Tooltip
        direction="leftBottom"
        offset={5}
      >
        <Tooltip.Trigger>
          <div className={styles.trigger}>leftBottom</div>
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
