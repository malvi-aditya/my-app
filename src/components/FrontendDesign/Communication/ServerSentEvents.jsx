import SyntaxHighlighter from 'react-syntax-highlighter'

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
          <br />
          → General Cycle:
          <br />
          1. Client sends a HTTP connection request to server and a connection
          is then opened.
          <br />
          2. Server continues to emit/send events to frontend which it consumes.
          <br />
          3. Connection is closed at the end.
          <br />
          → This is also a long live request, so first HTTP request where
          connection is made is the only request up until closing. Only
          difference, with long polling is this continues to emit messages to
          frontend at regular intervals whereas in long polling it sends data
          all at once and connection closed (new then established).
          <br />
          → The server emits event streams, also does framing (chunking) for
          large messages. An event typically has the data, some id (for checking
          of any missing event)
          <br />
          → Check the network tab for the SSE endpoint and on click we can see
          Event stream etc.
          <br />
          → Text has to be event stream, message format is important.
          <br />
          → Challenges:
          <br />
          1. Browser compatibility: Old browsers might not be compatible.
          <br />
          2. Connection limit: Server and browser have limit on number of
          connections.
          <br />
          3. Handle errors and mainly connection timeouts.
          <br />
          4. Background tab behavior: Let's say many tabs are open in the
          browser and the tab having SSE is inactive, so it may happen the
          connection is lost. May happen in some browsers.
          <br />
          5. Resource Utilization: Although it is lightweight, still lot of
          connections are possible increasing resource utilization.
          <br />
          6. Load Balancer, sticky connections, firewalls/proxy,
          testing/debugging: Similar challenges like web socket.
          <br />
          7. Broadcasting: Need efficient ways when we have to broadcast events
          to millions of users. (ex: send notifications)
        </li>
        <li>
          High level backend implementation in express:
          <SyntaxHighlighter language='javascript'>
            {`
              
                // Setup SSE endpoint
                app.get('/sse', (request, response) => {
                  
                  response.setHeader('Content-Type', 'text/event-stream'); // Emit event stream
                  response.setHeader('Connection', 'keep-alive'); // Keep live connection
                  response.setHeader('Cache-Control', 'no-cache'); // No caching of data

                  response.write('Test string'); // line breaks needed

                  // Any other logic goes here, DB reads etc


                  // Emit logic
                  const intervalId = setInterval(() => {
                    response.write('New data');
                  }, interval);

                  // Close request cleanup logic 
                  request.on('close', () => {
                    clearInterval(intervalId);
                  })

                });
              `}
          </SyntaxHighlighter>
          → High level frontend implementation:
          <SyntaxHighlighter language='javascript'>
            {`

              const eventSource = new EventSource('/sse'); // Browser provides EventSource function, check MDN docs

              eventSource.onMessage = (event) => {
                console.log(event.data);

                // Other logic 
              }
            `}
          </SyntaxHighlighter>
        </li>
      </ul>
    </>
  )
}

export default ServerSentEvents
