import { useState } from "react";

function UseStateRule() {
  const [value] = useState("Hooks must be called at top level");

  return <p>{value}</p>;
}

export default UseStateRule;