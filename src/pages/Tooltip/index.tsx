import { useState } from "react";
import styles from "./Tooltip.module.css";
import { TopContainer } from "./TopContainer";
import { LeftContainer } from "./LeftContainer";
import { RightContainer } from "./RightContainer";
import { BottomContainer } from "./BottomContainer";
import { Tooltip } from "../../components/Tooltip/Tooltip";

export default function TooltipPage() {
  const [disabled, setDisabled] = useState(true);

  const toggleDisabled = () => setDisabled((prev) => !prev);

  return (
    <>
      <section className={styles.firstSection}>
        <TopContainer />
        <div className={styles.horizontalContainer}>
          <LeftContainer />
          <RightContainer />
        </div>
        <BottomContainer />
      </section>

      <section className={styles.secondSection}>
        <Tooltip
          direction="topLeft"
          offset={5}
          enterDelay={1000}
        >
          <Tooltip.Trigger>
            <div className={styles.trigger}>enterDelay 1s</div>
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
          leaveDelay={1000}
        >
          <Tooltip.Trigger>
            <div className={styles.trigger}>leaveDelay 1s</div>
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
          hoverVisible
        >
          <Tooltip.Trigger>
            <div className={styles.trigger}>hover not hidden</div>
          </Tooltip.Trigger>
          <Tooltip.Content className={styles.blackContent}>
            <Tooltip.Arrow style={{ marginLeft: "-10px" }} />
            <span>prompt text</span>
            <span>prompt text</span>
            <span>prompt text</span>
          </Tooltip.Content>
        </Tooltip>
      </section>

      <section className={styles.thirdSection}>
        <Tooltip
          direction="top"
          offset={5}
          arrowColor="gray"
          hoverVisible
        >
          <Tooltip.Trigger>
            <div className={styles.trigger}>top</div>
          </Tooltip.Trigger>
          <Tooltip.Content className={styles.grayContent}>
            <Tooltip.Arrow />
            <span>Are you sure to delete this task?</span>
            <button
              onClick={() => alert("deleted!")}
              className={styles.confirmButton}
            >
              yes
            </button>
          </Tooltip.Content>
        </Tooltip>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "120px",
          }}
        >
          <Tooltip
            direction="left"
            offset={5}
            arrowColor="gray"
            hoverVisible
          >
            <Tooltip.Trigger>
              <div className={styles.trigger}>left</div>
            </Tooltip.Trigger>
            <Tooltip.Content className={styles.grayContent}>
              <Tooltip.Arrow />
              <span>Are you sure to delete this task?</span>
              <button
                onClick={() => alert("deleted!")}
                className={styles.confirmButton}
              >
                yes
              </button>
            </Tooltip.Content>
          </Tooltip>
          <Tooltip
            direction="right"
            offset={5}
            arrowColor="gray"
            hoverVisible
          >
            <Tooltip.Trigger>
              <div className={styles.trigger}>right</div>
            </Tooltip.Trigger>
            <Tooltip.Content className={styles.grayContent}>
              <Tooltip.Arrow />
              <span>Are you sure to delete this task?</span>
              <button
                onClick={() => alert("deleted!")}
                className={styles.confirmButton}
              >
                yes
              </button>
            </Tooltip.Content>
          </Tooltip>
        </div>
        <Tooltip
          direction="bottom"
          offset={5}
          arrowColor="gray"
          hoverVisible
        >
          <Tooltip.Trigger>
            <div className={styles.trigger}>bottom</div>
          </Tooltip.Trigger>
          <Tooltip.Content className={styles.grayContent}>
            <Tooltip.Arrow />
            <span>Are you sure to delete this task?</span>
            <button
              onClick={() => alert("deleted!")}
              className={styles.confirmButton}
            >
              yes
            </button>
          </Tooltip.Content>
        </Tooltip>
      </section>

      <section className={styles.fourthSection}>
        <Tooltip
          direction="top"
          offset={5}
          arrowColor="pink"
        >
          <Tooltip.Trigger>
            <div
              style={{
                backgroundColor: "pink",
                padding: "5px",
                borderRadius: "5px",
                color: "white",
                width: "100px",
                textAlign: "center",
              }}
            >
              pink
            </div>
          </Tooltip.Trigger>
          <Tooltip.Content
            style={{
              backgroundColor: "pink",
              padding: "5px",
              borderRadius: "5px",
              color: "white",
            }}
          >
            <Tooltip.Arrow />
            <div>pink</div>
          </Tooltip.Content>
        </Tooltip>
        <Tooltip
          direction="top"
          offset={5}
          arrowColor="yellow"
        >
          <Tooltip.Trigger>
            <div
              style={{
                backgroundColor: "yellow",
                padding: "5px",
                borderRadius: "5px",
                width: "100px",
                textAlign: "center",
              }}
            >
              yellow
            </div>
          </Tooltip.Trigger>
          <Tooltip.Content
            style={{
              backgroundColor: "yellow",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            <Tooltip.Arrow />
            <div>yellow</div>
          </Tooltip.Content>
        </Tooltip>
      </section>

      <section className={styles.fifthSection}>
        {disabled && <button onClick={toggleDisabled}>enable</button>}
        {!disabled && <button onClick={toggleDisabled}>disable</button>}
        <Tooltip
          direction="top"
          offset={5}
          forceInvisible={disabled}
        >
          <Tooltip.Trigger>
            <div
              style={{
                backgroundColor: "lightgray",
                padding: "5px",
                borderRadius: "5px",
                width: "100px",
                textAlign: "center",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              asperiores atque
            </div>
          </Tooltip.Trigger>
          <Tooltip.Content
            className={styles.blackContent}
            style={{ width: "100px" }}
          >
            <Tooltip.Arrow />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            asperiores atque
          </Tooltip.Content>
        </Tooltip>
      </section>
    </>
  );
}
