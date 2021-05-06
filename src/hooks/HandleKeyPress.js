import { useEffect } from "react";

const HandleKeyPress = (keyCode, action) => {
  useEffect(() => {
    function keyPress(e) {
      if (e.keyCode === keyCode) {
        return action();
      }
    }
    window.addEventListener("keyup", keyPress);
    return () => window.removeEventListener("keyup", keyPress);
  }, [action, keyCode]);
};

export default HandleKeyPress;
