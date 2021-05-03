import "./styles/app.scss";
import { Header, Container } from "semantic-ui-react";
import Drumpad from "./components/Drumpad";

function App() {
  return (
    <div className="App">
      <Container id="drum-machine">
        <Container id="display">
          <Header>Hello</Header>
          <Drumpad />
        </Container>
      </Container>
    </div>
  );
}

export default App;
