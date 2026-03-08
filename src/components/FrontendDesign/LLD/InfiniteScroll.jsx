import SyntaxHighlighter from 'react-syntax-highlighter'

function InfiniteScroll () {
  return (
    <>
      <h5>Infinite Scroll:</h5>
      <ul>
        <li>
          When we keep scrolling down and new content keeps on loading, like in
          youtube we keep scrolling down and new videos keep on loading as we
          reach the bottom.
        </li>
        <li>
          Now there are a few things in this:
          <br />
          1. We need to know that the user has reached the bottom if the page,
          that is, track the scrolling and on reaching at the bottom of the
          page, trigger an API call to get more content.
          <ul>
            <li>
              window.innerHeight: The visible viewport height, height of the UI
              in screen that is visible.
            </li>
            <li>
              document.body.scrollHeight: Total height of the page, that is,
              height of the whole document.
            </li>
            <li>
              window.scrollY: Gives how much we have scrolled in the Y axis. If
              we haven't scrolled at all and are at the top of the page, it will
              be 0, and will increase as we scroll a bit.
            </li>
          </ul>
          2. Now when the user has reached the bottom of the page:
          <br />
          window.scrollY + window.innerHeight = document.body.scrollHeight
          <br />
          This means, the amount that we have scrolled adding to the visible
          viewport height is exactly equal to ou total document height.
        </li>
        <li>
          We can add an scroll event listener, and check for this equality/or
          keep a threshold to track scrolling.
          <SyntaxHighlighter language='javascript'>
            {`
                function handleScroll () {
                    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
                        fetchData();   
                    }
                }

                useEffect(() => {
                   window.addEventListener("scroll", handleScroll); 

                   return () => {
                        window.removeEventListener("scroll", handleScroll); 
                    }
                });  
            `}
          </SyntaxHighlighter>
        </li>
        <li>
          This scroll-event approach works, but it has some real drawbacks.
          That's why <b>IntersectionObserver</b> is now the recommended pattern
          for infinite scroll.
          <br />
          Drawbacks:
          <br />
          1. Scroll events fire continuously Dozens or hundreds of times per
          second. You must throttle or debounce manually. Still not great for
          performance.
          <br />
          2. Layout thrashing scrollHeight, innerHeight, scrollY cause layout
          reads. Combining reads + writes in scroll events can trigger reflows.
          <br />
          3. Difficult with dynamic content If content height changes (e.g.,
          images load later), the logic misfires.
          <br />
          4. Cannot easily observe multiple elements, You manually compute
          heights; fragile.
          <br />
          5. Mobile browsers behave inconsistently, Chrome on Android adjusts
          viewport height when address bar hides → scroll calculations break.
        </li>
        <li>
          Instead of watching the scroll position, you watch an element —
          usually a sentinel div placed at the bottom of the content.
          <SyntaxHighlighter language='javascript'>
            {`
                //JSX 

                <>
                    <div id="list">
                        {list.map((ele, i) => <DisplayElement element={ele} /> )}
                    </div>
                    <div id="sentinel"></div>
                </>

                //JS

                const observer = new IntersectionObserver((entries) => {
                    if (entries[0].isIntersecting) {
                        fetchData(); // fetch more items
                    }
                });

                observer.observe(document.getElementById("sentinel"));
            `}
          </SyntaxHighlighter>
          Advantages:
          <br />
          1. No scroll events: Browser optimizes it internally
          <br />
          2. Very efficient: Doesn't fire excessively
          <br />
          3. Respects async layout: changes works fine with images, dynamic
          heights
          <br />
          4. No manual calculations: No scrollHeight tricks
          <br />
          5. Declarative: "When this element enters viewport → trigger"
          <br />
          6. Better: battery + performance Especially for mobile
          <SyntaxHighlighter language='javascript'>
            {`
                const observer = new IntersectionObserver(callback);

                // This callback is executed whenever one of the observed elements
                // intersects with the viewport (or a root element you set).

                // So the callback signature is:

                function callback(entries, observer) { ... }

                //Where:
                // entries → an array of IntersectionObserverEntry objects
                // observer → the observer instance you created (rarely needed)
            `}
          </SyntaxHighlighter>
          What is entries?
          <br />→ Entries is an array of intersection events since the last
          callback. Each array item describes one observed element and its
          intersection state at that moment. Even if you're observing a single
          element, the callback still receives an array. Example entries[0]
          contains:
          <SyntaxHighlighter language='javascript'>
            {`
                {
                    "target": "<div id='sentinel'>",
                    "isIntersecting": true,
                    "intersectionRatio": 1,
                    "boundingClientRect": { ... },
                    "rootBounds": { ... },
                    "time": 12345.67,
                    "intersectionRect": { ... }
                }
            `}
          </SyntaxHighlighter>
          → Why do we usually use entries[0]?
          <br />
          Because most infinite scroll setups observe only one element (a
          sentinel div at the bottom). So: entries[0].isIntersecting is simpler
          than looping over the array.
        </li>
      </ul>
    </>
  )
}

export default InfiniteScroll
