import DrumMachine from "./components/DrumMachine";
import Bank from "./components/Bank";
import DB from "./helpers/db";
import { Header, Container, Divider, Segment } from "semantic-ui-react";
import { useState } from "react";

function App() {
  const [bank, setBank] = useState(DB().bankOne);
  const [display, setDisplay] = useState("Welcome!");

  return (
    <div className="container">
      <Container id="drum-machine">
        <Segment.Group vertical>
          <Bank setDisplay={setDisplay} setBank={setBank} />
          <Segment
            inverted
            color="green"
            clearing
            id="display"
            textAlign="center"
          >
            <Header as="h1">Drum Machine</Header>
            <Header as="h2">{display}</Header>
          </Segment>
        </Segment.Group>
        <Divider />
        <Segment padded="very">
          <Container className="machine-container">
            <DrumMachine setDisplay={setDisplay} data={bank} />
          </Container>
        </Segment>
        <a href="https://yamacozdil.com/">
          <Header floated="right" color="green" as="h4">
            by Yamac Ozdil
          </Header>
        </a>
      </Container>
    </div>
  );
}

export default App;
