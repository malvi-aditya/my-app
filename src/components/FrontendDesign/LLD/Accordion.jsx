import SyntaxHighlighter from 'react-syntax-highlighter'

function Accordion () {
  return (
    <>
      <h5>Accordion:</h5>
      <ul>
        <li>
          Collapsible UI panels that show or hide sections of content. Each item
          has a header (toggle) and an associated panel (content). Generally, we
          keep the first panel open and rest collapsed, and on clicking another
          panel we collapse the currently open panel and then open the clicked
          panel.
          <br />→ When to use: When you need to conserve vertical space, group
          related content, or let users reveal details on demand (FAQs,
          settings, long forms, doc sections).
          <br />→ Benefits: Reduces visual clutter, Improves scannability, Lets
          users focus on one section at a time
        </li>
        <li>
          We can create a single accordion item as below, it takes title, some
          id, children/body to be rendered when open, open/close state, on click
          handler.
          <SyntaxHighlighter language='javascript'>
            {`
        
                function AccordionItem({ id, title, children, isOpen, onToggle }) {
                    return (
                        <div>
                            <button
                                id={acc-btn-id}
                                onClick={onToggle}
                            >
                                {title}
                            </button>
                            <div.   
                                hidden={!open}
                            >
                                {isOpen && children}
                            </div>
                        </div>
                    )
                }
            `}
          </SyntaxHighlighter>
          → We can iterate, lets say over our data, and render many accordions
          like these. And also write logic, in parent, in the on click handler
          so that only one accordion is open.
          <br />→ We do not maintain open/close state in the generic accordion
          item component, because then they will work independently, each
          accordion having/maintaining their own state, and we can then open all
          of them at once. Instead, maintain the state in the parent and pass
          the state for each via props, so we can build the feature where only
          one item can be opened at a time. Parent should control the items,
          child should not self control itself.
          <br />→ Parent will have a state, which stores the index of the open
          accordion. While, rendering we can pass a bool prop to child if the
          rendered child's index matches or not with the state.
          <SyntaxHighlighter language='javascript'>
            {`
                // Mock data
                const data = [
                    {
                        title: "Heading 1",
                        body: "....."
                    },
                                        {
                        title: "Heading 2",
                        body: "....."
                    },
                                        {
                        title: "Heading 3",
                        body: "....."
                    }
                ]

                function Accordion () {
                    
                    const [openIndex, setOpenIndex] = useState(0);

                    function handleClick (index) {
                        if (index == openIndex) {
                            // Already Open, so close it, all will be closed if open one is clicked again
                            setOpenIndex(null);
                        } else {
                            setOpenIndex(index);
                        }              
                    } 

                    return (
                        <div>
                            {data.map( (element, i) => (
                                    <AccordionItem 
                                        id={i} 
                                        title={element.title} 
                                        children={element.body} 
                                        isOpen={i === openIndex}
                                        onToggle={() => handleClick(i)}
                                    />
                                )
                            )}
                        </div>
                    )
                }
            `}
          </SyntaxHighlighter>
        </li>
      </ul>
    </>
  )
}

export default Accordion
