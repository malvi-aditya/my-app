import SyntaxHighlighter from 'react-syntax-highlighter'

function ComponentDesign () {
  return (
    <>
      <h5>Component Design</h5>
      <ul>
        <li>
          Everything in React is a Component. A component is a reusable piece of
          code that represents a part of the user interface. A component is just
          a JS function that returns JSX (JavaScript XML) which describes what
          the UI should look like. Our app is a large tree of components, made
          up of many smaller components. Also known as{' '}
          <b>component composition</b>.
        </li>
        <li>
          While creating a large application, before writing any code, we should
          break down the UI into smaller components. That is design the UI
          components, what components our app will have etc. This makes the code
          more manageable, modular, reusable, testable, and easier to. maintain.
          Each component is responsible for rendering a specific part of the UI
          and can be reused in different parts of the application. This approach
          promotes modularity and separation of concerns, making it easier to
          develop and maintain complex user interfaces, not needing refactoring
          the same code again and again.
          <br />→ Also, chunking, lazy loading etc, becomes very difficult if
          the components are not properly designed.
        </li>
        <li>
          Lets say we have to build an e -commerce website. We can break down
          the UI into smaller components like Header, Footer, ProductList,
          ProductItem, Cart, CheckoutForm etc. Each of these components can be
          further broken down into smaller sub -components if needed. For
          example, the Header component can have sub -components like Logo,
          NavigationMenu items, SearchBar etc. This way we can design the entire
          UI of the e -commerce website using smaller reusable components. Body
          component can have sub -components like Banner, FeaturedProducts,
          Categories, several rows with card containers etc. Example JSX
          structure:
          <SyntaxHighlighter language='javascript'>
            {`
                <App /> // We'll always a root component at the top level of the app

                App.js:

                <Header />
                <Body />
                <Footer />

                Header.js:
                
                <>
                    <Logo />
                    <NavigationMenu />
                    <SearchBar />
                </>

                Body.js:
                
                <> 
                    <Banner />
                    <FeaturedProducts />
                    <Categories />
                    <ProductList>
                    <ProductItem />
                    <ProductItem />
                    ...
                    </ProductList>
                </>
            `}
          </SyntaxHighlighter>
        </li>
        <li>
          SOLID principles help in designing components that are maintainable,
          scalable, and easy to understand.
          <ul>
            <li>
              <b>Single Responsibility Principle (SRP):</b> A component should
              have only one reason to change, meaning it should only have one
              responsibility or functionality. This makes the component easier
              to understand and maintain. Single responsibility is given to a
              component by ensuring that it only handles one specific task or
              feature. For example, a Button component should only be
              responsible for rendering a button and handling its click events,
              rather than also managing the state of a form or fetching data
              from an API.
            </li>
            <li>
              <b>Open/Closed Principle (OCP):</b> Components should be open for
              extension but closed for modification. This means that we should
              be able to add new functionality to a component without changing
              its existing code, which can be achieved through composition and
              higher-order components.
            </li>
            <li>
              <b>Liskov Substitution Principle (LSP):</b> Subtypes must be
              substitutable for their base types. In React, this means that a
              child component should be able to replace its parent component
              without affecting the correctness of the program. This can be
              achieved by ensuring that child components adhere to the same
              interface as their parent components.
            </li>
            <li>
              <b>Interface Segregation Principle (ISP):</b> Clients should not
              be forced to depend on interfaces they do not use. In React, this
              means that components should only receive the props they need and
              not be burdened with unnecessary props. This can be achieved by
              breaking down large components into smaller, more focused
              components.
            </li>
            <li>
              <b>Dependency Inversion Principle (DIP):</b> High-level modules
              should not depend on low-level modules. Both should depend on
              abstractions. In React, this means that components should depend
              on abstractions (like interfaces or types) rather than concrete
              implementations. This can be achieved through the use of context,
              hooks, and higher-order components.
            </li>
          </ul>
        </li>
        <li>
          Higher Order Components: A component which takes a component as input,
          enhances, improves or adds some features to it and then returns the
          enhanced component. Like a super component.
        </li>
      </ul>
    </>
  )
}

export default ComponentDesign
