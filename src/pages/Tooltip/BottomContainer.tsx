import { Tooltip } from "../../components/Tooltip/Tooltip";
import styles from "./Tooltip.module.css";

export const BottomContainer = () => {
  return (
    <div className={styles.topContainer}>
      <Tooltip
        direction="bottomLeft"
        offset={5}
      >
        <Tooltip.Trigger>
          <div className={styles.trigger}>bottomLeft</div>
        </Tooltip.Trigger>
        <Tooltip.Content className={styles.blackContent}>
          <Tooltip.Arrow style={{ marginLeft: "10px" }} />
          <span>prompt text</span>
          <span>prompt text</span>
          <span>prompt text</span>
        </Tooltip.Content>
      </Tooltip>
      <Tooltip
        direction="bottom"
        offset={5}
      >
        <Tooltip.Trigger>
          <div className={styles.trigger}>bottom</div>
        </Tooltip.Trigger>
        <Tooltip.Content className={styles.blackContent}>
          <Tooltip.Arrow />
          <span>prompt text</span>
          <span>prompt text</span>
          <span>prompt text</span>
        </Tooltip.Content>
      </Tooltip>
      <Tooltip
        direction="bottomRight"
        offset={5}
      >
        <Tooltip.Trigger>
          <div className={styles.trigger}>bottomRight</div>
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
