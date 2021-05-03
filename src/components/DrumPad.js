import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

const Drumpad = ({ obj }) => {
  const [audio] = useState(new Audio(obj.url));
  const playAudio = () => {
    audio.currentTime = 0;
    audio.play();
  };
  const handleKeyDown = (event) => {
    console.log("A key was pressed", event.keyCode);
    if (event.keyCode === obj.keyCode) {
      playAudio();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Button onClick={playAudio} size="massive">
      {obj.keyTrigger}
    </Button>
  );
};

export default Drumpad;
