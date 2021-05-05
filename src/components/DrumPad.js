import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

const Drumpad = ({ data }) => {
  const [audio] = useState(new Audio(data.url));
  const playAudio = () => {
    audio.currentTime = 0;
    audio.play();
  };
  const handleKeyDown = (event) => {
    console.log("A key was pressed", event.keyCode);
    if (event.keyCode === data.keyCode) {
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
    <Button onClick={playAudio} id={data.id} size="massive">
      {data.keyTrigger}
    </Button>
  );
};

export default Drumpad;
