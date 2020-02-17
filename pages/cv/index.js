import React from "react";
import Container from "Containers/Container";
import CVBlock from "./CVBlock";
const CV = React.memo(props => {
  return (
  <Container clssName="cv-page">
    <CVBlock>
      <Container clssName="profile-info">
        <div className="profile-info__content">
            <span>Đào Huy Tuấn</span>
        </div>
        <span>fccv</span>
      </Container>
      <Container clssName="profile-pic">
          <img src="static/images/avatar.jpg" />
      </Container>
    </CVBlock>
  </Container>
  )
});

export default CV;
