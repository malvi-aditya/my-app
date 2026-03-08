import SyntaxHighlighter from 'react-syntax-highlighter'

const LongPolling = () => {
  return (
    <>
      <h5>Long Polling:</h5>
      <ul>
        <li>
          Here, like short polling, we do not make requests after every short
          interval. Instead, only one request is made and it returns when
          backend is done. Client makes a request to the server, but the server
          holds the connection open until it has new data to send, rather than
          responding immediately. Once the server responds, or a timeout occurs
          if there hasn't been an update since long time, the client immediately
          opens a new connection to repeat the cycle. This is more efficient
          than short polling because it minimizes the number of empty or "no
          data" responses and reduces network traffic and backend load.
          <br />
          - Single long lived connection: Connection is open until new data is
          sent or timeout occurs. Used in real time collaboration.
          <br />
          - Cons: Large number of connections can increase load on the server,
          so scaling can be an issue. Server cannot hold large number of active
          connctions.
          <br />
          Ex: Analogous to a restaurant, we do not frequently ask waiter, once
          an order is placed, waiter stays with the backend/kitchen until food
          is ready and then returns once done. That is, once data is fully
          prepared, then only it will be sent to us, no frequent requests.
        </li>
        <li>
          A basic implementation of Long Polling:
          <SyntaxHighlighter language='javascript'>
            {`
                // Backend (Express JS)

                let data = 'Initial Data'; // Some intial data, which gets modified
                const waitingClients = []; // Clients which are waiting, active conections 

                // Get endpoint
                app.get('/getData', (request, response) => {
                    if (data !== request.query.lastData) {
                        response.json({ data }); // Immediately send the new data
                    } else {
                        // Hold the request
                        waitingClients.push(response);
                    }
                });  

                // Update data endpoint
                // Some others service, let's say calls this to update data with string in query
                app.post('/updateData', (request, response) => {
                    data = request.query.data // Just re assigning to a new string
                    
                    // Send new data to all waiting clients
                    while (waitingClients.length > 0) {
                       const client = waitingClients.pop();
                       client.json({ data }); // Send new data;
                    }

                    response.send({ success: 'success' });
                });

          `}
          </SyntaxHighlighter>
          → Here, some changes are required in the backend too. Currently,
          message string is being used to compare if the last sent message to
          frontend and the data in backend has any differences, if any
          difference then new data is sent. Ideally, a message id or something
          else is used for checking differences.
          <br />→ Frontend:
          <SyntaxHighlighter language='javascript'>
            {`
                async function getData (previousData) {
                    const res = await fetch('/getData?lastData=previousData');
                    const data = await res.json();
                    setData(data);

                    // ideally put in try catch block, handle errors

                    // After getting data, immediately another request made with new data 
                    getData(data);
                }

                getData('');
            `}
          </SyntaxHighlighter>
        </li>
      </ul>
    </>
  )
}

export default LongPolling
