const ServerSentEvents = () => {
  return (
    <>
      <h5>Server Sent Events:</h5>
      <ul>
        <li>
          It enables a server to push real-time updates to web clients over a
          single HTTP connection. Unlike WebSockets, which offer bidirectional
          communication, SSE is unidirectional, meaning data flows exclusively
          from the server to the client. This makes SSE well-suited for
          scenarios where clients primarily need to receive updates without
          needing to send data back to the server in real-time.
        </li>
      </ul>
    </>
  )
}

export default ServerSentEvents
