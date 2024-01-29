import { useState } from "react";

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggle = () => setState((prev) => !prev);
  return [state, setState, toggle];
}

export default useToggle;
