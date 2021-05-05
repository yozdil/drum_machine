import DrumMachine from "./components/DrumMachine";
import Banks from "./helpers/banks";
import "./styles/app.scss";
import {
  Header,
  Container,
  Divider,
  Segment,
  Checkbox,
} from "semantic-ui-react";
import { useState } from "react";
import useToggle from "./hooks/useToggle";

function App() {
  const [isTextChanged, setIsTextChanged] = useToggle();

  const [display, setDisplay] = useState("");

  return (
    <div className="container">
      <Container id="drum-machine">
        <Segment.Group horizontal>
          <Segment textAlign="center">
            <Header as="h2">Sound Bank</Header>
            <Checkbox slider onChange={setIsTextChanged}></Checkbox>
            <Header>{isTextChanged ? "Smooth Piano Kit" : "Heater Kit"}</Header>
          </Segment>
          <Segment id="display">
            <Header as="h1">Drum Machine</Header>
          </Segment>
        </Segment.Group>

        <Divider />
        <Container>
          <Header as="h1">{display}</Header>
          <DrumMachine
            data={isTextChanged ? Banks().bankTwo : Banks().bankOne} //Instead of this store it in state
          />
        </Container>
      </Container>
    </div>
  );
}

export default App;
