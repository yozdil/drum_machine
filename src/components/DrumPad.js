import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

const Drumpad = ({ data }) => {
  const [audio] = useState(new Audio(data.url));
  const playAudio = () => {
    audio.currentTime = 0;
    audio.play();
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === data.keyCode) {
      document.querySelector(`#${data.id}`).click();
      // playAudio();
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
