import { Tooltip } from "./components/Tooltip/Tooltip";
import styles from "./App.module.css";

export const TopContainer = () => {
  return (
    <div className={styles.topContainer}>
      <Tooltip
        direction="topLeft"
        offset={5}
      >
        <Tooltip.Trigger>
          <div className={styles.trigger}>topLeft</div>
        </Tooltip.Trigger>
        <Tooltip.Content className={styles.blackContent}>
          <Tooltip.Arrow style={{ marginLeft: "10px" }} />
          <span>prompt text</span>
          <span>prompt text</span>
          <span>prompt text</span>
        </Tooltip.Content>
      </Tooltip>
      <Tooltip
        direction="top"
        offset={5}
      >
        <Tooltip.Trigger>
          <div className={styles.trigger}>top</div>
        </Tooltip.Trigger>
        <Tooltip.Content className={styles.blackContent}>
          <Tooltip.Arrow />
          <span>prompt text</span>
          <span>prompt text</span>
          <span>prompt text</span>
        </Tooltip.Content>
      </Tooltip>
      <Tooltip
        direction="topRight"
        offset={5}
      >
        <Tooltip.Trigger>
          <div className={styles.trigger}>topRight</div>
        </Tooltip.Trigger>
        <Tooltip.Content className={styles.blackContent}>
          <Tooltip.Arrow style={{ marginLeft: "-10px" }} />
          <span>prompt text</span>
          <span>prompt text</span>
          <span>prompt text</span>
        </Tooltip.Content>
      </Tooltip>
    </div>
  );
};
