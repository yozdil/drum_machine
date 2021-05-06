import { useRef, useState } from "react";
import { Button } from "semantic-ui-react";

import HandleKeyPress from "../hooks/HandleKeyPress";

const Drumpad = ({ data, setDisplay }) => {
  const [activeButton, setActiveButton] = useState(false);

  const audioTrack = useRef(null);

  const playAudio = () => {
    console.log(data.id);
    setDisplay(data.id);
    setActiveButton(true);
    audioTrack.current.currentTime = 0;
    audioTrack.current.play();
    setTimeout(() => {
      setActiveButton(false);
    }, 100);
  };

  return (
    <Button
      id={data.id}
      toggle
      active={activeButton}
      onClick={playAudio}
      size="massive"
      onKeyPress={HandleKeyPress(data.keyCode, () => playAudio())}
    >
      {data.keyTrigger}
      <audio ref={audioTrack} className="clip" src={data.url}></audio>
    </Button>
  );
};

export default Drumpad;
