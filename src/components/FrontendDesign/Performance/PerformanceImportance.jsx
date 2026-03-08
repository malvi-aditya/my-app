const PerformanceImportance = () => {
  return (
    <>
      <h5>Performance Importance:</h5>
      <ul>
        <li>
          We need to feel and understand why performance is important, and not
          do it just for the sake of doing it or blindly doing anything to
          improve performance. We should not skip the theory and rush towards
          code for improving performance, then we do not understand why we are
          doing this performance optimization. Basic fundamentals should be
          clear about performance, we have to clearly <b>understand </b> the
          problem first, then proceed towards a solution and code.
        </li>
        <li>
          Why Performance?
          <br />
          → User experience: Poor performing apps will impact UX. (Ex: Old
          government websites)
          <br />
          → Productivity: We can see less productivity, in case of apps where
          trading, sales etc, happen. Under performing UI's will impact this.
          <br />
          → Customer Satisfaction: Users or other businesses using the apps will
          not be satisfied by poor performing apps.
          <br />
          → Revenue/Profitability: User drop offs due to poor UX, Another ex:
          Asset optimization: large videos not being optimized can cost
          resources (excess data/bandwidth consumption, no caching etc).
          <br />
          → Operational Costs: Better performing apps will increase efficiency
          among support/operations folks and reduce costs.
          <br />
          → Competitive Advantage: If there are multiple similar apps, users
          generally stick with the best performing app, under performing apps
          will have less users.
          <br />→ Google Search Engine ranking: Better performing apps usually
          rank higher in search.
        </li>
        <li>
          Business Metrics:
          <br />
          → Session Time: Average time user spends on the app.
          <br />→ Bounce/Drop-off rate: Number of users dropping off, if high
          then we need to investigate if it is due to performance issues.
        </li>
        <li>
          Understanding the user:
          <br />→ We have to understand the user that is facing issues, it might
          be the website loads fast in our device but not in theirs. Justifying
          that the issue is on their end is not the correct way, we need to
          investigate the issue. We can analyze our user base for the following
          things:
          <br />
          1. Device: Check the device of the user, might be device related (low
          end devices). We should have a dashboard showing all the different
          device types in our user base, also screen resolutions etc. Higher
          used devices/browsers should be tested first for performance. Ex: If
          most users are from low resolution devices, then we should send high
          resolution assets to improve load performance.
          <br />
          2. Network Quality: It can be a larger user base is having lower
          bandwidth, so we need to optimise things. Or, users geographical
          location and app host site can be large bringing latency. (Less
          internet quality, latency, check cloudfare radar for some stats)
          <br />
          3. CPU & GPU: Not important in small apps, but if our app is consuming
          memory and computation (CPU/GPU), then we have to monitor it. (Games,
          editing software, heavy UI/Animation dashboards). There is some cost
          to run JS too.
        </li>
      </ul>
    </>
  )
}

export default PerformanceImportance
