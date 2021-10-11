import { useState } from "react";

function Toggle() {
  const [text, setText] = useState(true);
  return (
    <div>
      <button onClick={() => setText(!text)}>click Here</button>
      <h2>{text ? "gggg" : ""}</h2>
    </div>
  );
}
export default Toggle;
