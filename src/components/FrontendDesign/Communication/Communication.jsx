import LongPolling from './LongPolling'
import ServerSentEvents from './ServerSentEvents'
import ShortPolling from './ShortPolling'
import WebHooks from './WebHooks'
import WebSocket from './WebSocket'

export default function Communication () {
  return (
    <div>
      <h5>Communication:</h5>
      <ul>
        <li>
          It is how two entities/systems interact with each other,
          client-server, server-server etc, or how we fetch data. Real time
          Communication can be of various types and there are various ways to
          achieve it, there can be a use case where one system fires an event
          saying it's done with its job and others consume these events. Some
          ways: Short Polling, Long Polling, Web Sockets, WebHooks etc.
        </li>
        <li>
          Ex: In Whatsapp etc, we don't need to refresh to get new messages and
          also they are real time, like we don't get it after some significant
          time after sending. Multiple ways to achieve this. Also not all
          systems need real time communication, another ex: Uber cab location,
          it is fine if the location updates, let's say, every 10 seconds, we do
          not need real time communication here. (Polling is used here) (But
          messaging services cannot have this 10s delay) Payment gateways
          another place where communication is needed.
        </li>
        <li>
          Some Interview Ques:
          <br />
          - Long polling vs Web Sockets vs WebHooks
          <br />
          - Unidirectional vs Bidirectional
          <br />
          - Long Polling vs Server - Side event
          <br />
          - Security Aspects
          <br />- Protocols used (in Websockets etc)
        </li>
      </ul>
      <ShortPolling />
      <LongPolling />
      <WebSocket />
      <ServerSentEvents />
      <WebHooks />
    </div>
  )
}
