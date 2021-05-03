import { Button, Grid, Container, Checkbox } from "semantic-ui-react";
import DrumPad from "./DrumPad";

const DrumMachine = ({ data }) => {
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Button.Group fluid>
            <DrumPad className="drumpad" data={data[0]} />
            <DrumPad className="drumpad" data={data[1]} />
            <DrumPad className="drumpad" data={data[2]} />
          </Button.Group>
        </Grid.Row>
        <Grid.Row>
          <Button.Group fluid>
            <DrumPad className="drumpad" data={data[3]} />
            <DrumPad className="drumpad" data={data[4]} />
            <DrumPad className="drumpad" data={data[5]} />
          </Button.Group>
        </Grid.Row>
        <Grid.Row>
          <Button.Group fluid>
            <DrumPad className="drumpad" data={data[6]} />
            <DrumPad className="drumpad" data={data[7]} />
            <DrumPad className="drumpad" data={data[8]} />
          </Button.Group>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default DrumMachine;
