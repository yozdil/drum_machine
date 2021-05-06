import DrumMachine from "./components/DrumMachine";
import Bank from "./components/Bank";
import DB from "./helpers/db";
import "./styles/app.scss";
import { Header, Container, Divider, Segment } from "semantic-ui-react";
import { useState } from "react";

function App() {
  const [bank, setBank] = useState(DB().bankOne);

  const [display, setDisplay] = useState("Welcome!");

  return (
    <div className="container">
      <Container id="drum-machine">
        <Segment.Group horizontal>
          <Bank setDisplay={setDisplay} setBank={setBank} />
          <Segment clearing id="display" textAlign="center">
            <Header as="h1">Drum Machine</Header>
            <Header as="h2">{display}</Header>
          </Segment>
        </Segment.Group>

        <Divider />
        <Container>
          <DrumMachine setDisplay={setDisplay} data={bank} />
        </Container>
      </Container>
    </div>
  );
}

export default App;
