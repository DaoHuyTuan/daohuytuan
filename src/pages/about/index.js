import React from "react"
import Layout from "../../components/layout"
const About = React.memo(props => {
  return (
    <Layout location={props.location} title="frewf">
      <span>Hello this is About page</span>
    </Layout>
  )
})

export default About
