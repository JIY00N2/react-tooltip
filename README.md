## 1.프로젝트 설정

node 버전: v18.19.0

## 2. 프로젝트 실행

```
npm install
npm run dev
```

## 3. 사용 예시

```tsx
// App.tsx
import { Tooltip } from "./components/Tooltip/Tooltip";
import styles from "./App.module.css";

<Tooltip
  direction="topLeft"
  leaveDelay={1000}
  hoverVisible
  arrowColor="gray"
  offset={5}
>
  <Tooltip.Trigger>
    <div className={styles.trigger}>topLeft, leaveDelay 1s, hoverVisible</div>
  </Tooltip.Trigger>
  <Tooltip.Content className={styles.content}>
    <Tooltip.Arrow className={styles.arrow} />
    <span>Are you sure to delete this task?</span>
    <button
      onClick={handleClick}
      className={styles.confirmButton}
    >
      yes
    </button>
  </Tooltip.Content>
</Tooltip>;
```

## 4. 아키텍처

- 구현 방법

1. 여러 컴포넌트를 조합해 툴팁 기능 컴포넌트 구현
2. 상위 컴포넌트에서 상태들을 관리하고, provider로 상태를 변경할 수 있는 api를 하위 컴포넌트에 전달

- 기대 효과

1. 상태관리 로직을 외부로부터 숨긴다.
2. 하위 컴포넌트들은 제한된 api(상태와 메서드)를 사용해 무분별한 상태변경 금지

## 5. API Reference

### Tooltip

툴팁의 모든 부분이 들어있습니다.

| Prop           | Type            | Default |
| -------------- | --------------- | ------- |
| direction      | DirectionType   | -       |
| children       | React.ReactNode | -       |
| enterDelay     | number          | 0       |
| leaveDelay     | number          | 0       |
| hoverVisible   | boolean         | false   |
| forceInvisible | boolean         | false   |
| arrowColor     | string          | "black" |
| margin         | number          | -       |
| offset         | number          | 5       |
