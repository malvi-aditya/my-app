import { useState } from 'react'
import { styled } from '@mui/material/styles'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Stopwatch from './Stopwatch'
import Calculator from './Calculator/Calculator'
import Virtualization from './Virtualization'

const tabConfig = [
  { id: 0, name: 'Stopwatch' },
  { id: 1, name: 'Calculator' },
  { id: 2, name: 'Virtualization' }
]

const Root = styled('div')(() => ({
  marginTop: '16px',
  marginLeft: '32px',
  display: 'flex',
  flexDirection: 'column'
}))

export default function Experiments () {
  const [tab, setTab] = useState(0)

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
      <div>
        {tab === 0 ? (
          <Stopwatch />
        ) : tab === 1 ? (
          <Calculator />
        ) : (
          <Virtualization />
        )}
      </div>
    </Root>
  )
}
