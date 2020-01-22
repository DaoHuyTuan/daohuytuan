import React from "react";
import Container from "../Container";
import {
  BioWrapper,
  Avatar,
  AvatarBorder,
  BioTitle,
  BioContent
} from "./Bio.style";
import avatar from "../../../public/static/images/avatar.svg";
const Bio = React.memo(props => {
  return (
    <Container clssName="bio">
      <BioWrapper>
        <AvatarBorder>
          <Avatar src={avatar} />
        </AvatarBorder>
        <BioTitle>Hey! I’m David</BioTitle>
        <BioContent>
          Breakfast procuring no end happiness allowance assurance frank. Met
          simplicity nor difficulty unreserved who. Entreaties mr conviction
          dissimilar me astonished estimating cultivated.
        </BioContent>
      </BioWrapper>
    </Container>
  );
});

export default Bio;
