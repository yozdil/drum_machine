import { Button, Grid, Container } from "semantic-ui-react";
import Banks from "../helpers/banks";
import DrumPad from "./DrumPad";

const obj = Banks().bankOne[0];

const DrumMachine = () => {
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Button.Group fluid>
            <DrumPad obj={obj} />
            <Button size="massive">W</Button>
            <Button size="massive">E</Button>
          </Button.Group>
        </Grid.Row>
        <Grid.Row>
          <Button.Group fluid>
            <Button size="massive">A</Button>
            <Button size="massive">S</Button>
            <Button size="massive">D</Button>
          </Button.Group>
        </Grid.Row>
        <Grid.Row>
          <Button.Group fluid>
            <Button size="massive">Z</Button>
            <Button size="massive">X</Button>
            <Button size="massive">C</Button>
          </Button.Group>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default DrumMachine;
