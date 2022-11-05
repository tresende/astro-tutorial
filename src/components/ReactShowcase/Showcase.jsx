import { useState } from "react";

function Showcase() {
  const [name] = useState("Thiago");
  return <>Showcase {name}</>;
}

export default Showcase;
