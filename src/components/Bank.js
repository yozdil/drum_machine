import { useState } from "react";
import DB from "../helpers/db";
import { Header, Segment, Button } from "semantic-ui-react";

const Bank = ({ setBank, setDisplay }) => {
  const [bankOne, setBankOne] = useState(true);
  const [bankTwo, setBankTwo] = useState(false);

  const selectBank = (bank) => {
    setBank(DB()[bank]);
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
    <Segment textAlign="center">
      <Header as="h2">Sound Bank</Header>
      <Button toggle active={bankOne} onClick={() => selectBank("bankOne")}>
        Heater Kit
      </Button>
      <Button toggle active={bankTwo} onClick={() => selectBank("bankTwo")}>
        Smooth Piano Kit
      </Button>
    </Segment>
  );
};

export default Bank;
