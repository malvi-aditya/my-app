import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function Ep1and2 () {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <h6>Episode 1:</h6>
        <ul>
          <li>
            VSCode: Type "html:5" and hit enter to get the basic html code
            skeleton in an html file. For react component skeleton in a jsx
            file, type "rafce".
          </li>
          <li>
            Create an html h1 element and add text:
            <SyntaxHighlighter language='javascript' style={docco}>
              {`
                const heading = document.createElement("h1"); 
                heading.innerHTML = 'Some text';
              `}
            </SyntaxHighlighter>
            appendChild(): Add a child/html element to a div:
            <SyntaxHighlighter language='javascript' style={docco}>
              {`
                const root = document.getElementById('root');
                root.appendChild(heading);
              `}
            </SyntaxHighlighter>
          </li>
          <li>
            Browser do not understand React, we have to configure our project to
            use it, it understands JS due to JS engine, browser APIs etc.
            <br />→ <b>CDN </b>(Content Delivery Network) and <b>crossorigin</b>
            ( CORS: Cross-Origin Resource Sharing): research and understand.
            <br />→ One way of using react in index.html: Get the cdn link and
            add{' '}
            <span style={{ backgroundColor: '#e89f31ff' }}>
              {`<script crossorigin src='...cdn link'></script>`}
            </span>
            .
            <br />→ Check the React object that is imported. Two files imported:
            "react" (which has core React written, check the file contents in
            the link) and "react-dom" (containing DOM operations, logic needed
            to modify the DOM). "react-dom" file is like bridge for React to
            connect to DOM, browsers with React can run anywhere: mobiles (React
            Native), React 3D etc.
          </li>
          <li>
            In Vite: You explicitly load your entry file (main.jsx) in your
            index.html:
            <SyntaxHighlighter language='javascript' style={docco}>
              {`
                <!DOCTYPE html> 
                <html lang="en"> 
                  <head>
                    <title>Aditya Malvi</title> 
                  </head> 
                  <body> 
                    <div id="root"></div> 
                    <script type="module" src="/src/main.jsx"></script> // this line
                  </body> 
                </html>
              `}
            </SyntaxHighlighter>
            → Vite’s design philosophy is simple and modern — it treats your
            HTML file as the entry point, like a normal web app.
            <br /> → It uses native ES Modules (type="module") so the browser
            can load the JS directly while Vite handles transformations behind
            the scenes. So Vite doesn’t “inject” anything; your HTML declares
            exactly what should run.
            <br /> → In Create React App (CRA) You don't see a {`<script>`} tag
            for your JS entry file (index.js) in the HTML.
            <br /> → ✅ Why: CRA's build system (Webpack) injects your React
            app's entry file (index.js) into the HTML at build time
            automatically. The index.html you see in /public is just a template
            — the actual HTML served to the browser is modified during build.
            When you run npm start, Webpack replaces this line internally:
            <SyntaxHighlighter language='javascript' style={docco}>
              {`
                <div id="root"></div>
              `}
            </SyntaxHighlighter>
            with something like:
            <SyntaxHighlighter language='javascript' style={docco}>
              {`
                <div id="root"></div>
                <script src="/static/js/bundle.js"></script>
              `}
            </SyntaxHighlighter>
            → That bundle.js contains your compiled app starting from
            src/index.js. So your CRA app does have an entry point (usually
            src/index.js), but it's not referenced directly in HTML — Webpack
            handles it.
          </li>
          <li>
            <table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Vite</th>
                  <th>Create React App (CRA)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Entry file</td>
                  <td style={{ paddingRight: '16px' }}>
                    Declared manually in HTML (
                    <code>
                      &lt;script type="module" src="/src/main.jsx"&gt;
                    </code>
                    )
                  </td>
                  <td>
                    Implicit — Webpack injects <code>index.js</code> bundle
                  </td>
                </tr>
                <tr>
                  <td>Build tool</td>
                  <td>Vite (ES Modules + Rollup)</td>
                  <td>Webpack</td>
                </tr>
                <tr>
                  <td>HTML role</td>
                  <td>Real entry point</td>
                  <td>Template for injection</td>
                </tr>
                <tr>
                  <td>Dev server</td>
                  <td>Fast, native ES module-based</td>
                  <td>Slower, Webpack-based</td>
                </tr>
                <tr>
                  <td style={{ paddingRight: '16px' }}>JSX transformation</td>
                  <td>via ESBuild (super fast)</td>
                  <td>via Babel</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            Creating element in React, in index.html file inside script tag:
            <SyntaxHighlighter language='javascript' style={docco}>
              {`
              <script> 
                const heading = React.createElement("h1", { id: 'heading' }, "Some text");
                const root = ReactDOM.createRoot(document.getElementById("root"));
                root.render(heading);          
              </script>
              `}
            </SyntaxHighlighter>
            → React needs to have a root to do all the DOM manipulation, like
            the above. "createElement" comes from core "react", "createRoot"
            comes from "react-dom". <br />
            → We get the div with id root in index.html and create root and
            render. <br />
            → "createElement" first param is tag, second is attributes object
            and third the content. The returned value (heading above) is an
            object and not node/html element.
            <br />
            → What render() does is, it takes this object and create an html
            element/node to insert it in div with id root.
            <br />
            → Most expensive operation in browser is modifying the DOM, React
            was built with the philosophy that using JS to modify DOM. In
            interactive websites (clicking button something pops up etc.) DOM
            modifying is expensive. React was built to optimize this using JS.
            <br />→ Move all the JS code inside script inside another .js file
            and inject the script.
          </li>
          <li>
            Nesting: Add multiple createElement inside each other. <br />
            <SyntaxHighlighter language='javascript' style={docco}>
              {`
              const parent = React.createElement( 
                                                  "div", 
                                                  {id: 'parent'},                                                 
                                                  React.createElement(
                                                    "div", { id: 'child' }, React.createElement("h1", {}, 'Text content')           
                                                  )
                                                );
              `}
            </SyntaxHighlighter>
            Rendered Output:
            <SyntaxHighlighter language='javascript' style={docco}>
              {`
                <div id="parent">
                  <div id="child">
                    <h1>Text content</h1>
                  </div>
                </div>
              `}
            </SyntaxHighlighter>
            Pass an array as the third argument to have multiple children.
            <SyntaxHighlighter language='javascript' style={docco}>
              {`
                const parent = React.createElement(
                                                  "div", 
                                                  {id: 'parent'}, 
                                                  [ React.createElement("div", { id: 'child1' }, 'Content1'), React.createElement("div", { id: 'child2' }, 'Content2') ]
                                                  );
              `}
            </SyntaxHighlighter>
            Rendered Output:
            <SyntaxHighlighter language='javascript' style={docco}>
              {`
                <div id="parent">
                  <div id="child1">
                    Content1
                  </div>
                  <div id="child2">
                    Content2
                  </div>
                </div>
              `}
            </SyntaxHighlighter>
          </li>
          <li>
            JSX: The above "createElement" way of nesting is not scalable to
            make large applications, too ugly code etc. This is where JSX comes
            in. Core of React is the create element way, JSX makes our tasks
            simpler.
          </li>
          <li>
            The order in which files are imported using CDN links in script tag
            should be correct, the React files should be imported first, then
            only index.js or our ReactJS logic script should be injected. <br />
            → If we already have some element in div (id="root") in the
            index.html, it will render initially but will be quickly replaced by
            the object passed in root.render(). Anything in the div id="root"
            will be replaced, elements above and below this div will be rendered
            as it is.
          </li>
          <li>
            Library vs Framework: React is a library because React can also work
            in a certain portion of a page like only the header etc. wherever
            the div with id root is, it can work independently in a small
            portion of our app. Other Frameworks require us to create an whole
            app using it and comes with lot of packages.
          </li>
        </ul>
      </div>
      <div>
        <h6>Episode 2:</h6>
        <ul>
          <li>
            Basic repo with CSS, HTML and JS files cannot be pushed to prod. Our
            project can have thousands of files, we need to do some things like
            minify, bundle, code splitting, chunking, image optimization,
            compress, remove comments etc.
          </li>
          <li>
            Create-React-App: Most courses start using this, this is already an
            ignited app, not done from scratch. We need to know what is inside
            it, what it does, behind the scenes etc.
            <br />→ It gives a skeleton which is ready to go for production. We
            can build our own create-react-app. We used React in our project but
            it itself cannot produce a fast, production ready app. Many
            packages, libraries etc. combined with React make our app faster,
            not just React.
          </li>
          <li>
            NPM: It does not stand for node package manager, it is everything
            but not node package manager, lol. It does manage packages though
            behind the scenes. Biggest package manager, big repo with all
            packages, utilities, libraries etc. Using create-react-app, npm is
            already installed and setup.
            <br />→ Use command <b>'npm init'</b> to initialize npm in
            directory. This will create the package.json file in the directory
            (configuration file for npm). It is needed for managing
            packages/dependencies, versions etc.
            <br />→ The most important dependency we need is the <b>Bundler </b>
            to minify our files etc. Webpack, Parcel are some of the bundlers
            that bundle all the files and build our app.
            <br />
            → Use command "npm install" or "npm i" to install any packages. To
            have any dependency as a development/dev add the flag -D "npm i -D
            parcel".
            <br />
            → Dev dependency: Package required during the development phase of
            the app.
            <br />
            → Normal dependency: Package needed during all times dev/prod. Look
            all the version management chars: ~ tilde, ^ caret etc.
            <br /> → <b>package-lock.json</b>: It keeps track of the exact
            version being installed and locks it. Any dependency will have a key
            "integrity" in it, which is a hash so that we have exact versions
            everywhere in dev machine, prod etc. We have the dependency tree in
            it. <br /> → <b>Node Modules:</b> It has the actual and all the code
            that is fetched from npm. Any dependency can have its own sub
            dependency and so on, these are known as transitive dependencies,
            every sub dependency is also installed and present in the
            node_modules. <br />
            → Checking in node_modules, any dependency will also have its own
            package.json. This can also be seen as a dependency tree. <br />→ We
            never push node_modules anywhere, we ignore it. Only package and
            package-lock pushed, using these both commands we can generate
            node_modules "npm i"/ "npm ci".
          </li>
          <li>
            npx parcel index.html: We execute parcel and pass the main/root
            file. This will create the build and host on localhost. <br />
            <b>npx</b>: Use this command to execute a package. <br />
          </li>
          <li>
            The previous way of adding React in our app was using the cdn links
            in script in index.html. This is not a good way, correct way is
            using npm itself. <br />
            → Using CDN links is costly operation, API call to the link to get
            the package etc. Instead we can have it already in node_modules.
            Also version control is not smooth as urls update
            <br />
            → "npm install react" and "npm install react-dom": Add react as a
            dependency. Now we have to import React in each of our files (not
            needed in newer versions). <br />→ <b>Note</b>: If we inject a JS
            file/script in index.html using script tag and the JS file has
            imports in it (import React...) then it will throw error. This is
            because it is a normal JS file and JS does not understand "import".
            Add the attribute - type: 'module', in script tag to treat it as a
            module and not plain JS file.
          </li>
          <li>
            <b>HMR</b> (Hot Module replacement): On saving file, parcel (vite
            etc.) automatically reloads the hosted page with the new changes,
            this is done by HMR. A file watching algo written in cpp tracks of
            the files to do this. <br />
            → It also caches things to speed up the build process. Image
            optimization, minification of prod build, compress, consistent
            hashing, code splitting, differential bundling, error handling,
            diagnostic, Tree Shaking is also done by it.
            <br />
            → Differential bundling: App can run on different places like
            browsers etc. By this, the app will run smoothly everywhere (old
            browsers etc.).
            <br />
            → Tree Shaking: Remove unused/ dead code for optimizing. <br />→
            Different dev and prod builds: More optimizations are done to
            produce the prod build.
          </li>
          <li>
            browserslist in package.json: Takes an array specifying the browsers
            where we want to support our app. This assures the app will
            definitely work in the specified values, it might or might not work
            in things that are not specified in the array. (Search browserslist
            to play with values)
          </li>
        </ul>
      </div>
    </div>
  )
}
