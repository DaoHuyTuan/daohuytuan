import React from "react"
import Layout from "../../components/layout"
import AboutBlock from "../../components/AboutComponent/AboutBlock"
import AboutBlockTitle from "../../components/AboutComponent/AboutBlockTitle"
import AboutBlockSubTitle from "../../components/AboutComponent/AboutBlockSubTitle"
import AboutBlockContent from "../../components/AboutComponent/AboutBlockContent"
import SkillIcon from "../../components/AboutComponent/SkillIcon"
import { SkillIconWrapper } from "../../components/AboutComponent/SkillIcon/SkillIcon.style"
import reactIcon from "../../../content/assets/icons/react-icon.svg"
import nodeIcon from "../../../content/assets/icons/nodejs-icon.svg"
import rorIcon from "../../../content/assets/icons/ror-icon.svg"
const About = React.memo(props => {
  return (
    <Layout location={props.location} title="About Page">
      <span
        style={{
          fontSize: "2.5rem",
          fontFamily: "Montserrat,sans-serif",
          fontWeight: 900,
          marginBottom: "80px",
          display: "block",
        }}
      >
        About Me
      </span>
      <AboutBlock>
        <AboutBlockTitle>This is About Block Title</AboutBlockTitle>
        <AboutBlockContent>
          StoryHub is a blog template powered by React & Gatsby JS. It’s
          completely functional static blog template. It’s very fast, optimized
          for quick render. SEO friendly, complete markdown format supported.
          You will able to host it into anywhere like GitHub, s3, now.sh, etc.
          It’s very easy to use, it provides better performance than WordPress.
          We created reusable react components and modern mono repo
          architecture, so you can build multiple apps with common components
        </AboutBlockContent>
      </AboutBlock>
      <AboutBlock>
        <AboutBlockTitle>Skill</AboutBlockTitle>
        <AboutBlockSubTitle>Framework/Libary</AboutBlockSubTitle>
        <AboutBlockContent>
          <SkillIconWrapper>
            <SkillIcon contents={reactIcon} alt="React" skillName="ReactJS" />
            <SkillIcon contents={nodeIcon} alt="NodeJS" skillName="NodeJS" />
            <SkillIcon
              contents={rorIcon}
              alt="Ruby on Rails"
              skillName="Ruby on Rails"
            />
          </SkillIconWrapper>
        </AboutBlockContent>
      </AboutBlock>
    </Layout>
  )
})

export default About
