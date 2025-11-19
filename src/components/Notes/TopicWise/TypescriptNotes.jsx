function TypescriptNotes () {
  return (
    <>
      <h6>Typescript:</h6>
      <ul>
        <li>
          Typescript is a superset of JavaScript that adds static typing to the
          language, it is JavaScript with type checking. It allows developers to
          catch type-related errors during development rather than at runtime.
          Mainly created to address the shortcomings of JavaScript in
          large-scale applications.
          <br />→ It provides features like interfaces, enums, and generics,
          which help in building robust and maintainable codebases. Typescript
          code needs to be transpiled into JavaScript before it can be executed
          in a browser or Node.js environment. It has gained significant
          popularity in the web development community, especially for building
          large-scale applications.
          <br />→ Typescript is built on top of JavaScript, so any valid
          JavaScript code is also valid Typescript code. This means that
          developers can gradually adopt Typescript in their existing JavaScript
          projects without having to rewrite the entire codebase. JavaScript is
          like a subset of Typescript.
        </li>
        <li>
          Static vs Dynamic Typing:
          <br />
          → Static Typing: In statically typed languages, like Typescript, C++,
          the type of a variable is known at compile time. This means that
          developers must declare the type of a variable before using it, and
          the type cannot change throughout the program. For example, if a
          variable is declared as a string, it can only hold string values.
          <br />→ Dynamic Typing: In dynamically typed languages like
          JavaScript, the type of a variable is determined at runtime. This
          means that developers do not need to declare the type of a variable
          before using it, and the type can change throughout the program. For
          example, a variable can hold a string value at one point and then be
          reassigned to hold a number value later in the program. This
          flexibility can lead to runtime errors if a variable is used in a way
          that is not compatible with its current type.
        </li>
        <li>
          Benefits of Typescript:
          <ul>
            <li>
              Static Typing: Typescript allows developers to define types for
              variables, function parameters, and return values. This helps
              catch type-related errors during development, leading to more
              reliable code.
            </li>
            <li>
              Code completion and IntelliSense: Typescript provides enhanced
              code completion and IntelliSense features in code editors, making
              it easier for developers to write code quickly and accurately.
            </li>
            <li>
              Refactorability: With static typing, refactoring code becomes
              safer and more manageable. Developers can confidently make changes
              to the codebase without worrying about introducing type-related
              bugs.
            </li>
            <li>
              Shorthand notations: Typescript provides shorthand notations for
              defining types, making the code more concise and readable. For
              example, we can define optional parameters using the '?' symbol.
            </li>
          </ul>
          Drawbacks of Typescript:
          <ul>
            <li>
              Compilation step: Typescript code needs to be transpiled into
              JavaScript before it can be executed. This adds an extra step to
              the development process and can slow down the build time. Browswes
              do not understand Typescript natively.
            </li>
            <li>
              Discipline required: Developers need to be disciplined in defining
              types and adhering to type constraints. This can be challenging
              for teams that are not accustomed to working with statically typed
              languages. It requires a learning curve for developers who are new
              to Typescript.
            </li>

            <li>
              Overhead for small projects: For small projects or scripts, the
              benefits of Typescript may not outweigh the additional overhead of
              setting up a Typescript environment and defining types. Typescript
              is more beneficial for medium to large codebases where type safety
              and maintainability are more critical.
            </li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default TypescriptNotes
