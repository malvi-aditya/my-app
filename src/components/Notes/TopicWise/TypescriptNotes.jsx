import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

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
        <li>
          let a: number = 10;
          <br />→ Here, we are explicitly declaring that the variable 'a' is of
          type 'number'. This means that 'a' can only hold numeric values. If we
          try to assign a value of a different type, such as a string or
          boolean, to 'a', the Typescript compiler will throw an error. ( a =
          "hello" // Error )
          <br />→ Here, let a = 10; is valid TS code where the type of 'a' is
          dynamically inferred as 'number' based on the assigned value. On
          hovering of 'a', we can see its type as number. This is called type
          inference, where Typescript automatically determines the type of a
          variable based on its initial value (10 here). If we later try to
          assign a value of a different type to 'a', the Typescript compiler
          will still throw an error. Also, if we do not assign any value during
          declaration, like let a; then its type will be inferred as 'any',
          which means it can hold values of any type.
        </li>
        <li>
          Common Types in Typescript:
          <br />
          → Types in JavaScript: number, string, boolean, object, null,
          undefined.
          <br />→ Types in Typescript: Types in JS + any, tuple, enum, unknown,
          never.
        </li>
        <li>
          tsconfig.json:
          <br />
          → It is a configuration file used to specify the root files and the
          compiler options required to compile a Typescript project. It allows
          developers to customize the behavior of the Typescript compiler
          according to their project's needs.
          <br />→ Some common options include:
          <ul>
            <li>
              "target": Specifies the ECMAScript target version (e.g., ES5,
              ES6/ES2015, ESNext). Like which version of JS our TS code will get
              transpiled to.
            </li>
            <li>
              "module": Defines the module system to be used (e.g., CommonJS,
              ES6, AMD).
            </li>
            <li>"strict": Enables all strict type-checking options.</li>
            <li>
              "outDir": Specifies the output directory for compiled JavaScript
              files, transpiled typescript code will be stored here.
            </li>
            <li>
              "rootDir": Specifies the root directory of input files, where our
              source TS/TSX code is present. Generally, our src folder.
            </li>
          </ul>
          → By configuring these options in the tsconfig.json file, developers
          can ensure consistent compilation settings across their Typescript
          project.
        </li>
        <li>
          'any' type in Typescript:
          <br />
          → The 'any' type in Typescript is a special type that allows a
          variable to hold values of any type without any type checking. When a
          variable is declared with the 'any' type, it can be assigned values of
          different types throughout its lifecycle without causing any compile-
          time errors.
          <br />→ Example: let data: any; data = 10; data = "hello"; data =
          true;
          <br />→ While the 'any' type provides flexibility, it also defeats the
          purpose of using Typescript's static typing system. Using 'any' can
          lead to potential runtime errors, as it bypasses the type safety that
          Typescript offers. It is generally recommended to avoid using 'any'
          whenever possible and instead use more specific types to ensure type
          safety and maintainability in the codebase.
        </li>
        <li>
          Array of specific type:
          <br />→ In Typescript, we can define an array that can only hold
          elements of a specific type by using the syntax: type[] or{' '}
          {'Array<type>'}.
          <br />→ Example: let numbers: number[] = [1, 2, 3, 4, 5];
          <br />→ Here, we are declaring an array called 'numbers' that can only
          hold elements of type 'number'. If we try to add an element of a
          different type, such as a string or boolean, to the 'numbers' array,
          the Typescript compiler will throw an error. ( numbers.push("hello")
          // Error). Above, type annotation is not mandatory, TS can infer it
          from the assigned values. ( let numbers = [1, 2, 3, 4, 5]; // inferred
          as number[] )
          <br />→ let numbers = []; // Here, the type of 'numbers' is inferred
          as 'any[]', which means it can hold elements of any type, something
          which we should avoid.
          <br /> → IntelliSense: When we define an array with a specific type,
          code editors can provide better IntelliSense and code completion
          features, making it easier to work with the array elements. Like, in
          forEach loop, we will get number specific methods ( toFixed,
          toExponential).
        </li>
        <li>
          Tuple in Typescript:
          <br />
          → A tuple in Typescript is a special type of array that allows us to
          define an array with a fixed number of elements, where each element
          can have a different type. Tuples are useful when we want to group
          related values together, but the types of those values are not the
          same.
          <br />→ Example: let person: [string, number] = ["Alice", 30];
          <br />→ Here, we are declaring a tuple called 'person' that can hold
          two elements: the first element is of type 'string' (representing the
          name), and the second element is of type 'number' (representing the
          age). If we try to add more elements or change the types of the
          existing elements, the Typescript compiler will throw an error. (
          person.push(true) // Error )
          <br />→ Accessing Tuple Elements: We can access the elements of a
          tuple using their index, just like with regular arrays. For example,
          person[0] will give us the name ("Alice"), and person[1] will give us
          the age (30).
          <br />→ person.push("hello") works, adds a third string element in the
          tuple, but it is not a good practice to do so, as it defeats the
          purpose of using tuples with fixed sizes and types.
        </li>
        <li>
          enums in Typescript:
          <br />
          → An enum (short for enumeration) in Typescript is a special data type
          that allows us to define a set of named constants. Enums are useful
          when we want to represent a collection of related values that have
          specific names, making the code more readable and maintainable.
          <br />→ Example:
          <SyntaxHighlighter language='html' style={docco}>
            {`
              // Using plain constants
              const RED = 0;
              const GREEN = 1;
              const BLUE = 2;

              // Better way to define color constants, it explicitly assigns Red to 0, Green to 1 and Blue to 2
              enum Color {
                Red,
                Green,
                Blue
              };
              
              // We can change the default values as well
              enum Color {
                Red = 'red',
                Green = 'green',
                Blue = 'blue'. 
              };
            `}
          </SyntaxHighlighter>
          → Here, we are declaring an enum called 'Color' with three named
          constants: 'Red', 'Green', and 'Blue'. By default, the first constant
          ('Red') is assigned the value 0, the second constant ('Green') is
          assigned the value 1, and so on. We can also explicitly assign values
          to the constants if needed.
          <br />→ Usage:
          <br />
          let myColor: Color = Color.Green;
          <br />→ Here, we are declaring a variable 'myColor' of type 'Color'
          and assigning it the value 'Color.Green'. Enums help improve code
          readability by providing meaningful names for constant values instead
          of using arbitrary numbers or strings.
        </li>
        <li>
          Types in function parameters and return types:
          <br />
          → In Typescript, we can define types for function parameters and
          return types to ensure type safety and improve code readability.
          <br />→ Example:
          <SyntaxHighlighter language='html' style={docco}>
            {`
              function add(a: number, b: number): number {
                return a + b;
              }
            `}
          </SyntaxHighlighter>
          → Here, we are declaring a function called 'add' that takes two
          parameters: 'a' and 'b', both of type 'number'. The function is also
          declared to return a value of type 'number'. If we try to call the
          function with arguments of different types or if the function tries to
          return a value of a different type, the Typescript compiler will throw
          an error. ( add("hello", 5) // Error )
          <br />→ By defining types for function parameters and return types, we
          can catch type-related errors during development, making our code more
          reliable and easier to understand.
          <br />→ To make a parameter optional, we can use the '?' symbol after
          the parameter name. ex: function greet(name: string, age?: number):
          void {` { ... }`}
          <br />→ Rather than optional, we can also provide default values to
          parameters. ex: function greet(name: string, age: number = 25): void
          {` { ... }`}. So, if age is not provided during function call, it will
          take 25 as default. But if age is provided, that value will be used,
          default value will be overridden.
        </li>
        <li>
          Objects in Typescript:
          <br />
          → In Typescript, we can define types for objects to ensure that they
          have a specific structure and contain properties of certain types.
          This helps catch errors during development and improves code
          readability.
          <br />→ Example:
          <SyntaxHighlighter language='html' style={docco}>
            {`
              type Person  = {
                name: string;
                age: number;
                isStudent: boolean;
                isAdult: (age: number) => boolean;
              }

              let student: Person = {
                name: "John",
                age: 20,
                isStudent: true,
                isAdult: function(age: number): boolean {
                  return age >= 18;
                }
              };

              // We can define types inline as well without creating a separate type/interface
              let employee: { name: string; id: number; isPermanent: boolean } = {
                name: "Alice",
                id: 101,
                isPermanent: true
              };
              // But creating separate types/interfaces is a better practice for reusability/clean code.
            `}
          </SyntaxHighlighter>
          → Here, we are defining an interface called 'Person' that specifies
          the structure of a person object. The 'Person' interface has three
          properties: 'name' of type 'string', 'age' of type 'number',
          'isStudent' of type 'boolean' and a function isAdult which follows the
          functions way of defining types. We then create an object called
          'student' of type 'Person' and assign it values for each property.
          <br />→ If we try to create an object that does not conform to the
          'Person' interface, the Typescript compiler will throw an error.
          <SyntaxHighlighter language='html' style={docco}>
            {`
              let invalidStudent: Person = { 
                name: "Jane",
                age: "twenty",
                isStudent: true
              };
              // Error
            `}
          </SyntaxHighlighter>
          → To make a property optional in an interface, we can use the '?'
          symbol after the property name. ex: name?: string;
          <br />→ To make a property read-only, we can use the 'readonly'
          keyword before the property name, so we cannot modify the property
          once defined ex: readonly id: number;
        </li>
        <li>
          Union Types in Typescript:
          <br />
          → Union types in Typescript allow us to define a variable that can
          hold values of multiple types. This is useful when we want to allow a
          variable to accept different types of values while still maintaining
          type safety.
          <br />→ Example:
          <SyntaxHighlighter language='html' style={docco}>
            {`
              let value: string | number;

              value = "Hello"; // valid
              value = 42;      // valid
              value = true;    // Error
            `}
          </SyntaxHighlighter>
          → Here, we are declaring a variable called 'value' that can hold
          either a 'string' or a 'number'. We use the '|' symbol to separate the
          different types in the union. We can assign either a string or a
          number to the 'value' variable without causing any compile-time
          errors. However, if we try to assign a value of a different type, such
          as a boolean, the Typescript compiler will throw an error.
          <br />→ Union types help improve code flexibility while still
          providing type safety, making it easier to work with variables that
          can have multiple types.
          <br />→ By using a method called 'narrowing', we can check the type of
          a union type variable at runtime and perform different operations
          based on its type. For example:
          <SyntaxHighlighter language='html' style={docco}>
            {`
              function processValue(value: string | number) {
                if (typeof value === "string") {
                  console.log("String value: " + value.toUpperCase());
                } else {
                  console.log("Number value: " + (value * 2));
                }
              }
            `}
          </SyntaxHighlighter>
          → Here, IntelliSense will provide string specific methods when we
          hover over value inside the if block and number specific methods in
          else block, as it is knows the type of value inside those blocks.
        </li>
        <li>
          Intersection Types in Typescript:
          <br />
          → Intersection types in Typescript allow us to combine multiple types
          into a single type. This is useful when we want to create a new type
          that has all the properties and methods of multiple existing types.
          <br />→ Example:
          <SyntaxHighlighter language='html' style={docco}>
            {`
              type Person = {
                name: string;
                age: number;
              }

              type Employee = {
                employeeId: number;
                department: string;
              }

              type EmployeePerson = Person & Employee;

              let employee: EmployeePerson = {
                name: "Alice",
                age: 30,
                employeeId: 101,
                department: "HR"
              };
            `}
          </SyntaxHighlighter>
          → Here, we are defining two types: 'Person' and 'Employee'. We then
          create a new type called 'EmployeePerson' using the '&' symbol to
          combine both types. The 'EmployeePerson' type has all the properties
          of both 'Person' and 'Employee'. We then create an object called
          'employee' of type 'EmployeePerson' and assign it values for each
          property from both types.
          <br />→ Intersection types help us create more complex types by
          combining existing types, making our code more flexible and reusable.
        </li>
        <li>
          Literal Types in Typescript:
          <br />
          → Literal types in Typescript allow us to define a variable that can
          only hold a specific set of values. This is useful when we want to
          restrict the possible values of a variable to a predefined set.
          <br />→ Example:
          <SyntaxHighlighter language='html' style={docco}>
            {`
              type Direction = "up" | "down" | "left" | "right";

              let move: Direction;

              move = "up";    // valid
              move = "down";  // valid
              move = "forward"; // Error
            `}
          </SyntaxHighlighter>
          → Here, we are defining a type called 'Direction' that can only hold
          one of the four string literal values: "up", "down", "left", or
          "right". We then declare a variable called 'move' of type 'Direction'.
          We can assign any of the four valid string literals to the 'move'
          variable without causing any compile-time errors. However, if we try
          to assign a value that is not part of the predefined set, such as
          "forward", the Typescript compiler will throw an error.
          <br />→ Literal types help improve code safety and readability by
          restricting the possible values of a variable to a specific set,
          making it easier to understand and maintain the code.
        </li>
        <li>
          nullable types in Typescript:
          <br />
          → In Typescript, we can define nullable types using the union type
          with 'null' or 'undefined'. This allows us to specify that a variable
          can either hold a value of a specific type or be null/undefined.
          <br />→ Example:
          <SyntaxHighlighter language='html' style={docco}>
            {`
              let name: string | null = null;
              let age: number | undefined;

              name = "John"; // valid
              age = 25;      // valid

              name = null;   // valid
              age = undefined; // valid

              name = 42;     // Error
            `}
          </SyntaxHighlighter>
          → Here, we are declaring a variable called 'name' that can hold either
          a 'string' or 'null', and a variable called 'age' that can hold either
          a 'number' or 'undefined'. We can assign valid values to these
          variables without causing any compile-time errors. However, if we try
          to assign a value of a different type, such as a number to 'name', the
          Typescript compiler will throw an error.
          <br />→ Nullable types help improve code safety by explicitly
          indicating that a variable can be null or undefined, allowing
          developers to handle such cases appropriately and avoid potential
          runtime errors.
        </li>
      </ul>
    </>
  )
}

export default TypescriptNotes
