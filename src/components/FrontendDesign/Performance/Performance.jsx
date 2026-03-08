import PerformanceImportance from './PerformanceImportance'
import PerformanceMonitoring from './PerformanceMonitoring'
import PerformanceTools from './PerformanceTools'

const Performance = () => {
  return (
    <>
      <h5>Performance:</h5>
      <ul>
        <li>
          We need to understand why Performance is important and is needed, the
          techniques by which we can monitor performance and the metrics to
          quantify and measure the same. In prod envs, each user might be facing
          different things as not all devices are same, and may not work/perform
          the same as it was in our testing/local envs.
          <br />→ Performance issue can be at any level, like at server end
          where API is slow, or in the network where it is slow or any other
          network related issues, or in the browser/frontend where UI is not
          optimally getting and showing resources/assets (large assets, bundles,
          incorrect practices and utilization of framework etc). Client/Server
          side rendering.
          <br />→ We can then optimize at different places based on the issue:
          Network optimization, Asset (JS, CSS, Images) optimization, React
          (framework) optimization, Build optimization, Rendering pattern
          optimization.
        </li>
      </ul>
      <PerformanceImportance />
      <PerformanceMonitoring />
      <PerformanceTools />
    </>
  )
}

export default Performance
