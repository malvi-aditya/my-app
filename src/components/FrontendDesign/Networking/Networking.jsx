import NetworkProtocols from './NetworkProtocols'
import WebWorking from './WebWorking'

export default function Networking () {
  return (
    <>
      <h5>Networking:</h5>
      <ul>
        <li>
          Connecting two or more computing devices to enable them to exchange
          data and share resources. These devices use communication protocols
          (rules) to transmit information over wired (like cables) or wireless
          (like radio waves) connections. Networks allow for functions like
          email, file sharing, and internet browsing, and range from small local
          setups to the massive global internet. Also, to build dynamic frontend
          it needs data, which we it will get by connecting with the backend.
        </li>
      </ul>
      <WebWorking />
      <NetworkProtocols />
    </>
  )
}
