import SyntaxHighlighter from 'react-syntax-highlighter'

const ShortPolling = () => {
  return (
    <>
      <h5>Short Polling:</h5>
      <ul>
        <li>
          In an app let's say, the frontend makes a poll, like a request, to
          check with the backend if the data that the frontend wants is ready
          and once ready, backend will send it to the frontend. Client
          repeatedly sends requests to a server at regular, fixed intervals to
          check for updates. The server responds to each request immediately,
          even if there is no new data.
          <br />- It is a <b>short lived</b> connection, make a request →
          immediately get response, no matter if there is an update or not. Does
          not hold the server for long time. (Also can be said, no{' '}
          <b>persistent </b> connection, it is not a long term connection).
          <br />
          - Less resource utilization, as short term, long connections usually
          utilize more resources.
          <br />
          - Cannot be scaled, if there are 1 million user and poll time is 10s,
          we might be getting around 1 million requests every 10s and most of
          them might be useless as there is no update in data.
          <br />
          Ex: Let's take an analogous example, a restaurant (we frontend,
          kitchen backend). After every short interval of time, we check with
          kitchen, through the waiter, if the food is ready or not, and once
          ready it is brought to us. Its like we poll to check, with backend, if
          the thing we want is ready or not.
        </li>
        <li>
          Use Cases:
          <br />
          - Real time info: Fetching real time data after every interval of time
          <br />
          - Notifications: If any update from backend, then send notifications
          <br />
          - Cricbuzz, Uber/food delivery locations: New Data fetched after short
          intervals.
          <br />- Check version updates, also in analytics.
        </li>
        <li>
          A basic implementation of short polling.
          <SyntaxHighlighter language='javascript'>
            {`
                async function getData () {
                    const res = await fetch('/getData');
                    const data = await res.json();
                    setData(data);

                    // ideally put in try catch block, handle errors
                }

                function shortPoll () {
                    setInterval(() => {
                        getData();
                    }, interval);

                    // Clear interval, on unmount
                }
            `}
          </SyntaxHighlighter>
        </li>
      </ul>
    </>
  )
}

export default ShortPolling
