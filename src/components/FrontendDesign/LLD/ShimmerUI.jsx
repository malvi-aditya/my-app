import SyntaxHighlighter from 'react-syntax-highlighter'

function ShimmerUI () {
  return (
    <>
      <h5>Shimmer UI:</h5>
      <ul>
        <li>
          A new modern way to show loading state instead of an old standard way
          of showing a single circular loader in a complete white screen. It is
          to improve this UX and we therefore show dummy elements or cards on
          the UI until data is loaded. Ex; On youtube, for a fraction of time,
          dummy grey color rectangular cards are shown until data is loaded
          (until actual image/thumbnail of the video is loaded, Shimmer UI is in
          the same grid structure/layout like the videos will be shown)
          <br />→ If we have just one circular loader and rest a complete white
          screen, there are high chances users might drop off, poor UX. Loading
          a dummy layout is much better, lesser drop rates.
        </li>
        <li>
          Create a new Shimmer.js file/component when adding shimmer to
          something. In a youtube like example, if we are displaying a lot of
          cards, we can take the card layout div and replace the contents of the
          card with a loading state for the corresponding divs. Ex:
          <SyntaxHighlighter language='javascript'>
            {`
                // Actual Card component after getting data: Card.js

                export default function Card(props) {
                    const { imageUrl, title } = props;

                    return (
                        <div className="card">
                            <img src={imageUrl} alt="img" style={{ width: 64px, height: 64px }} />
                            <p>{title}</p>
                        </div>
                    )
                };

                // Shimmer.js, shown during loading

                export default function Shimmer() {. 

                    return (
                        <div className="card" >
                            <div style={{ width: 64px, height: 64px, backgroundColor: grey }} />    
                        </div>
                    )
                };
            `}
          </SyntaxHighlighter>
        </li>
      </ul>
    </>
  )
}

export default ShimmerUI
