import React, { useRef } from "react";
import Refs from "../components/Refs";

const Hooks = () => {
  const myRef = useRef(null);

  return (
    <div>
        hi ref
      <Refs ref={myRef} name="swapnil" />
    </div>
  );
};

export default Hooks;
