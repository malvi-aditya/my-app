import { styled } from '@mui/material/styles'
import GitNotes from './GitNotes'
import InterviewNotes from './InterviewNotes'

const Content = styled('div')(() => ({
  margin: '16px 16px 16px 0px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px'
}))

export const General = () => {
  return (
    <Content>
      <GitNotes />
      <b>CORS:</b>→ Cross origin resource sharing, This is a mechanism which
      uses additional http headers to tell the browser whether a specific web
      app can share resource with another web app and both apps must have
      different origins. Apps from same origin can share resources but apps from
      different origin need to go through this CORS mechanism. By origin. we
      mean different domain, like browsers do not allow resource sharing b/w
      different domains earlier. These things were not allowed: https://efg.in
      is trying to access <br />
      1. Different domain: adc.com/api/getData <br />
      2. its subdomains: api.efg.in <br />
      3. Different ports: efg.in:5000 <br />
      4. Different protocol (http here, above https): http://efg.in
      <br />
      → Resource sharing is needed in current scale of applications, so CORS
      became a standard and we can share resources.
      <br />
      Working:
      <br />
      → Lets say origin1: A is requesting something from origin2: B. First, a
      preflight request is made before actual API call is made. Browser first
      makes this call (also called OPTIONS call), "A" will make this call and
      "B" will validate the call. If valid, "B" responds back to "A" with
      additonal headers so "A" knows it is safe and then the actual API call is
      made.
      <br />
      → One of the common header is: "Access-Control-Allow-Origin" which can
      have value: * meaning any domain can access this (public APIs). We can
      also set it to a specific domain and only requests from that domain will
      be validate in preflight. Another header: "Access-Control-Allow-Methods",
      allows only certain methods like GET, POST etc. Not all requests made by A
      go through this, simple requests (which browser automatically tags) do not
      make a preflight call, some criterias are followed to determine this
      classfication of the calls.
      <br />
      → Saying it as error is bit incorrect, as it is a web standard/mechanism
      to make web secure. To fix this using browser extensions is not a good
      practice, we should handle it from our server.
      <InterviewNotes />
    </Content>
  )
}
