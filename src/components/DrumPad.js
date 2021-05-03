import { useEffect, useRef, useState } from "react";
import { Button, Grid, Container } from "semantic-ui-react";


const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Drumpad = ({ obj }) => {

  const [playing, toggle] = useAudio(obj.url);

  const handleKeyDown = (event) => {
    console.log("A key was pressed", event.keyCode);
    if (event.keyCode === obj.keyCode) {
      toggle();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Button onClick={toggle} size="massive">
      {obj.keyTrigger}
    </Button>
  );
};

export default Drumpad;
