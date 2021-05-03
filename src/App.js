import DrumMachine from "./components/DrumMachine";
import Banks from "./helpers/banks";
import "./styles/app.scss";
import {
  Header,
  Container,
  Checkbox,
  Divider,
  Segment,
} from "semantic-ui-react";

function App() {

  const data = Banks().bankOne;

  return (
    <div className="container">
      <Container id="drum-machine">
        <Segment>
          <Checkbox
            onChange={() => console.log("Implement state to switch banks")}
            slider
          />
        </Segment>
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
