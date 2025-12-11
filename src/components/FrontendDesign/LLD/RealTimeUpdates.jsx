export default function RealTimeUpdates () {
  return (
    <>
      <h5>Real Time Updates:</h5>
      <ul>
        <li>
          Real-time updates are instant or near-instant delivery of information
          as it's generated, crucial for timely actions in areas like live
          sports scores, stock trading, chat apps, traffic alerts, and medical
          monitoring, preventing data from becoming outdated and enabling
          immediate decisions, powered by technologies like WebSockets for
          continuous server-to-client communication. They offer competitive
          advantages, better efficiency, fraud detection, and personalized
          experiences by providing immediate insights.
          <br />
          Key Aspects of Real-Time Updates:
          <br />
          → Speed: From milliseconds (trading, fraud) to seconds/minutes
          (dashboards, personalization).
          <br />
          → Relevance: Information loses value quickly if delayed.
          <br />
          → Low-Latency: Requires efficient systems for immediate processing and
          delivery.
          <br />
          → Streaming: Continuous flow of fresh data, not just batch processing.
          <br />
          Common Examples:
          <br />
          → Finance: Live stock prices, dynamic pricing.
          <br />
          → Communication: Instant messaging, collaborative documents (Google
          Docs).
          <br />
          → Navigation/Transport: Live traffic, ride-sharing updates.
          <br />
          → E-commerce: Inventory changes, auction bids.
          <br />
          → Healthcare: Patient vital sign monitoring.
          <br />
          Technology Used:
          <br />
          → WebSockets: Establishes persistent connections for two-way
          communication.
          <br />
          → APIs: Push incremental changes for inventory, bookings, etc.. API
          polling (Long and short).
          <br />
          → Server Side Events: Server pushing events so UI can push
          notifications.
          <br />
          → Databases (e.g., Firebase): Offer real-time listeners for data
          changes.
          <br />
          Benefits:
          <br />
          → Informed Decisions: Immediate insights for better strategies.
          <br />
          → Enhanced Efficiency: Rapid adjustments in operations, supply chains.
          <br />
          → Risk Management: Quick detection of threats (cyberattacks, outages).
          <br />→ Customer Satisfaction: Meets expectations for instant,
          personalized service.
        </li>
        <li>
          Polling vs Web Sockets:
          <br />
          Polling involves a client repeatedly requesting data from a server at
          set intervals, while WebSockets establish a single, persistent,
          full-duplex connection allowing for real-time, bidirectional
          communication. WebSockets are more efficient and have lower latency,
          making them better for real-time applications, while polling is
          simpler to implement and often serves as a fallback, especially for
          infrequent updates or in environments where WebSockets are blocked.
          <br />
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Polling</th>
                <th>WebSockets</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Connection</td>
                <td>Client-initiated, intermittent HTTP requests</td>
                <td>
                  A single, persistent, long-lived TCP connection initiated by
                  the client
                </td>
              </tr>
              <tr>
                <td>Communication</td>
                <td>
                  Unidirectional (client to server or server to client via the
                  next poll)
                </td>
                <td>
                  Bidirectional (client and server can send messages at any
                  time)
                </td>
              </tr>
              <tr>
                <td>Latency</td>
                <td>
                  Higher due to the overhead of establishing a new
                  request/response for each update
                </td>
                <td>
                  Lower, as data is sent instantly over the existing connection
                  without extra HTTP overhead
                </td>
              </tr>
              <tr>
                <td>Efficiency</td>
                <td>
                  Less efficient, especially with frequent updates, as it
                  requires repeated HTTP requests
                </td>
                <td>
                  More efficient, as it only uses one persistent connection with
                  minimal overhead
                </td>
              </tr>
              <tr>
                <td>Server Load</td>
                <td>
                  Can increase server load with many clients and high-frequency
                  requests
                </td>
                <td>
                  Scales better than long polling in many scenarios, though
                  managing many WebSocket connections can still be challenging
                </td>
              </tr>
              <tr>
                <td>Use Case</td>
                <td>
                  Simple scenarios, infrequent updates, or as a fallback
                  mechanism
                </td>
                <td>
                  Real-time applications like live chat, gaming, or
                  collaborative tools
                </td>
              </tr>
              <tr>
                <td>Type</td>
                <td>Near Real time (interval)</td>
                <td>Real-time</td>
              </tr>
              <tr>
                <td>Costs</td>
                <td>
                  Expensive as each time new connection is opened (involves auth
                  etc)
                </td>
                <td>Not that Expensive</td>
              </tr>
            </tbody>
          </table>
          <br />
          When to use which:
          <br />
          Use WebSockets when:
          <br />
          → You need true real-time, low-latency communication.
          <br />
          → The application requires frequent updates or two-way interaction.
          <br />
          → You are building applications like chat rooms, live sports scores,
          or collaborative editors.
          <br />
          Use polling when:
          <br />
          → Data updates are infrequent (e.g., every few seconds or minutes).
          <br />
          → Simplicity of implementation is a priority.
          <br />→ You are building a fallback for environments that do not
          support WebSockets.
        </li>
      </ul>
    </>
  )
}
