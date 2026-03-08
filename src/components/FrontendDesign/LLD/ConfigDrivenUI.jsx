import SyntaxHighlighter from 'react-syntax-highlighter'

function ConfigDrivenUI () {
  return (
    <>
      <h5>Config Driven UI (Dynamic UI/ Backend Driven UI):</h5>
      <ul>
        <li>
          A design pattern where UI components are generated dynamically based
          on a configuration object rather than hardcoding JSX markup. We need
          this to make dynamic and customizable UIs.
          <br />
          Key Benefits:
          <br />
          1. Reduced Code Duplication: Reuse the same component renderer for
          multiple UI variations
          <br />
          2. Flexibility: Change UI layout/behavior without modifying component
          code
          <br />
          3. Scalability: Easily add new UI patterns by updating config
          <br />
          4. Separation of Concerns: UI structure lives in data, not logic
          <br />
          5. Server-Driven UX: Backend can control frontend UI without deploying
          new code
        </li>
        <li>
          Lets's say any e commerce website, the home page that appears for one
          person can be completely different to a home page shown to a different
          person. Not in terms of products shown, also the layout etc. Ex: We
          have a global website but want to run a campaign only in India out of
          all countries, and have to add a new section in the home page.
          <br />→ This all can be done using a config driven design. A
          config/json file will decide how the UI will look like. Generally, an
          API will return a config and then the UI renders according to the
          config. Ex: A config sent by an API about what type of elements
          (carousel etc) to render and the items in each of them. This JSON
          decides the layout of UI based on the user type.
          <br />
          <SyntaxHighlighter language='javascript'>
            {`
                [
                    {
                        carousel: [
                            item1,
                            item2...
                        ]
                    },
                    {
                        banners: [
                            item1,
                            item2...
                        ]
                    },
                    {
                        sectionElectronics: [...]
                    }
                ]
            `}
          </SyntaxHighlighter>
          → Once an UI is built, we can generate a lot of different number of
          UIs using the built components.
          <br />→ Another example, food delivery app: on changing location,
          sections, restaurants etc, change. But the underlying components (
          display restaurant card etc) remain same but just display new data
          sent by backend. (See Swiggys restaurants lists API, also sends CSS
          along with cards to show, redirection links etc)
        </li>
        <li>
          How to build config driven UIs:
          <br />
          1. We need to first research: what type of app we ae building, what UI
          layouts we want.
          <br />
          2. Design UI and backend so they are in sync. Backend should work with
          UI and vice versa, so they are in sync. Design an <b>API contract </b>
          for the same, where UI and backend devs sit and work on the contract.
        </li>
      </ul>
    </>
  )
}

export default ConfigDrivenUI
