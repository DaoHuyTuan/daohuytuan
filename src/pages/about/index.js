import React, { useState } from "react"
import Layout from "../../components/layout"
import AboutBlock from "../../components/AboutComponent/AboutBlock"
import AboutBlockTitle from "../../components/AboutComponent/AboutBlockTitle"
import AboutBlockSubTitle from "../../components/AboutComponent/AboutBlockSubTitle"
import AboutBlockContent from "../../components/AboutComponent/AboutBlockContent"
import WorkExpTitle from "../../components/AboutComponent/WorkExpTitle"
import {
  StrongContentStyle,
  LinkContentStyle,
} from "../../components/AboutComponent/AboutBlockContent/AboutBlockContent.style"
import SkillIcon from "../../components/AboutComponent/SkillIcon"
import { SkillIconWrapper } from "../../components/AboutComponent/SkillIcon/SkillIcon.style"
import reactIcon from "../../../content/assets/icons/react-icon.svg"
import nodeIcon from "../../../content/assets/icons/nodejs-icon.svg"
import nextjsIcon from "../../../content/assets/icons/nextjs.ico"
import reduxIcon from "../../../content/assets/icons/redux-icon.svg"
import pythonIcon from "../../../content/assets/icons/python-icon.svg"
import jsIcon from "../../../content/assets/icons/js-icon.svg"
import mysqlIcon from "../../../content/assets/icons/mysql-icon.svg"
import postgresqlIcon from "../../../content/assets/icons/postgresql-icon.svg"
import mongodbIcon from "../../../content/assets/icons/mongodb-icon.svg"
import vimIcon from "../../../content/assets/icons/vim-icon.svg"
import gitIcon from "../../../content/assets/icons/git-icon.svg"
const About = React.memo(props => {
  const [data, setData] = useState([])
  const fetching = () => {
    fetch(`http://dummy.restapiexample.com/api/v1/employees`)
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setData(resultData)
      })
  }
  console.log(data)
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
        <button onClick={fetching}>hello</button>
        <AboutBlockTitle>PERSONAL INFOMATION</AboutBlockTitle>
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
        <AboutBlockTitle>TECHNOLOGY</AboutBlockTitle>
        <AboutBlockSubTitle>Programing Language</AboutBlockSubTitle>
        <AboutBlockContent>
          <SkillIconWrapper>
            <SkillIcon contents={jsIcon} alt="JS" skillName="Javascript" />
            <SkillIcon contents={pythonIcon} alt="Python" skillName="Python" />
          </SkillIconWrapper>
        </AboutBlockContent>
        <AboutBlockSubTitle>Framework/Libary</AboutBlockSubTitle>
        <AboutBlockContent>
          <SkillIconWrapper>
            <SkillIcon contents={reactIcon} alt="React" skillName="ReactJS" />
            <SkillIcon contents={nodeIcon} alt="NodeJS" skillName="NodeJS" />
            <SkillIcon contents={nextjsIcon} alt="NextJS" skillName="NextJS" />
            <SkillIcon contents={reduxIcon} alt="Redux" skillName="Redux" />
          </SkillIconWrapper>
        </AboutBlockContent>
        <AboutBlockSubTitle>Database Management Systems:</AboutBlockSubTitle>
        <AboutBlockContent>
          <SkillIconWrapper>
            <SkillIcon contents={mysqlIcon} alt="MySQL" skillName="MySQL" />
            <SkillIcon
              contents={postgresqlIcon}
              alt="PostgreSQL"
              skillName="PostgreSQL"
            />
            <SkillIcon
              contents={mongodbIcon}
              alt="MongoDB"
              skillName="MongoDB"
            />
          </SkillIconWrapper>
        </AboutBlockContent>
        <AboutBlockSubTitle>Other Skill:</AboutBlockSubTitle>
        <AboutBlockContent>
          <SkillIconWrapper>
            <SkillIcon contents={vimIcon} alt="Vim" skillName="Vim" />
            <SkillIcon contents={gitIcon} alt="Git" skillName="Git" />
          </SkillIconWrapper>
        </AboutBlockContent>
      </AboutBlock>
      <AboutBlock>
        <AboutBlockTitle>EDUCATION</AboutBlockTitle>
        <AboutBlockContent>
          <AboutBlockSubTitle>
            FPT Polytechnic College (Viet Nam, Sai Gon)
          </AboutBlockSubTitle>
          <ul>
            <li>Learn Mobile Developer (android)</li>
            <li>Score: 6.5</li>
          </ul>
        </AboutBlockContent>
      </AboutBlock>
      <AboutBlock>
        <AboutBlockTitle>CAREER PATH</AboutBlockTitle>
        <AboutBlockContent>
          <ul>
            <li>Want become Front End Developer in 5 years</li>
            <li>Become Full Stack Web Developer in 10 year</li>
            <li>Learn about CI/CD progess</li>
            <li>Have more experience in UI/UX</li>
            <li>Improve English skill</li>
          </ul>
        </AboutBlockContent>
      </AboutBlock>
      <AboutBlock>
        <AboutBlockTitle>WORK EXPERIENCE</AboutBlockTitle>
        <AboutBlockContent mbottom="60px">
          <WorkExpTitle label="9CV9 Pte. Ltd" year="From 09/2017 to 01/2018" />
          <ul>
            <li>
              <StrongContentStyle>Introduce:</StrongContentStyle> Website 9CV9
              help student can get fastest jobs full time partime or event
              internship , we help the Company hiring can connect the student
              and hiring employees. Both Company and student can create profile
              page help them can find a new jobs or suitable employees
            </li>
            <li>
              <StrongContentStyle>Team Size: </StrongContentStyle>2 (1 BE + 1 FE
              Developer)
            </li>
            <li>
              <StrongContentStyle>Position: </StrongContentStyle>Front End
              Developer
            </li>
            <li>
              <StrongContentStyle>Responsibility: </StrongContentStyle>Design UI
              for the Front End, implement React components, Intergrate with
              RESTFull API
            </li>
            <li>
              <StrongContentStyle>Tech Stack: </StrongContentStyle>ReactJS, Ruby
              on rails, Elastic Search
            </li>
          </ul>
        </AboutBlockContent>
        <AboutBlockContent mbottom="60px">
          <WorkExpTitle label="Pyco group" year="From 04/2018 to 15/04/2019" />
          <ul>
            <li>
              <StrongContentStyle>Introduce:</StrongContentStyle> Outsourcing
              Online Advertising Products
            </li>
            <li>
              <StrongContentStyle>Team Size: </StrongContentStyle>6 (1 Tech Lead
              3 Senior Developer and 2 Junior Developer)
            </li>
            <li>
              <StrongContentStyle>Position: </StrongContentStyle>Junior Front
              End Developer
            </li>
            <li>
              <StrongContentStyle>Responsibility: </StrongContentStyle>Convert
              PSD file into HTML version from Banner HTML, video banner, Email
              Marketing...
            </li>
            <li>
              <StrongContentStyle>Tech Stack: </StrongContentStyle>HTML, CSS,
              Javascript, TweenMax (GreenSock - Javascript Libary for animation)
            </li>
          </ul>
        </AboutBlockContent>
        <AboutBlockContent>
          <WorkExpTitle
            label="Dinovative (Present)"
            year="From 23/04/2019 to Now"
          />
          <ul>
            <li>
              <StrongContentStyle>Introduce:</StrongContentStyle> Outsourcing
              Product Web/App
            </li>
            <li>
              <StrongContentStyle>Team Size: </StrongContentStyle>6 (1 Project
              Manager, 3 Front End Developer, and 2 Back End Developer)
            </li>
            <li>
              <StrongContentStyle>Position: </StrongContentStyle>Front End
              Developer
            </li>
            <li>
              <StrongContentStyle>Responsibility: </StrongContentStyle>Implement
              React Component from UI on Figma, Intergrate with RESTFull API
            </li>
            <li>
              <StrongContentStyle>Tech Stack: </StrongContentStyle>ReactJS,
              NextJS, Ruby on Rails
            </li>
          </ul>
        </AboutBlockContent>
      </AboutBlock>
      <AboutBlock>
        <AboutBlockTitle>SOCIAL NETWORK</AboutBlockTitle>

        <AboutBlockContent>
          <p>
            <StrongContentStyle>Github: </StrongContentStyle>
            <LinkContentStyle href="https://github.com/DaoHuyTuan/">
              https://github.com/DaoHuyTuan/
            </LinkContentStyle>
          </p>
          <p>
            <StrongContentStyle>Facebook: </StrongContentStyle>
            <LinkContentStyle href="https://www.facebook.com/ppdusv">
              https://www.facebook.com/ppdusv
            </LinkContentStyle>
          </p>
          <p>
            <StrongContentStyle>Twitter: </StrongContentStyle>
            <LinkContentStyle href="https://twitter.com/tuandaohuy">
              https://twitter.com/tuandaohuy
            </LinkContentStyle>
          </p>
          <p>
            <StrongContentStyle>Medium: </StrongContentStyle>
            <LinkContentStyle href="https://medium.com/@daohuytuan">
              https://medium.com/@daohuytuan
            </LinkContentStyle>
          </p>
          <p>
            <StrongContentStyle>Linkedin: </StrongContentStyle>
            <LinkContentStyle href="https://www.linkedin.com/in/daohuytuan/">
              https://www.linkedin.com/in/daohuytuan/
            </LinkContentStyle>
          </p>
          <p>
            <StrongContentStyle>Kipalog: </StrongContentStyle>
            <LinkContentStyle href="https://kipalog.com/users/DaoHuyTuan/mypage">
              https://kipalog.com/users/DaoHuyTuan/mypage
            </LinkContentStyle>
          </p>
        </AboutBlockContent>
      </AboutBlock>
    </Layout>
  )
})

export default About
