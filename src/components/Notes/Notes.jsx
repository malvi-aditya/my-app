import { useEffect, useRef, useState } from 'react'
import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import ReactCourse from './Courses/ReactCourse/ReactCourse'
import JSNotes from './TopicWise/JSNotes'
import CSSNotes from './TopicWise/CSSNotes'

const tabConfig = [
  { id: 0, name: 'Javascript' },
  { id: 1, name: 'React Course' },
  { id: 2, name: 'CSS' }
]

const Root = styled('div')(() => ({
  marginTop: '16px',
  marginLeft: '32px',
  display: 'flex',
  flexDirection: 'column'
}))

const TabContainer = styled('div')(() => ({
  overflowY: 'auto'
}))

export default function Notes () {
  const [tab, setTab] = useState(0)
  const tabContentRef = useRef(null)

  useEffect(() => {
    adjustTabContentHeight()
    window.addEventListener('resize', adjustTabContentHeight)
    return () => window.removeEventListener('resize', adjustTabContentHeight)
  }, [tab])

  const adjustTabContentHeight = () => {
    if (!tabContentRef.current) return
    const availableHeight = window.innerHeight - tabContentRef.current.offsetTop
    tabContentRef.current.style.height = `${availableHeight}px`
  }

  return (
    <Root>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={tab}
          onChange={(_, val) => {
            setTab(val)
          }}
        >
          {tabConfig.map(obj => (
            <Tab key={obj.id} label={obj.name} />
          ))}
        </Tabs>
      </Box>
      <TabContainer ref={tabContentRef}>
        {tab === 0 ? <JSNotes /> : tab === 1 ? <ReactCourse /> : <CSSNotes />}
      </TabContainer>
    </Root>
  )
}
