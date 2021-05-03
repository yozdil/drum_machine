import DrumMachine from "./components/DrumMachine";
import Banks from "./helpers/banks";
import "./styles/app.scss";
import {
  Header,
  Container,
  Checkbox,
  Divider,
  Segment,
  Grid,
} from "semantic-ui-react";
import { useState } from "react";

function App() {

  const [bank, setBank] = useState(true)

  if (bank) {
    
  }
  const data = Banks().bankOne;

  return (
    <div className="container">
      <Container id="drum-machine">
        <Segment.Group horizontal>
          <Segment textAlign="center">
            <Header>Switch Sound Bank</Header>
            <Checkbox
              onChange={() => console.log("Implement state to switch banks")}
              slider
            />
          </Segment>
          <Segment>Middle</Segment>
          <Segment>Bottom</Segment>
        </Segment.Group>

        <Divider />
        <Container id="display">
          <Header as="h1">Drum Machine</Header>
          <DrumMachine data={data} />
        </Container>
      </Container>
    </div>
  );
}

export default App;
