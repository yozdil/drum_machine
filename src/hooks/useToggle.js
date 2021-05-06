import { useState, useCallback } from "react";
import Banks from "../helpers/banks";

const useToggle = (initialState = Banks().bankOne) => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => {
    if (state === Banks().bankOne) {
      setState(Banks().bankTwo);
    } else {
      setState(Banks().bankOne);
    }
  }, [state]);

  return [state, toggle];
};

export default useToggle;
