import "./styles/app.scss";
import { Header, Container } from "semantic-ui-react";
import DrumMachine from "./components/DrumMachine";

function App() {
  return (
    <div className='container'>
      <Container id="drum-machine">
        <Container id="display">
          <Header as="h1">Drum Machine</Header>
          <DrumMachine />
        </Container>
      </Container>
    </div>
  );
}

export default App;
