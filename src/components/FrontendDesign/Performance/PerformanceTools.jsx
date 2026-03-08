const PerformanceTools = () => {
  return (
    <>
      <h5>Performance Tools:</h5>
      <ul>
        <li>
          There are three different tyes of persona or sources of performance
          reviews. Also, we checking performance of a single page, new page
          (different routes) have to checked differently.
          <br />
          1. Developer mode: How the app works in ourlocal setup/machine
          <br />
          2. Simulated Env: How the app works in different simulated envs, tools
          where we open our app in different simulated envs.
          <br />
          3. Real User/World data: Actual feedback or how actual users are
          feeling while using the app, no envs etc, actual UX.
        </li>
        <li>
          Real User/World data:
          <br />
          → CRUX: Chrome User Experience Report (also known as the Chrome UX
          Report, or CrUX for short) is a dataset that reflects how real-world
          Chrome users experience popular destinations on the web. CrUX is the
          official dataset of the Web Vitals program. All user-centric Core Web
          Vitals metrics are represented. CrUX data is collected from real
          browsers around the world, based on certain browser options which
          determine user eligibility. A set of dimensions and metrics are
          collected which allow site owners to determine how users experience
          their sites.
          <br />→ pagespeed.web.dev:{' '}
          <a href='https://pagespeed.web.dev/' target='_blank'>
            Pagespeed
          </a>{' '}
          Search for URL to get insights.
          <br />→{' '}
          <a href='https://app.requestmetrics.com' target='_blank'>
            {' '}
            RequestMetrics
          </a>
          : Provides a small script which we can inject in our app to monitor
          performance, provides dashboards to visualize real user data.
          <br />→{' '}
          <a href='https://clarity.microsoft.com/' target='_blank'>
            Microsoft Clarity
          </a>
          : Similar to RequestMetrics.
          <br />→{' '}
          <a href='https://newrelic.com/' target='_blank'>
            NewRelic
          </a>
          <br />→{' '}
          <a href='https://sentry.io/welcome/' target='_blank'>
            {' '}
            Sentry
          </a>{' '}
          <br />→ Google Analytics
        </li>
        <li>
          Simulate Envs:
          <br />→{' '}
          <a href='https://www.webpagetest.org/' target='_blank'>
            Web Page Test
          </a>
          : Gives detailed info about the website performance, by configuring on
          different regions, times for DNS, bas, connections, loading HTML, CSS,
          JS, images, fonts etc.
        </li>
        <li>
          Developer Tools, Inspect:
          <br />
          → Lighthouse
          <br />
          → Network Tab: Check loading of assets etc, order, queuing, priority
          etc, of loading of assets. We can change netwrok speeds, disable
          cache.
          <br />→ Performance Tab: Check several things in this tab, LCP, FCP,
          image/loading frames etc.
          <br /> Preferably test in incognito mode, so no extensions etc, hamper
          with the page. Also, pull the inspect tab out (separate from UI) so
          that the viewport is not affected. Select the device (in Lighthouse)
          mobile/desktop.
          <br />
          There is no limit to optimize stuff, we have to set a goal/limit. Also
          sometimes, metrics suggest high performance but real UX might not be
          that good.
          <br />
          Instead of fixing things one by one as they appear in the
          issues/diagnostics section, it is better to fix things fundamentally,
          core issues which can see in th app. Fixing one thing might impact
          some other thing.
        </li>
      </ul>
    </>
  )
}

export default PerformanceTools
