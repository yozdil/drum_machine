import DrumMachine from "./components/DrumMachine";
import Banks from "./helpers/banks";
import "./styles/app.scss";
import {
  Header,
  Container,
  Divider,
  Button,
  Checkbox,
} from "semantic-ui-react";
import { useState } from "react";
import useToggle from "./hooks/useToggle";

function App() {
  const [bank, setBank] = useToggle();

  const [display, setDisplay] = useState("");

  return (
    <div className="container">
      <Container id="drum-machine">
        <Button.Group horizontal>
          <Button textAlign="center">
            <Header as="h2">Sound Bank</Header>
            <Checkbox slider onChange={setBank}></Checkbox>
            <Header>{bank ? "Smooth Piano Kit" : "Heater Kit"}</Header>
          </Button>
          <Button id="display">
            <Header as="h1">Drum Machine</Header>
          </Button>
        </Button.Group>

        <Divider />
        <Container>
          <Header as="h1">{display}</Header>
          <DrumMachine
            data={bank} //Instead of this store it in state
          />
        </Container>
      </Container>
    </div>
  );
}

export default App;
