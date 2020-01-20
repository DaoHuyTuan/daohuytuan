import React from "react";
import Container from "../Container";
import { BioWrapper } from "./Bio.style";
const Bio = React.memo(props => {
  return (
    <Container clssName="bio">
      <BioWrapper>FRED</BioWrapper>
    </Container>
  );
});

export default Bio;
