import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const ExtraHooks = () => {
  return (
    <>
      <h6>Extra Hooks, useMemo, useRef, useCallback</h6>
      <ul>
        <li>
          useMemo: Lets you cache the result between re renders. If there is a
          heavy/expensive computation which we dont want to do on every re
          render then use this hook. Pass a function as first argument, the
          result/returned value on executing the function is cached. Pass a
          dependency array, recomputing of value/calling function is done only
          when any of the dependency changes.
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              import { useState, useMemo } from "react";

              export default function App() {
                const [count, setCount] = useState(0);
                const [text, setText] = useState("");

                // Expensive calculation
                const expensiveValue = useMemo(() => {
                  console.log("Running expensive calculation...");
                  let total = 0;
                  for (let i = 0; i < 1000000000; i++) total += i; // Heavy loop
                  return total + count;
                }, [count]); // ✅ Only re-run when count changes, otherwise it will run on every input char entered

                return (
                  <div>
                    <h2>Expensive Value: {expensiveValue}</h2>

                    <button onClick={() => setCount(c => c + 1)}>Increment Count</button>

                    {/* Updating text WON'T trigger expensive calc again */}
                    <input 
                      type="text"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Type anything..."
                    />
                  </div>
                );
              }

            `}
          </SyntaxHighlighter>
        </li>
        <li>
          useCallback: Similar to useMemo but it caches the whole function
          definition instead of its result/value between re renders. Meaning the
          function is not executed, its definition is stored, we have to execute
          the function later.
        </li>
        <li>
          useRef: Reference a value that is not needed for rendering. When we
          want to store a value/persist across renders but dont want re renders.
          Updating of the value should not trigger re renders. It returns an
          object with a key "current", that can be assigned some value which we
          want to persist. Directly mutate the current value: ref.current = ....
        </li>
      </ul>
    </>
  )
}

export default ExtraHooks
