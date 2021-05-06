import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

const Drumpad = ({ data, setDisplay }) => {
  const [activeButton, setActiveButton] = useState(false);

  const playAudio = () => {
    setDisplay(data.id)
    setActiveButton(true);
    document.querySelector(`#${data.id}`).currentTime = 0;
    document.querySelector(`#${data.id}`).play();
    setTimeout(() => {
      setActiveButton(false);
    }, 100);
  };

  const handleKeyDown = (event) => {
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
    <Button toggle active={activeButton} onClick={playAudio} size="massive">
      {data.keyTrigger}
      <audio id={data.id} className="clip"  src={data.url}></audio>
    </Button>
  );
};

export default Drumpad;
