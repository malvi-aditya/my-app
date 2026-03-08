import SyntaxHighlighter from 'react-syntax-highlighter'

const WebHooks = () => {
  return (
    <>
      <h5>Web Hooks:</h5>
      <ul>
        <li>
          They are automated messages sent from one application to another over
          HTTP when a specific event occurs. Think of them as automated
          notifications or "reverse APIs" that allow applications to communicate
          in real time without one constantly having to ask the other for
          updates. For example, a website can use a webhook to notify a
          third-party service when a new user signs up, sending the new user's
          data to that service instantly.
          <br />→ Lets take a payment example, we have initiated a payment from
          our service, and it is interacting with a third party payment gateway
          about the status of the payment (success/failed).
          <br />
          1. One way to achieve this is polling, our service asks the gateway
          about the status. But this adds unnecessary API calls, and if we
          increase interval of polling, it is not a good UX to keep the user
          waiting, it might be the payment is done but there is still some time
          left in the interval to make the new request.
          <br />
          2. The better way is web hooks. Our service will provide an endpoint
          or url to the external gateway, like a callback (ex:
          https://xyz.com/payment-status). Now, the external gateway will call
          this endpoint once the payment is processed with some details it needs
          to send. (like a callback function, called later) Our internal service
          then receives/consumes this web hook.
          <br />
          → It is real time communication, which is event driven, and simply a
          Post REST API triggered or called on an event.
          <br />
          → For authorization, we provide a secret key to the external service
          and expect it to not share it. External sercive should then use the
          key while calling our internal service after processing is done.
          <br />
          → We need to handle error/retry scenarios, if the external tries to
          reach our internal service but fails.
          <br />
          → We need to handle verifications or acknowledge that the web hook
          request was successful.
          <br />
          Use Cases:
          <br />
          1. Notification systems: After a job is done, use web hook to notify.
          <br />
          2. Automation: CI/CD pipelines, in github, after pushing some changes,
          deployment (ex: on vercel) gets triggered, and in some time after
          deployment, the external service triggers a web hook to update github
          about the deployment status etc. Or, it triggers a call to some
          external service which lets say generates some reports about the PR.
          After the report is generated, it triggers a webhook to github so
          github can consume it and show the report on UI.
          <br />
          3. Data Synchronization: If we lets say post data to a service A, and
          there is lets say another service B which needs to be in sync with A.
          A can trigger a web hook to B with the data.
        </li>
        <li>
          Basic implementation, backend express js:
          <SyntaxHighlighter language='javascript'>
            {`

              // Just a simple Post endpoint, which will be called by the external service
              app.post('/webhook', (request, response) => {
                const payload = request.body;

                // Process payload, auth etc, or add to kafka

                response.status(200).send("Success");
              });

            `}
          </SyntaxHighlighter>
          → Some systems, use kafka etc to process the web hooks received one by
          one.
        </li>
        <li>
          Web hook vs Normal API call:
          <br />
          → Normal API Call:
          <br />
          1. Client → Server: Your system sends a request whenever you want
          information.
          <br />
          2. Pull-based: You keep polling or triggering the call when needed.
          <br />
          3. Example: Your frontend calls /getUser when a page loads. Key point:
          You initiate the call.
          <br />
          → Webhook:
          <br />
          1. Server → Your Server/Endpoint: Another system sends data to your
          URL automatically when an event happens.
          <br />
          2. Push-based: You don't ask for updates, they are pushed to you.
          <br />
          3. Example: Stripe calls your webhook /paymentSuccess whenever a
          payment is completed. Key point: They initiate the call.
          <br />→ Why they feel similar: Both involve HTTP requests—JSON
          payload, headers, etc. But the direction and who triggers it is the
          difference.
          <br />→ One-liner difference (for interview): API call is pull — you
          request data. Webhook is push — the server sends data to you when
          events occur.
        </li>
      </ul>
    </>
  )
}

export default WebHooks
