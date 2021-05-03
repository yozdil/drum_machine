import { useEffect, useRef, useState } from "react";
import { Button, Grid, Container } from "semantic-ui-react";

const Drumpad = ({ obj }) => {
  const [audio] = useState(new Audio(obj.url));

  const handleKeyDown = (event) => {
    console.log("A key was pressed", event.keyCode);
    if (event.keyCode === 81) {
      audio.play()
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <Button size="massive">Q</Button>;
};

export default Drumpad;
