import SyntaxHighlighter from 'react-syntax-highlighter'

function Ep13 () {
  return (
    <>
      <h6>Episode 13: </h6>
      <ul>
        <li>
          There are many types if testing like Developer Testing, QA Testing
          etc.
          <br />
          → Developers can do Manual Testing: Not very efficient, if we change
          anything at one place in our app, we have to test our whole app again,
          as we know adding new code does add a chance of introducing bugs. A
          large scale app has 100s of components interacting with each other, so
          changing something at one place, even if one line, can break something
          at another place can break something at another place.
          <br />→ So, we need Automated Testing. Write code that tests our code.
          We can do <b>Unit</b> Testing, <b>Integration</b> Testing,{' '}
          <b>End-to-End</b> Testing.
        </li>
        <li>
          Types of Testing:
          <br />
          → Unit Testing: Test individual units/components in isolation, a small
          unit of the app. Testing a specific component, lets say a card
          component, we are not concerned about any other components.
          <br />
          → Integration Testing: Test how different units/components work
          together. Testing interaction between multiple components, on doing an
          action multiple components interact with each other and update the UI,
          this is where integration testing comes in. Test a flow from an
          action. Ex: Search functionality, we type in the search box, it
          updates the state, fetches data from an API, and displays the results.
          Here we are testing multiple components working together.
          <br />→ End-to-End Testing: Test the entire application flow from
          start to finish. Simulate real user scenarios, testing the complete
          app, as a user would use it. Ex: food delivery app, user opens the
          app, logs in, browses the menu, adds items to cart, checks out, makes
          payment, and receives order confirmation. Here we are testing the
          entire flow of the app. Some tools for E2E testing are Cypress,
          Selenium.
          <br />→ As a React Developer, we mainly focus on Unit Testing and
          Integration Testing, E2E testing is generally done by QA teams.
          Writing test cases should be a part of the development process.
        </li>
        <li>
          Types of libraries for Testing in React:
          <br />
          → Jest: A popular testing framework for JavaScript, developed by
          Facebook. It provides a simple and efficient way to write and run
          tests. It has built-in features like snapshot testing, mocking, and
          code coverage analysis.
          <br />→ React Testing Library:{' '}
          <a href='https://testing-library.com/docs/' target='_blank'>
            Testing-Library
          </a>{' '}
          is quite old and exists from a long time, they have testing libraries
          for many frameworks. This is a library specifically designed for
          testing React components. It is built on top of DOM testing library
          (also every other frameworks library is built on top of this). If
          using create-react-app, this comes pre-installed.
          <br />
          It focuses on testing components from the user's perspective,
          encouraging best practices for writing maintainable tests. It provides
          utilities to render components, simulate user interactions, and query
          the DOM. Also, it uses <b>Jest</b> behind the scenes.
          <br />
          Steps to install:
          <br />
          1. Install testing library:
          <br />
          <code>npm install --save-dev @testing-library/react</code>
          <br />
          2. Jest comes pre-installed with CRA, if not:
          <br />
          <code>npm install --save-dev jest</code>
          <br />
          3. Install Babel dependencies:
          <br />
          <code>
            npm install --save-dev babel-jest @babel/core @babel/preset-env
          </code>
          <br />
          4. Configure babel, Babel config (babel.config.cjs):
          <br />
          <code>
            module.exports = {'{'} presets: [['@babel/preset-env', {'{'}{' '}
            targets:
            {'{'} node: 'current' {'}'} {'}'} ], '@babel/preset-react'] {'}'} ;
          </code>
          <br />
          5. Setup Jest config (jest.config.cjs)
          <br />
          6. Install jsdom:
          <br />
          <code>npm install --save-dev jest-environment-jsdom</code>
          <br />
          7. Install testing-library/jest-dom for custom matchers
          (toBeInTheDocument etc):
          <br />
          <code>npm install --save-dev @testing-library/jest-dom</code>
          <br />
          8. Install @babel/preset-react for enabling JSX in test files:
          <br />
          <code>npm install --save-dev @babel/preset-react</code>
          <br />
          9. Update babel config to include this above preset.
        </li>
        <li>
          Quick explanation of an issue where babel config .js caused issue and
          changing extension to .cjs fixed it:
          <br />→ Our project has: "type": "module" in package.json. This means
          Node treats all .js files as ES modules, not CommonJS. But our Babel
          config was written in CommonJS syntax: module.exports = {`{ ... }`}
          This syntax is not allowed inside an ES module, so Node throws an
          error.
          <br />→ ✅ Why renaming to babel.config.cjs fixed it: Node treats:
          *.js → ES modules (because "type": "module") *.cjs → CommonJS modules
          always, no matter what So when we renamed to: babel.config.cjs Node
          said: “Okay, this is CommonJS, so module.exports is allowed.” …and
          everything worked.
        </li>
        <li>
          Our bundler (like Webpack, parcel) already has its own babel config
          and uses babel. Now, we have added extra babel config for Jest to
          understand JSX. It will get confused if we add this babel config, so
          we need to tell it to ignore this babel config for its own build
          process. For that, we add another config file (.parcelrc if parcel) to
          ignore the internal babel config and use the babel config we have
          created.
          <br />
          <b>
            Using Vite, we do not run into such issues. (Only in Webpack,
            Parcel)
          </b>
        </li>
        <li>
          jsdom: Jest runs in a Node.js environment by default, which does not
          have a DOM. jsdom is a JavaScript implementation of the DOM and HTML
          standards, which allows Jest to simulate a browser-like environment.
          This is important for testing React components, as they often rely on
          DOM APIs. Our test cases do not run in the browser, they will need an
          environment that simulates the browser environment. It is not a
          browser but like a browser, mimic browser and give its features
          (browser APIs etc).
          <br />
          To use jsdom with Jest, we need to install it:
          <br />
          <code>npm install --save-dev jest-environment-jsdom</code>
          <br />
          Then, we need to configure Jest to use jsdom as the test environment.
          This can be done in the Jest config file (jest.config.cjs)
        </li>
        <li>
          When we run jest, it will look for test files with extensions like
          .test.js, .spec.js etc. We can also configure jest to look for other
          extensions in the config file. Ex: testMatch:{' '}
          {
            '**/__tests__/**/*.?([mc])[jt]s?(x), **/?(*.)+(spec|test).?([mc])[jt]s?(x)'
          }
          The above jest regex will look for test files in __tests__ folder and
          also any files with .spec.js, .test.js, .spec.ts, .test.ts extensions.
          <br />
          We can also add a setup file that will be executed before each test
          file. This is useful for setting up global configurations or mocking
          certain functionalities.
          <br />
          __ is known as dunder (double underscore), used in many places in
          programming.
        </li>
        <li>
          How we write a simple JavaScript test case:
          <br />
          → We create a test file with .test.js extension.
          <br />
          → We write a test case using the test() or it() function provided by
          Jest. It takes two arguments: a string description of the test case
          and a callback function that contains the actual test logic.
          <br />→ Inside the callback function, we use assertions to verify the
          expected behavior of the code being tested. Jest provides various
          assertion methods like toBe(), toEqual(), toContain(), etc. Ex:
          Testing a basic sum function: sum.js:
          <SyntaxHighlighter language='javascript'>
            {`
              export const sum = (a, b) => {
                return a + b
              }
            `}
          </SyntaxHighlighter>
          sum.test.js:
          <SyntaxHighlighter language='javascript'>
            {`
              import { sum } from '../TestComponents/sum'

              test('Sum function should calculate sum of two function', () => {
                const res = sum(2, 3)

                // Assertion
                expect(res).toBe(5)
              })        
            `}
          </SyntaxHighlighter>
          → Empty test case will pass by default, like if we do not have any
          assertions or code inside the test case. But we should always have
          some assertions to verify the expected behavior.
        </li>
        <li>
          How to write a React component test case:
          <br />
          → We create a test file with .test.js extension.
          <br />
          → We import the necessary modules from React Testing Library and the
          component to be tested.
          <br />
          → We use the render() function from React Testing Library to render
          the component in a virtual DOM.
          <br />
          → We use various query methods provided by React Testing Library to
          select elements from the rendered component. Ex: getByText(),
          getByRole() etc.
          <br />
          → We simulate user interactions using fireEvent or userEvent utilities
          provided by React Testing Library.
          <br />→ We first have to render the component to the jsdom, done using
          render keyword in the test. We use assertions to verify the expected
          behavior of the component based on the user interactions. Ex:
          <SyntaxHighlighter language='javascript'>
            {`
              import { render, screen, fireEvent } from '@testing-library/react'
              import Ep13 from '../Notes/Courses/ReactCourse/Ep13'

              test('renders Ep13 component and checks for content', () => {
                render(<Ep13 />)

                // Check if a specific text is present, here we have passed a regex to match text
                const linkElement = screen.getByText(/Types of Testing:/i)
                expect(linkElement).toBeInTheDocument()


                // Check if a specific text is present, here we have passed exact text to match
                // const linkElement = screen.getByText("Types of Testing")
                // expect(linkElement).toBeInTheDocument()
              })
            `}
          </SyntaxHighlighter>
          → Lets say we have to check if a component got rendered properly,
          visually to our eyes it looks fine, like something got rendered, but
          how to check it in test case.
          <br /> → We have a method called screen ( an object coming from
          testing library ) which has multiple methods to query the DOM. We get
          access to the elements rendered onto jsdom through screen. Ex:
          getByText, getByRole etc, are some methods given by screen to perform
          some actions on elements. We can use these methods to find elements in
          the rendered component and then use assertions to verify their
          presence or content. "toBeInTheDocument" is one such assertion that
          checks if the element is present in the DOM.
          <br /> → If we do not have jsx enabled in our test file, we will get
          an error while rendering/testing the component. So, we need to have
          babel config set up properly for our test files. Installing
          @babel/preset-react and including it in our babel config will make JSX
          work in our test files. babel/preset-react transpiles the JSX in the
          test file to HTML/DOM. runtime: 'automatic' in the config, is a new
          way of using JSX without importing React in every file.
          <br />→ @testing-library/jest-dom is another library/package that
          provides custom matchers for Jest to use with the DOM. Ex:
          toBeInTheDocument() is one such matcher that comes from this library.
          It provides more readable assertions for testing DOM elements.
          <br />
          → getByRole is preferred over getByText as it is more accessible and
          simulates how users interact with the app using assistive
          technologies. Testing library have defined several roles for different
          elements, like button role for button element, heading role for h1,h2
          etc. So we can use getByRole to find elements based on their roles. To
          get a heading:
          <br />
          <SyntaxHighlighter language='javascript'>
            {`
              const heading = screen.getByRole('heading', { name: /Episode 13:/i })

              // If we have a button with text 'Submit':  
              const button = screen.getByRole('button', { name: /Submit/i })
            `}
          </SyntaxHighlighter>
          → Here, we are looking for an element with the role of 'heading' and
          the name (text content) matching 'Episode 13:'. This is more robust
          than using getByText, as it ensures we are selecting the correct
          element based on its semantic role.
          <br />
          → To get all headings in the component ( getAll... in general returns
          an array of all matching elements):
          <br />
          <SyntaxHighlighter language='javascript'>
            {`
              // Querying
              const headings = screen.getAllByRole('heading')

              console.log(headings) // This will log an array of all heading elements (React objects)
            `}
          </SyntaxHighlighter>
          → This will return an array of all elements with the role of 'heading'
          in the rendered component. getBy... will be returning a single
          element, whereas getAllBy... will return an array of all matching
          elements. If there are multiple items for a role (lets say multiple
          headings), and we use getByRole, it will throw an error as it expects
          only one element to be found.
          <br /> → These functions return React elements (the object), so we can
          use various assertions on them. The same React element which is in
          Virtual DOM and created using React.createElement(). (Basics of React)
          So, headings is a React element here. After render(), we have access
          to these elements in jsdom through screen. Use console.log to see the
          output.
        </li>
        <li>
          describe() block: It is used to group related test cases together. It
          helps in organizing tests and provides a way to structure the test
          suite. We can have multiple test cases inside a describe block. Ex:
          <SyntaxHighlighter language='javascript'>
            {`
              describe('Sum function tests', () => {

                test('Sum of positive numbers', () => {
                  // Test logic
                })

                test('Sum of negative numbers', () => {
                  // Test logic
                })
              })
            `}
          </SyntaxHighlighter>
          → Here, we have grouped two test cases related to the sum function
          inside a describe block named 'Sum function tests'. This helps in
          better organization and readability of the test suite.
          <br /> → describe blocks can also be nested to create a hierarchical
          structure for tests. Multiple describe blocks can be used to further
          organize tests into sub-groups. Ex:
          <SyntaxHighlighter language='javascript'>
            {`
              describe('Math functions', () => {

                describe('Sum function tests', () => {

                  test('Sum of positive numbers', () => {
                    // Test logic
                  })

                  test('Sum of negative numbers', () => {
                    // Test logic
                  })

                })

                describe('Multiply function tests', () => {

                  test('Multiply of positive numbers', () => {
                    // Test logic
                  })

                  test('Multiply of negative numbers', () => {
                    // Test logic
                  })

                })
              })
            `}
          </SyntaxHighlighter>
          → Here, we have a top-level describe block named 'Math functions'
          which contains two nested describe blocks for sum and multiply
          functions respectively. This creates a clear hierarchy and structure
          for the tests.
        </li>
        <li>
          it() block: It is an alias for the test() function in Jest. Both it()
          and test() can be used interchangeably to define test cases. The
          choice between using it() or test() is mostly a matter of personal
          preference or team conventions. Some developers prefer it() as it
          reads more like natural language, making the test cases more
          descriptive. Ex:
          <SyntaxHighlighter language='javascript'>
            {`
              it('should calculate sum of two numbers', () => {
                // Test logic
              })
            `}
          </SyntaxHighlighter>
          → Here, we are using it() to define a test case that checks the sum of
          two numbers. The functionality is the same as using test().
        </li>
        <li>
          In a test if we render a component which has useSelector (Redux) and
          useDispatch hooks, we will get an error as these hooks need a Redux
          store to work with. So, we need to wrap our component with a Redux
          Provider and pass the store to it. This way, the component will have
          access to the Redux store during testing. Ex:
          <SyntaxHighlighter language='javascript'>
            {`
              import { render, screen } from '@testing-library/react'
              import { Provider } from 'react-redux'
              import configureStore from 'redux-mock-store'
              import MyComponent from '../MyComponent'


              // config of our store will depend on our app's redux store structure, in a different file usually
              // Generally, we import the actual store from our app, but here we are creating a mock store for testing
              const mockStore = configureStore([])
              const store = mockStore({ /* initial state */ })

              test('renders MyComponent with Redux store', () => {
                render(
                  <Provider store={store}>
                    <MyComponent />
                  </Provider>
                )

                // Test logic
              })
            `}
          </SyntaxHighlighter>
          → Here, we are using redux-mock-store to create a mock Redux store
          with an initial state. We then wrap MyComponent with the Provider and
          pass the mock store to it during rendering. This allows MyComponent to
          use useSelector and useDispatch hooks without errors during testing.
        </li>
        <li>
          If we have used Link from react-router-dom in our component, we will
          get an error while testing as Link needs a Router context to work
          with. So, we need to wrap our component with a Router (MemoryRouter
          for testing) to provide the necessary context. Link component comes
          from react-router-dom and it is not a normal anchor tag/HTML/JSX. Ex:
          <SyntaxHighlighter language='javascript'>
            {`
              import { render, screen } from '@testing-library/react'
              import { MemoryRouter } from 'react-router-dom'
              import MyComponent from '../MyComponent'

              test('renders MyComponent with Router', () => {
                render(
                  <MemoryRouter>
                    <MyComponent />
                  </MemoryRouter>
                )

                // Test logic
              })
            `}
          </SyntaxHighlighter>
          → Here, we are wrapping MyComponent with MemoryRouter during
          rendering. This provides the necessary Router context for Link
          components to function properly during testing.
        </li>
        <li>
          Simulate a click event on a button and check if a function is called,
          fireEvent from testing library is used for simulating events:
          <SyntaxHighlighter language='javascript'>
            {`
              import { render, screen, fireEvent } from '@testing-library/react'
              import MyComponent from '../MyComponent'

              test('calls function on button click', () => {
                const mockFunction = jest.fn()

                render(<MyComponent onClick={mockFunction} />)

                const button = screen.getByRole('button', { name: /Click Me/i })
                fireEvent.click(button)

                expect(mockFunction).toHaveBeenCalledTimes(1)
              })
            `}
          </SyntaxHighlighter>
          → Here, we create a mock function using jest.fn() and pass it as a
          prop to MyComponent. We then simulate a click event on the button and
          assert that the mock function was called once.
        </li>
        <li>
          To test components that receives props, we can simply pass the
          required props when rendering the component in the test case. We mock
          our props/data. Ex:
          <SyntaxHighlighter language='javascript'>
            {`
              import { render, screen } from '@testing-library/react'
              import MyComponent from '../MyComponent'

              test('renders MyComponent with props', () => {
                const props = {
                  title: 'Test Title',
                  description: 'Test Description'
                }

                render(<MyComponent {...props} />)

                // Or depending on how props are defined in component 
                // render(<MyComponent title="Test Title" description="Test Description" />)

                const titleElement = screen.getByText(/Test Title/i)
                const descriptionElement = screen.getByText(/Test Description/i)

                expect(titleElement).toBeInTheDocument()
                expect(descriptionElement).toBeInTheDocument()
              })
            `}
          </SyntaxHighlighter>
          → Here, we define the props object with the required props and pass it
          to MyComponent during rendering. We then assert that the elements with
          the provided prop values are present in the document.
        </li>
      </ul>
    </>
  )
}

export default Ep13
