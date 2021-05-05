import { useEffect, useRef, useState } from "react";
import { Button } from "semantic-ui-react";

const Drumpad = ({ data }) => {
  const [activeButton, setActiveButton] = useState(false);

  const [audio] = useState(new Audio(data.url));
  const playAudio = () => {
    audio.currentTime = 0;
    audio.play();
  };
  const handleKeyDown = (event) => {
    if (event.keyCode === data.keyCode) {
      setActiveButton(true);
      document.querySelector(`#${data.id}`).click();
      setTimeout(() => {
        setActiveButton(false);
      }, 300);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Button
      active={activeButton}
      onClick={playAudio}
      id={data.id}
      size="massive"
    >
      {data.keyTrigger}
    </Button>
  );
};

export default Drumpad;
