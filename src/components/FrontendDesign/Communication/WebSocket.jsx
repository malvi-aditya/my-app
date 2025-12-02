import SyntaxHighlighter from 'react-syntax-highlighter'

const WebSocket = () => {
  return (
    <>
      <h5>Web Socket:</h5>
      <ul>
        <li>
          It is a live two way/bidirectional connection between the systems,
          both the systems communicate through messages and as soon as some data
          is ready it is immediately sent by the backend. Also, the frontend can
          any time send messages to backend (live two way). It allows for
          continuous, real-time data exchange at any time, making them ideal for
          applications like live chat, online gaming, and collaborative editing.
          The connection starts with an HTTP handshake and is then upgraded to a
          WebSocket connection, which remains open until explicitly closed.
          <br />
          - Full duplex communication: Both ways we can send and receive
          messages.
          <br />
          - Lives on a single long lived TCP connection. Continuos,
          bidirectional communication.
          <br />
          Ex: Analogous to restaurant, we can continuosly order items and
          backend continuosly sends any food that is ready, does not wait for
          everything to be ready.
        </li>
        <li>
          Whole cycle:
          <br />
          - Initially client makes an HTTP upgrade request, meaning an HTTP
          request but wanting it to upgrade to socket. A 101 method to change
          the protocol is used.
          <br />
          - Server accepts this request, and a connection is opened.
          <br />
          - Bidirectional communication goes on, no new requests after this.
          <br />- Connection is explicitly closed once communication done.
        </li>
        <li>
          We can use socket.io or WebSocketServer from 'ws' library to build our
          socket in backend. It works on event names, custom which we define,
          for each type of event, an action will be defined.
          <SyntaxHighlighter language='javascript'>
            {`
                // Backend (Express JS)

                const { Server } = require('socket.io'); // Install and import socket io

                const app = express(); // express app
                const server = createServer(app); // create backend server
                const io = Server(server); // Create/ Wrap server with socket
                
                // On getting connection event/request 
                io.on('connection', (socket) => {
                    console.log('Connection Established');

                    // On getting a message event in chat, emit/broadcast.  the message to everyone.   
                    socket.on('chat message', (msg) => {
                        io.emit('chat message', msg);
                    })
                    
                    socket.on('disconnect', (msg) => {
                        console.log('User Disconnected');
                    })
                })
            `}
          </SyntaxHighlighter>
          → For frontend, in react, angular etc, we have libraries to create
          conections.
          <SyntaxHighlighter language='javascript'>
            {`
                const socket = io(); // Import from the package installed

                // Handle emitting of an event to socket
                function onInputSubmit (msg) {
                    socket.emit('chat message', msg);
                }

                const [messages, setMessages] = useState([]);

                // Client will also listen to chat events
                socket.on('chat message', (msg) => {
                    setMessages(prev => [...prev, msg]);
                });
            `}
          </SyntaxHighlighter>
          → On a high level, the above frontend and backend can create a chat
          like interface. A user can send messages, which through the socket,
          listened by backend which then emits it to every other user. For other
          users, they'll see the message once backend emits it and their
          frontedn processes/stores it.
          <br />→ In network tab, we can see a network call of socket and it
          returns a status code 101, meaning a socket connection has been
          established. In that row/entry of the call, we'll see a tab called
          messages which will have all the events that are sent in that socket.
          We can observe that no new request is made afterwards and all the
          messages can be seen in this tab.
          <br />
          → Security:
          <br />
          1. We have 'ws' protocol here, ws://.....com. "wss".
          <br />
          2. Framing: Short messages are sent directly, long messages are
          chunked
          <br />
          3. Switching protocol: 101
        </li>
        <li>
          → Use Cases:
          <br />
          - Financial Trading Dashboards: Real time trade data needed.
          <br />
          - Online gaming
          <br />
          - Real time collab: Docs etc
          <br />
          → Challenges:
          <br />
          1. Resource usage/Scaling: Will use lot of resource if there are lot
          of connections.
          <br />
          2. Connection limits: There limits to the number connections that can
          be made.
          <br />
          3. Sticky sessions: We have to manage how it will work with load
          balancers. Balancers feature that directs all requests from a specific
          client to the same server for the duration of their session.
          <br />
          4. Authentication: Manage auth as not all connections might be secure.
          <br />
          5. Firewall/Proxy: Some firewalls do not allow socket conections, we
          have to manage this.
          <br />
          6. Testing/Debugging/Error Handling: In real world apps, this can be
          challenging.
          <br />
          7. Backward Compatibility: If a connection is down then we might have
          to use other methods to maintain real time communication.
          <br />
          8. Resource cleanup: After closing connections, cleanup of relevant
          things on servers is needed, else we'll face resource issues.
        </li>
      </ul>
    </>
  )
}

export default WebSocket
