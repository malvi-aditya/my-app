import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function Ep3and4and5 () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h6>Episode 3:</h6>
      <ul>
        <li>
          Creating npm scripts: In the scripts key in package.json, we can add
          scripts that we want to run, add a key value pair with the key being
          the name of script and value being the command. Ex start script:
          "start": "parcel index.html", this will "npx parcel index.html".{' '}
          <br />
          → Generally checking package.json in an existing project will help in
          understanding how to build, its commands etc. Now "npm run
          `script_name`" will execute the script. (We usually do npm run start
          as a script named start is defined).
          <br />
        </li>
        <li>
          React element (created by React.createElement) is an object with some
          properties and not same as HTML element/node. When we render this
          element on the DOM then it becomes an HTML element. This way of
          creating React elements using createElement is not developer friendly,
          easy, clumsy etc. <br />→ <b>JSX</b> was introduced to solve this
          issue, easier JS syntax to write HTML with JS. JSX and React are very
          different/separate, we can write React without JSX but it becomes very
          difficult to build large apps. Old way was to create 3 files: HTML,
          CSS, JS and build app. JSX merges all these 2 into one.
          <br />
          → Below is creating react element using core React: <br />
          React.createElement → React element (JS Object) → HTML element
          (render)
          <br />
          const heading = React.createElement("h1", {`{}`}, "Text");
        </li>
        <li>
          Writing JSX: <br />
          const jsxHeading = {`<h1> Heading</h1>`}
          <br />→ <b>Important:</b> The above is not HTML in JS, JSX is not HTML
          in JS. It is not HTML, it is JSX, both have a big difference. JSX is
          HTML (or XML) like syntax. jsxHeading is a React element (will be an
          object). The above is creating a React element using JSX. <br />
          → The above is not pure JS, it is valid though because of JSX, JS does
          not comes with JSX built inside. JS engine will not be able to
          understand this snippet of JSX so it is not completely valid JS,
          browser console will throw error on JSX snippets. JSX code/our React
          apps are transpiled (converted) then given to JS engine as now it is
          understandable by it.
          <br />→ <b>Imp:</b> Its JSX that makes our code readable by
          introducing this syntax and not React.
        </li>
        <li>
          <b>Babel</b>: Parcel/Webpack are just package managers, the{' '}
          <b>transpilation</b> of JSX is done by <b>Babel</b>. It converts JSX
          into code that React/JS can understand. The JSX we have is converted
          to React.createElement and further flow is same. Behind the scenes,
          JSX is converted to core React createElement only. (Try logging JSX
          code, it is the same object we get from createElement).
          <br />→ Babel not only converts JSX into React, old browsers don't
          understand ES6 code so Babel transpiles the ES6 code into older codes
          which the browser can understand. Babel is just a JS library doing
          just this converting job. <br /> → JSX is not HTML as in HTML we give
          class="class_name" but in JSX we have className="class_name". Also
          everything is in camel case unlike HTML where we put hyphen. <br /> →
          If JSX is spread across multiple lines then we need to wrap it in (),
          inline/single line JSX brackets() are not mandatory.
        </li>
        <li>
          <b>React Component:</b> Everything is a component in React: buttons,
          header, footer, card etc. There are two types of components: class and
          functional. Class based is the old way, functional is the latest and
          new way. <br />→ Functional component: Its just a JS function (name
          should begin with capital) which returns a piece of JSX/React element.
          ex:
          <SyntaxHighlighter language='javascript' style={docco}>
            {`const Button = () => { return ( <>...</>) }`}
          </SyntaxHighlighter>
          We render functional components by simply this syntax: {`<Button />`}{' '}
          or {`<Button></Button>`}. <br />→ Browser does not care what
          components are created, how they are nested etc. in the end everything
          is transpiled into React elements and then the HTML elements (DOM
          tree), which browser understands. <br /> → Nesting of components is
          called <b>component composition</b>. We can write any JS expression,
          variables, inside JSX using curly brakcets {`{ ..here }`}, meaning we
          can also render any functional components in it ex:
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              const parent = <> { Button() } </>

              const Button = () => { 
                return ( 
                  <>...</>
                )
              }
            `}
          </SyntaxHighlighter>
        </li>
        <li>
          Lets say we fetch some data from an API and the received data is
          executed in some JSX. Then some malicious data/code is prone to run on
          our browser, this is known as <b>Cross Site Scripting</b>. As it can
          run on browser, it can access localStorage, cookies etc.
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              const data = fetch(); // data is malicious

              <> {data} </> // somewhere data used where JS executes
            `}
          </SyntaxHighlighter>
          But JSX handles this, whatever expression, data, variables etc, is
          passed in JSX {`{ }`}, it cleans/sanitises or makes sure nothing
          malicious is executed and prevents cross site scripting.
        </li>
      </ul>
      <h6>Episode 4:</h6>
      <ul>
        <li>
          While we are building any UI or React app we should know what we are
          building, that is, the design/wireframe and then the process of
          building it. For building a food ordering app, build a design first
          (check the video) and then start building code for it. <br />
          → With the design (here food ordering app), we can now build a low
          level design of the app: basic components structure/skeleton like
          header, footer, body, components in body. <br />
          → Header will have App logo, some routes - home, about etc. <br /> →
          Body: search bar, filters, data display cards. <br /> → Footer:
          Contact info, Linkouts etc. Top level component can be App that
          contains our whole app. <br />→ Now as we are going to show a lot of
          cards showing restaurant details, we build a general card component
          and render it multiple times with different restaurant info using{' '}
          <b>props</b> and display in the grid format, making our code modular
          and reusable. <br /> → Components are just functions and we make
          functions to reuse certain piece of code, Passing props to a component
          is just passing arguments to a functions.
        </li>
        <li>
          <b>Config Driven UI</b>: Controlling the UI using a config/data that
          we get from backend. We get some data from backend and the UI is then
          driven using that. Like if we get some restaurant names in our food
          ordering app from backend, we will iterate on the list and render
          accordingly. <br />
          → According to different factors, we can receive different data from
          backend and UI will display with that data. Like if we change our
          location, we will get different restaurants etc to display in our UI.
          We dont have different UIs for different locations, lol obviously. So
          we say that our UI is driven by data/config backend data. <br />
          → We should be able to design API response JSON and understand what we
          need to drive our UI, what all data we need to drive and build the UI.
          Config driven UIs are dynamic and are more preferred. <br />
          All images used in our app will be in a cdn and we fetch it from there
          using the link. <br />
          <b>Imp:</b> <br />
          → While using Array.map() and rendering components, we should pass a
          key so that every rendered child/card/component has a unique key. This
          is because React optimizes its render cycle. Lets say, a new value is
          added in the list at the first position, ie, a new restaurant. If we
          dont have a unique key, React will re-render all the list items/cards
          as it does not know which item is new. But when we pass a key, React
          knows which is the new id so other cards wont re-render and only the
          new card is rendered. <br /> → Never use (not recommended) index of
          array (2nd param of map) as key, as the order of items might change
          hence ids can change.
        </li>
      </ul>
      <h6>Episode 5:</h6>
      <ul>
        <li>
          Everything that we do in React can be done by plain HTML, CSS, JS. But
          we use libraries like these to make our life easy, build large apps
          with lesser effort, optimizations, strong functionalities like hooks.
        </li>
        <li>
          First practice: Have multiple files, a folder structure to maintain/
          build our app. All of our source code is in src folder mainly. Make a
          separate file for every component. Generally we have a components
          folder in src to house all the components.
          <br /> → It is up to us, we can define other structures like keeping
          files feature wise, components related to one feature in one folder
          etc. Keep them anyhow, in the end they are all going to be merged
          while building, file structures are just for us, dont overthink lol.
          <br /> → Generally the file name is same as the component name with a
          capital name. Export the component then import it where it needs to be
          used.
          <br /> → Keep all the hard coded/constants, data, variables, urls etc,
          in a separate constants file and not in the normal components,
          generally we create a utils folder (data used all across the app)
          having this constants file (file name small as it is not component).
          And the constant name is also in capital case/snake ex: const URL =
          '....'
        </li>
        <li>
          Default and named exports: Default export is the normal export and the
          default export of a file. When multiple things are exported from a
          file then use named exports, without the keyword default and directly
          write export in front of the const.
          <br /> → One file can have only one default export. Named exports are
          imported by their exact names and using destructuring of object.
        </li>
        <li>
          Hooks: Lets say on clicking a button etc, we want to update something
          and display the new data. If we simply update a normal variable, (let,
          var etc) it will update the variable but still UI will not update.
          <br /> → Here we introduce hooks to achieve this. Hooks are just
          normal JS funcs. This is where useState comes in, a state variable. On
          updating this variable it triggers a re-render and our UI is updated.
          It makes a local state of the component.
        </li>
        <li>
          Reconciliation Algo (React Fiber):
          <br />
          → Lets say there is a container and it has list of children or many
          child elements, and our UI changes so that the child elements are
          filtered so they reduce in number.
          <br />
          → Virtual DOM: It is not the actual DOM tree, React creates a virtual
          DOM tree. Virtual DOM is a representation of an actual DOM. It is made
          using the React elements, the objects which we saw earlier, basically
          the nesting of these objects that we get from createElement. Virtual
          DOM is an old thing that existed long time before React, React
          developers built the algo using virtual DOM to make it fast.
          <br /> → Diff Algo: It finds out the difference between two virtual
          DOMs, the previous one and the updated one. Once the difference is
          calculated then actual updates to DOM are done. Finding out diff b/w
          two HTML elements tree is tough but diff b/w two objects (React
          elements) is fast. This efficient DOM manipulation makes React faster.
        </li>
      </ul>
    </div>
  )
}
