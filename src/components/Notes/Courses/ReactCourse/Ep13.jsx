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
          <code>npm install --save-dev @testing-library/react</code>
          <br />
          Jest comes pre-installed with CRA, if not:
          <br />
          <code>npm install --save-dev jest</code>
          <br />
          Babel dependencies:
          <br />
          <code>
            npm install --save-dev babel-jest @babel/core @babel/preset-env
          </code>
          <br />
          Babel config (babel.config.cjs):
          <br />
          <code>
            module.exports = {'{'} presets: [['@babel/preset-env', {'{'}{' '}
            targets:
            {'{'} node: 'current' {'}'} {'}'} ], '@babel/preset-react'] {'}'} ;
          </code>
          install jsdom:
          <br />
          <code>npm install --save-dev jest-environment-jsdom</code>
          <br />
          Setup Jest config (jest.config.cjs)
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
      </ul>
    </>
  )
}

export default Ep13
