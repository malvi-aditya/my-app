function StateManagement () {
  return (
    <>
      <h5>State Management:</h5>
      <ul>
        <li>
          Our UI has mainly 2 layers: UI/Visual layer and the data layer, which
          overlap with each other. UI layer is all that we can see visually on
          the screen, and UI layer is controlled by the data layer. Any data
          which we show on the UI, is stored somewhere in a state, store etc,
          which is the data layer (also all the JS logics, algos etc is the data
          layer). These two work in sync with each other to make our UI work.
        </li>
        <li>
          Most of the bugs that arise in an UI are due to this data layer. Data
          not being stored correctly, some side effects where a state is getting
          changed unknowingly etc, several such bugs may arise. We need a state
          in our UI for <b>dynamic </b> behaviour, like if there is an inout box
          and we are typing, we need to show the typed string in UI/re-render
          and also store it in UI for further needs. Also any activity, like
          button clicks, opening/closing modals etc all of these dynamic
          behaviours.
        </li>
        <li>
          Local State:
          <br />→ Let's say we have a card component which shows an image and
          text, we need few things for it to render, like image url, title,
          description etc. So, to manage this card, we need a local state which
          stores this data and feeds it to the card component to render.
          <br />→ We need Local state because of any dynamic data in our
          component, we can have multiple card components each displaying
          different data, so we need to store this data in the local state. A
          generic card component remains same, that is, we feed different data
          to the component each time we want to render a card with new data, (
          <b>data </b> changes).
          <br />→ Scope of any local state is at the component level, we can
          access it only inside that component and not its parent or anywhere
          outside. Also, we can access it in its children components by passing
          props. Data flow is unidirectional, parent to child, child cannot send
          data to parent.
          <br />→ If siblings (children with same parent), want to share data (a
          child has a state that is needed in its sibling), then we have to lift
          the state up, that is, maintain the state in their parent so the
          parent can now pass it to both children.
        </li>
        <li>
          Props Drilling:
          <br />→ Let's say we have big app with lots of components/children one
          inside another, a big tree, where parent child, child having child and
          so on till many levels. Passing props from parent or any component to
          its children and so on, is called as props drilling. Ex: At top level
          parent, data about theme is stored, all children/whole app needs this
          data to render. We can use props to make it accessible to every
          component.
          <br />→ Issue is, if we have lot of states and components, the code
          gets very messy by passing every state to every component. Some
          components themselves might not even use many states, but their
          children need it so they have to act as a bridge and just accept and
          pass the props ahead.
          <br />→ In React, we fix this by Context. We wrap our app, with a
          Provider, which provides a value and it can be accessed through hooks
          anywhere inside the wrapped part without passing props. Context API
          still might not give us some things like debugging tools and more
          sophisticated tools to update, manage data, so we use some libraries.
        </li>
        <li>
          State Management Libraries:
          <br />
          1. Redux: A commonly used library for managing states.
          <br />
          2. Zustand: A fast, lightweight library, gaining a lot of popularity.
          <br />→ If we have local states, why do we need state management
          libraries?
          <br />→ A large scale app has hundreds and thousands of components (a
          huge component hierarchy) and most of them interact with each other,
          updates states, share data etc. A component somewhere might update
          some data, which is also used by a component present somewhere else in
          the app. Ex: On some change in body, we need to update the header too.
          <br />→ These state management libraries create a central store, or a
          single place where data is stored. It provides some functions to
          update and subscribe to the data. On subscribing, we can access and
          use that data, and on updating it, it gets updated in the central
          store and all of its subscribers will now reflect the updated data.
          <b>Small </b> apps do not need these libraries at all, only medium to
          large apps.
          <br />
          → Advantaged of these libraries:
          <br />
          1. Easy to debug: They provide with some debugging tools.
          <br />
          2. A well defined format is defined to subscribe and update the store.
          (Action and reducer in redux, an action is dispatched and reducer
          function then updates the data based on the action)
          <br />
          3. A central store: Can be accessed anywhere in the app.
          <br />
          → Some cons:
          <br />
          1. Initial learning curve is high for redux, lots of things.
          <br />
          2. Packages are bulky/consume some size in our app.
        </li>
      </ul>
    </>
  )
}

export default StateManagement
