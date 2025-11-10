import { useEffect, useState } from 'react'
import JSNotes from '../Notes/TopicWise/JSNotes'

export default function Playground () {
  const [flag, setFlag] = useState(false)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setFlag(prev => !prev)
  //   }, 1000)
  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [])
  return flag ? <JSNotes /> : <></>
}
