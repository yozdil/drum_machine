import DrumMachine from "./components/DrumMachine";
import Banks from "./helpers/banks";
import "./styles/app.scss";
import { Header, Container, Divider, Segment, Button } from "semantic-ui-react";
import { useState } from "react";

function App() {
  const [bankOne, setBankOne] = useState(true);
  const [bankTwo, setBankTwo] = useState(false);
  const [bank, setBank] = useState(Banks().bankOne);

  const [display, setDisplay] = useState("Welcome!");

  const selectBank = (bank) => {
    setBank(Banks()[bank]);
    if (bank === "bankOne") {
      setBankTwo(false);
      setBankOne(true);
      setDisplay("Heater Kit");
    } else {
      setBankOne(false);
      setBankTwo(true);
      setDisplay("Smooth Piano Kit");
    }
  };

  return (
    <div className="container">
      <Container id="drum-machine">
        <Segment.Group horizontal>
          <Segment textAlign="center">
            <Header as="h2">Sound Bank</Header>
            <Button
              toggle
              active={bankOne}
              onClick={() => selectBank("bankOne")}
            >
              Heater Kit
            </Button>
            <Button
              toggle
              active={bankTwo}
              onClick={() => selectBank("bankTwo")}
            >
              Smooth Piano Kit
            </Button>
          </Segment>
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
