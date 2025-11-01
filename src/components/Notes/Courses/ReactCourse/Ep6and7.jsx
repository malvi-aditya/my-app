import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function Ep6and7 () {
  return (
    <>
      <h6>Episode 6:</h6>
      <ul>
        <li>
          <b>Monolith Architechture</b>: Earlier we used to have huge big
          project having backend, UI, database, authentication etc. all
          together. Change in even one part required re deploying of the whole
          project, every thing in the same repo.
        </li>
        <li>
          <b>Micro service architecture</b>: New and preferred way of building
          applications. In this, we have different services/projects for every
          thing, like a backend service, UI sevice etc, running independently,
          all services combine together to form the app.
          <br />→ Known as single responsibility principle, each and every
          sevice doing its own job. Everything in different repos, with their
          own deployment cycle etc. All these services interact with each other
          to form the app. Also with this we can write different services using
          diffferent tech stacks, UI in React, backend in Python etc.
          <br />→ All services run in their own different ports and they can be
          mapped to domain name. APIs can be mapped to /api so all APIs will be
          deployed on this endpoint like for interacting among services we can
          use that endpoints.
        </li>
        <li>
          UI interacts with the backend primarily to fetch data. One way is
          first the UI loads, we then make the API call and after getting the
          data we render the UI.
          <br />→ Second approach is as soon as page loads we immediately render
          the UI (a loading/shimmer UI), then we make an API call and after we
          get data we re-render the UI. This is the more better and common
          approach giving better UX.
          <br />→ In the first way, until we get data, our page is white or
          frozen. In second way, we render what we can and update later. React
          has fast rendering cycle, so second way is preferred as we can
          re-render as many times we want.
        </li>
        <li>
          <b>useEffect</b>: This hook takes two arguments, first is a callback
          function and second is a dependency array. useEffect is triggered when
          the component first renders. When our component executes line by line
          and we encounter an useEffect, the callback func gets registered and
          execution of JS continues further.
          <br />→ When we return the JSX, our component renders and then the
          callback func is called. So if there is a console.log() just after an
          useEffect block, it will log first and then the callback func passed
          will run. To follow the second way of rendering UI, we use useEffect,
          load/render the UI, then call API using a callback func then re-render
          the UI once we have data.
        </li>
        <li>
          CORS: Our browser blocks the calling of APIs/urls to different origin,
          we cannot call any API directly from localhost. One way of bypassing
          is to use a browser extension.
        </li>
        <li>
          We fetch the data and display it. Usually we do optional chaining
          while accessing anything in the JSON object (data?.data2?.data3), to
          prevent UI from breaking if any key/value is not present.
          <br />→ Also initially, when data is being fetched, instead of showing
          blank screen etc, we can add a loader etc. New standard practice is
          using <b>Shimmer UI</b>, instead of a spinner/loader, to show loading
          in a more better way. UI loads, show the shimmer UI, after getting
          data, then show the actual data.
          <br />→ This concept is known as <b>conditional rendering</b>, where
          we render different things based on the current scenario:
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              if(!data) {
                return <Loader />
              } else {
                <DisplayData data={data} />
              }
            `}
          </SyntaxHighlighter>
        </li>
        <li>
          Intuition behind introducing useState was to get a way for React to
          know that there is a change in some variable and so we have to
          re-render the UI with updated states. The setter function that we get
          from use state internally triggers the whole re-render logic etc.
          <br />→ When a state changes, the whole component re-renders. When a
          component re-renders, new and old JSX/virtual DOM are compared and
          only the JSX where the state is used gets updated (diff algo,
          reconciliation ).
          <br />→ Whole component re-renders but only updation happens to
          elements that have changed. Not just virtual DOM is making React
          faster, React fiber, reconciliation process and comparing/diff algo
          for two virtual DOMs - to make only updates where changes are present
          and not everything - makes it faster.
        </li>
        <li>Removing CORS plugin: check for something like corsproxy.io</li>
      </ul>
      <h6>Episode 7:</h6>
      <ul>
        <li>
          useEffect:
          <br />
          → If no dependency array is passed and only the callback func is
          passed, useEffect/callback func triggers on every render (re-render)
          of the component.
          <br />
          → If an empty dependency array passed, it triggers only on
          initial/first render and just once.
          <br />
          → When some dependencies are passed, it triggers initially (first
          render) and subsequent times when any of the dependencies change.
          <br />
        </li>
        <li>
          useState: Can only be used inside of a func and preferrably define
          them at the start of the func/component. Also never define them
          conditionally or inside for loops or any function
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              // incorrect usages
              if (...) const [a, setA] = useState(). 

              for (let i=0; i < 5; i++) {
                const [a, setA] = useState(). 
              }
            `}
          </SyntaxHighlighter>
        </li>
        <li>
          Routing:
          <br />→ Create different and multiple pages in an app using
          urls/endpoints, using the popular library React Router DOM. Create a
          routing configuration in App.js (top level of the app).
          <br />→ Use createBrowserRouter (might be different in newer versions)
          from react-router-dom and pass our config. The config is an array of
          objects with each object having a path key specifying the relative
          path ('/', '/about') and a second key called element which is the
          element/component to render for the corresponding path.
          <br />→ Once we have created this config we can use it over the app
          using RouterProvider, provide the config to the render using
          RouterProvider.
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              import ReactDOM from 'react-dom';
              import { createBrowserRouter, RouterProvider } from 'react-router-dom';

              const appRouter = createBrowserRouter([
                {
                  path: '/',
                  element: <Home />,
                  errorComponent: <Error />,
                },
                {
                  path: '/about',
                  element: <About />
                }
              ])

              const root = ReactDOM.createRoot(document.getElementById('root'));

              root.render(<RouterProvider router={appRouter}/>)
          `}
          </SyntaxHighlighter>
          → createBrowserRouter is the most preferred, there are some other too
          (check docs). Also react-router-dom has an error page on going to an
          url which is not defined.
          <br />→ Another key called 'errorElement' can be added in the object
          to display an error component on undefined paths. Also there is a hook
          called useRouteError, we can have more info about the error as it
          returns an error object (const err = useRouteError()).
        </li>
        <li>
          Children routes: Generally we want to keep our header/app bar intact
          when we switch between routes and on changing route only content of
          body should change, to achieve this we need children routes.
          <br />
          → Add a key "children" in the object, and in the component, add
          conditions or we call it pushing the children in the component
          according to the route, to render a component based on the route (see
          below).
          <br />→ We do this using "Outlet", the Outlet component will be filled
          with the child component according to the path we are on (we will not
          see outlet in HTML DOM, everything happens behind the scenes).
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              import ReactDOM from 'react-dom';
              import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

              const AppLayout = () => {
                return (
                  <div>
                    <Header />
                    <Outlet />
                  </div>
                )
              }

              const appRouter = createBrowserRouter([
                {
                  path: '/',
                  element: <Home />,
                  children: [
                    {
                      path: '/',
                      element: <MainHome />,
                    },
                    {
                      path: '/about',
                      element: <About />
                    },
                    {
                      path: '/contact',
                      element: <Contact />
                    }
                  ]
                  errorComponent: <Error />,
                },
              ])

              const root = ReactDOM.createRoot(document.getElementById('root'));

              root.render(<RouterProvider router={appRouter}/>)
          `}
          </SyntaxHighlighter>
        </li>
        <li>
          Anchor tag {`<a href=""></a>`}: We should not use this to navigate to
          different routes/pages as it reloads the whole page. Instead we should
          use Link component {`<Link to=""> </Link>`} given by react-router-dom.
          <br />→ Attribute used: "to=" instead of "href=". Internally, link
          uses anchor tag, it is kind of a wrapper on anchor tag. Browsers etc,
          don't understand link component. react-router-dom keeps a track of
          this Link.
        </li>
        <li>
          Single page apps: These apps we create using react and routers are
          known as single page apps as we do not go to any new page and also on
          switching routes we are just replacing components behind the scenes
          and not going to new page/reload etc.
          <br />→ Client side routing and server side routing: Server side
          means, let's say, we have some files index.html, about.html,
          contact.html etc. On switching routes among these, we make calls to
          fetch the new HTML and the browser reloads. On the other hand, routing
          which we do using react-router-dom is client side routing as we do
          everything in UI, switching components behind the scenes, no new calls
          are made etc.
        </li>
        <li>
          Dynamic routing: Let's say, on clicking on an item from a list of
          data, we want to redirect to a new route showing more info about it.
          We will use dynamic routing. For ex, we have a list of hotels and
          clicking on it shows more details, about the hotel, in a new route.
          <br />
          → We create a more details component which dynamically loads data
          based on the url, on clicking a list item, we push it's details in the
          url, redirect to the new route and then render the component using
          data in url (make API calls using hotel ID etc) <br />
          → Define a dynamic path like this: path: "/restaurants/:resId". By
          this, landing on any path like "/restaurants/123" or
          "/restaurants/125", we can load different data in the component.
          <br />→ useParams: Hook given by react-router-dom to read url params.
          <br />
          const {`{ resId }`} = useParams();
          <br />
          The hook returns an object with the key being the url param and value
          its value in url. In the list of cards, just wrap the container with
          Link and "to" to the desired route dynamically ("/restaurants/ +
          resId").
        </li>
        <li>
          GraphQL: Sometimes backend returns tonnes of data in a complex JSON
          structure which is difficult to deal with. This is where graphql can
          have an impact, which helps us with this over fetching, loading only
          required data using a structured query.
        </li>
      </ul>
    </>
  )
}
