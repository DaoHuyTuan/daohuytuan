import React from "react";
import Container from "../Container";
import Link from "next/link";
import SVGComponent from "../../atoms/SVGComponent";
import {
  BioWrapper,
  Avatar,
  AvatarBorder,
  BioTitle,
  BioContent,
  BioBody,
  BioLink,
  BioSocial
} from "./Bio.style";
import avatar from "../../../public/static/images/avatar.svg";
import { BLACK_THEME } from "../../../theme/theme";
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
            <Link href="/friends"><a>Friends</a></Link>
            <Link href="/uses"><a>Uses</a></Link>
          </BioLink>
          <BioContent>
            From Viet Nam with love, a vimmer and a fan of emacs but i usually use vscode for work 😋, my hobby is customize anything i love, or build something from scratch 🔥🔥🔥🔥🔥.<br />
            I am currently working for a outsourcing technology company at HCM city
          </BioContent>
          <BioSocial>
            <a href="https://www.facebook.com/ppdusv" target="_blank"><SVGComponent name="fb" width={24} height={24} fill={props.theme.light ? BLACK_THEME : "#f9f9f9"} /></a>
            <a href="https://twitter.com/tuandaohuy" target="_blank"><SVGComponent name="twitter" width={30} height={30} fill={props.theme.light ? BLACK_THEME : "#f9f9f9"} /></a>
            <a href="https://github.com/DaoHuyTuan" target="_blank"><SVGComponent name="github" width={30} height={30} fill={props.theme.light ? BLACK_THEME : "#f9f9f9"} /></a>
            <a href="/static/feed.xml" target="_blank"><SVGComponent name="rss" width={30} height={30} fill={props.theme.light ? BLACK_THEME : "#f9f9f9"} /></a>
          </BioSocial>
        </BioBody>
      </BioWrapper>
    </Container>
  );
});

export default Bio;
