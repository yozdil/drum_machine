import { Button, Grid, Container } from "semantic-ui-react";
import DrumPad from "./DrumPad";

const DrumMachine = ({ data, setDisplay }) => {
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Button.Group fluid>
            <DrumPad
              className="drumpad"
              setDisplay={setDisplay}
              data={data[0]}
            />
            <DrumPad
              className="drumpad"
              setDisplay={setDisplay}
              data={data[1]}
            />
            <DrumPad
              className="drumpad"
              setDisplay={setDisplay}
              data={data[2]}
            />
          </Button.Group>
        </Grid.Row>
        <Grid.Row>
          <Button.Group fluid>
            <DrumPad
              className="drumpad"
              setDisplay={setDisplay}
              data={data[3]}
            />
            <DrumPad
              className="drumpad"
              setDisplay={setDisplay}
              data={data[4]}
            />
            <DrumPad
              className="drumpad"
              setDisplay={setDisplay}
              data={data[5]}
            />
          </Button.Group>
        </Grid.Row>
        <Grid.Row>
          <Button.Group fluid>
            <DrumPad
              className="drumpad"
              setDisplay={setDisplay}
              data={data[6]}
            />
            <DrumPad
              className="drumpad"
              setDisplay={setDisplay}
              data={data[7]}
            />
            <DrumPad
              className="drumpad"
              setDisplay={setDisplay}
              data={data[8]}
            />
          </Button.Group>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default DrumMachine;
