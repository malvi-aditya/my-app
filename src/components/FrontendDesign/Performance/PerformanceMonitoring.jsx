const PerformanceMonitoring = () => {
  return (
    <>
      <h5>Performance Monitoring:</h5>
      <ul>
        <li>
          There are ways by which we can monitor how our app is performing, some
          metrics which we need to quantify and measure the performance, so that
          we know if our app is good or under performing.
        </li>
        <li>
          Ways to check performance:
          <br />
          Web Vitals: Some metrics to report the performance of our app. Like we
          have pulse rate etc, vitals for humans, similarly web vitals are for
          our web/apps health and performance check.
          <br />
          - Journey of a website:
          <br />
          → Loading: Content is loaded first on opening app. Metric used:
          Largest Contentful Paint - Amount of time it took for our website to
          load most of the content, that is, enough content so that the website
          looks complete. Generally, under 2.5 seconds is good. FCP - First
          Contentful Paint, The moment we something being rendered on the UI,
          can be like 1/4th of the page. Check some visual examples to
          understand this.
          <br />
          → Interaction: User interacts with the app. Metric Used: First Input
          Delay - The delay between a user's first interaction, when the page is
          loading (clicking a link, tapping a button etc) and when the browser
          was able to begin processing that input. Generally, under 100ms is
          good. It was replaced by a newer metric, Interaction to Next Paint
          (INP): Measures a web page's responsiveness to user input, like clicks
          and taps, by timing the period from the interaction to the next visual
          update on the screen. It is not just first input delay, throughout the
          users journey we track the user inputs and any delays associated.
          Sometimes, FID will begood but INP can be poor, so INP is the better
          metric overall.
          <br />
          What is interaction? On lets say clicking something, events are fired,
          it might be some task is already going on blocking the thread, so the
          event is consumed immediately. The event is then processed, JS
          execution etc, then UI is rendered and painted. This whole is an
          interaction, and this time is tracked in INP.
          <br />→ Visual Stability: Once we start to consume the app, some weird
          things might happen, like layout shift, elements jumping etc. Metric
          used: Cumulative Layout shift - how often users experience unexpected
          layout shifts while a page is loading, which can be distracting and
          frustrating. It quantifies the visual stability of a webpage by
          calculating the combined score of all individual shifts that occur
          without user interaction, which can be caused by dynamic content like
          ads, images, or fonts loading late. This shifting pushes the content,
          and is visually disturbing if we are reading something. Generally,
          below 0.1 is good, there is a formula which calculates this.
        </li>
        <li>
          → If we are not able to measure anything, we cannot improve it. We can
          use lighthouse tab, performance tab in browsers to check these
          metrics, also many tools exists for the same, Microsoft clarity,
          sentry etc.
        </li>
        <li>
          There are two types of metrics, Browser-centric metrics measure
          technical aspects of website performance as the browser loads the
          page, while user-centric metrics measure the actual user experience
          and perceived performance.
          <br />
          1. Browser Centric Metrics: Browser related, like loading, rendering,
          related to browsers. Some metrics:
          <br />
          → Time to First Byte (TTFB) is a metric that measures the time elapsed
          between a browser requesting a web page and receiving the first byte
          of the response from the server. It includes the time for DNS lookups,
          connection and TLS handshakes, and the server's initial response. A
          faster TTFB indicates a more responsive server and network, which is
          crucial for good website performance, as it impacts subsequent metrics
          like First Contentful Paint (FCP). Server might be slow etc.
          <br />
          → Network Requests: All the requests that we make from the client, all
          the requests seen in the network tab.
          <br />
          → DNS resolution time: Translating human-readable domain names (like
          www.google.com) into machine-readable IP addresses (like
          172.217.160.142), which is essential for internet traffic routing.
          <br />
          → Connection Time: Time to complete the connection, any protocol TCP
          etc, time taken to complete the handshake.
          <br />
          → DOM Content Load: Loading of the DOM contents, HTML document has
          been completely parsed, and all deferred scripts have downloaded and
          executed.
          <br />
          → Page Load: Process of a browser displaying a web page or the event
          that signifies the page has finished loading.
          <br />
          2. User Centric Metrics: These are the metrics which are for us,
          meaning how the UX will be and the perceived performance fron the user
          POV. Sometimes, number might be saying something else, but user
          experience is not that good. Some metrics:
          <br />
          → FCP - First Contentful Paint
          <br />
          → Largest Contentful Paint (LCP)
          <br />
          → FID and INP
          <br />
          → Total Blocking time (TBT): Measures the total time a webpage is
          blocked from responding to user input during its loading process. It
          is the sum of all "long tasks" — those lasting longer than 50
          milliseconds — that occur between the First Contentful Paint and the
          Time to Interactive. A high TBT means the page feels unresponsive,
          leading to a poor user experience.
          <br />→ Cumulative Layout shift
          <br />
          Use browser centric metrics to identify technical issues, optimize
          loading processes, set performance budgets (define the amount of time,
          resources to be spent and the goal to be achieved). User centric
          metrics for positive UX, continuosly monitor (keep on monitoring) both
          metrics for improvements, and use tools like lighthouse etc.
        </li>
      </ul>
    </>
  )
}

export default PerformanceMonitoring
