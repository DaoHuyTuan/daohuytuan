import React from "react";
import Container from "Containers/Container";
import CVBlock from "./CVBlock";
import Button from "Atoms/Button";
const CV = React.memo(props => {
  return (
  <Container clssName="cv-page">
    <CVBlock>
      <Container clssName="profile-info">
        <div className="profile-info__content">
            <span className="profile-info__fullname">Đào Huy Tuấn</span>
            <span className="profile-info__info">Day of Birth: 07/08/1995</span>
            <span className="profile-info__info">Phone: 0772657538</span>
            <span className="profile-info__info">Email: tuandh95@gmail.com</span>
            <span className="profile-info__info">Address: 25/52 Van Minh, An Phu, District 2</span>
            <Button clssName="downloadCV" content="Download CV" /> 
        </div>
        <div>
          <span className="profile-info__role">Front End Developer</span>
        </div>
      </Container>
      <Container clssName="profile-pic">
          <img src="static/images/avatar.jpg" />
      </Container>
    </CVBlock>
  </Container>
  )
});

export default CV;
