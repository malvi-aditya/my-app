import { useEffect, useRef, useState } from 'react'
import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import LLD from './LLD/LLD'

const tabConfig = [{ id: 0, name: 'LLD' }]

const Root = styled('div')(() => ({
  marginTop: '16px',
  marginLeft: '32px',
  display: 'flex',
  flexDirection: 'column'
}))

const TabContainer = styled('div')(() => ({
  overflowY: 'auto',
  marginTop: '16px'
}))

export default function FrontendDesign () {
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
        {tab === 0 ? <LLD /> : <></>}
      </TabContainer>
    </Root>
  )
}
