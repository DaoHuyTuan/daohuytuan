import React from "react";
import Container from "../Container";
import Link from "next/link";
import {
  BioWrapper,
  Avatar,
  AvatarBorder,
  BioTitle,
  BioContent,
  BioBody,
  BioLink
} from "./Bio.style";
import avatar from "../../../public/static/images/avatar.svg";
const Bio = React.memo(props => {
  return (
    <Container clssName="bio">
      <BioWrapper>
        <AvatarBorder>
          <Avatar src={avatar} />
        </AvatarBorder>
        <BioBody>
          <BioTitle>Hey! I’m David</BioTitle>
          <BioLink>
            <a href="https://github.com/DaoHuyTuan" target="_blank">Github</a>
            <a href="https://twitter.com/tuandaohuy" target="_blank">Twitter</a>
          </BioLink>
          <BioContent>
            Breakfast procuring no end happiness allowance assurance frank. Met
            simplicity nor difficulty unreserved who. Entreaties mr conviction
            dissimilar me astonished estimating cultivated.
          </BioContent>
          
        </BioBody>
      </BioWrapper>
    </Container>
  );
});

export default Bio;
