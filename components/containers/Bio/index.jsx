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
          <BioTitle>Hey! I’m tuan</BioTitle>
          <BioLink>
            <a href="https://github.com/DaoHuyTuan" target="_blank">Github</a>
            <a href="https://twitter.com/tuandaohuy" target="_blank">Twitter</a>
          </BioLink>
          <BioContent>
            From Viet Nam with love, a vimmer and a fan of emacs but i usually use vscode for work 😋, my hobby is customize anything i love, or build something from scratch 🔥🔥🔥🔥🔥.<br />
            I am currently working for a outsourcing technology company at HCM city
          </BioContent>
          
        </BioBody>
      </BioWrapper>
    </Container>
  );
});

export default Bio;
