import React, { useRef, useState } from 'react'
import { TabContent, TabControl, TabControlLabel, Wraper } from './styles'

const Tabs = () => {
  const [content, setContent] = useState('')

  const onChange = e => {
    setContent(e.target.value)
  }

  return (
    <Wraper>
      <TabControl>
        <TabControlLabel active>Write</TabControlLabel>
        <TabControlLabel>Preview</TabControlLabel>
      </TabControl>
      <TabContent name='content' onChange={onChange}>
        {content}
      </TabContent>
      <TabActionControl></TabActionControl>
    </Wraper>
  )
}

export default Tabs
