const LongPolling = () => {
  return (
    <>
      <h5>Long Polling:</h5>
      <ul>
        <li>
          Here, like short polling, we do not make requests after every short
          interval. Instead, only one request is made and it returns when
          backend is done. Ex: Analogous to a restaurant, we do not frequently
          ask waiter, once an order is placed, waiter stays with the
          backend/kitchen until food is ready and then returns once done. That
          is, once data is fully prepared, then only it will be sent to us, no
          frequent requests.
        </li>
      </ul>
    </>
  )
}

export default LongPolling
