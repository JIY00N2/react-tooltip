import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Link to={"/tooltip"}>Tooltip example</Link>
      <Link to={"/modal"}>Modal example</Link>
    </>
  );
}
