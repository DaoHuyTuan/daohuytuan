import React from 'react'
import Layout from "../../components/layouts/default";
import Drawer from "../../components/containers/Drawer";
const About = React.memo(props => {
    return (
        <Layout>
            <span>Hi This is About</span>
            <Drawer>
                <span>hello this is modal</span>
            </Drawer>
        </Layout>
    )
})

export default About;