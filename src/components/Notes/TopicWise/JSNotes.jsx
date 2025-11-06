import { styled } from '@mui/material/styles'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Content = styled('div')(() => ({
  margin: '16px 16px 16px 0px'
}))

export default function JSNotes () {
  return (
    <Content>
      <ul>
        <li>
          Javascript Basics:
          <ul>
            <li>
              Javascript runs in an execution context (can be seen like a big
              box), which has two parts.
              <br />
              1. Variable environment (Memory component): Has variables and
              function definitions stored. ( a: 5, funcA: {
                '{...//definition}'
              }{' '}
              ).
              <br />
              2. Thread of execution (Code component): Where code is executed
              line by line.
              <br />→ Global execution context created first, execution happens
              in phases. First phase is Memory allocation (creation), JS skims
              through all lines of code and in variable env it creates mapping
              of all funcs and variables (key-value pairs, key being
              variable/func name). Variables have value "undefined" ( a:
              undefined ) and for functions, directly the code (function
              definition) is copied and stored as value ( funcA:{' '}
              {'{ console.log(a) }'} )
              <br />
              → The second, Execution phase, variables (in env) will be replaced
              by actual assigned/calculated value. When a function is invoked,
              new execution context, similar to our global context (same 2
              components, var env and thread of execution, and same phase flow),
              is created inside our global context. When "return" keyword is
              encountered in the function, it tells the function to return the
              control of the program where the function was invoked; back to the
              execution context. Returned value then replaced with "undefined"
              in the mapping.
              <br />
              var a = function() {'{ ... }'} ; a: undefined → a: returnedVal
              <br />
              New execution context created by function is now deleted, also
              global one after whole execution done.
              <br />→ JS has its call stack to manage all these execution
              contexts, at the bottom will be our global execution context.
              Subsequent contexts created will pushed/popped when
              created/deleted. Control goes back to context on top of stack.
              Stack maintains order of execution of execution contexts. (Call
              stack can be seen in our inspect tools), after global context is
              popped when whole code execution is done, then the call stack is
              finally empty.
            </li>
            <li>
              It is synchronous, single threaded language. Single threaded: One
              line/command executed at a time. Synchronous: Process in a
              specific order, go to the next line when current done.
            </li>
            <li>
              <b>Hoisting</b>: Variable and function declarations are always
              moved to top of the code, so if a function is invoked before it is
              defined it still works (same for variables). Creation of execution
              context can explain this.
              <br />→ If a function is logged (without invoking) before its
              definition, function definition is shown, and "undefined" is
              logged for variables, explained by execution context memory
              creation (1st phase).
              <SyntaxHighlighter language='javascript' style={docco}>
                {`
                  function x() {
                    console.log(a); // prints "undefined"
                    var a = 7;

                    console.log(y); // prints definition of y

                    function y() {
                      console.log(a);
                    }
                  }
                `}
              </SyntaxHighlighter>
              → If a variable is not defined at all anywhere, and we try to use
              it, then we get "Reference error: not defined" as the variable
              does not exist in the global context at all (no memory allocated
              for it).
              <br />
              → It needs to be defined atleast once anywhere in the code,
              difference between "undefined" and not defined is "undefined" is a
              special value/placeholder given to any variable initially (for
              time being, until it is assigned to something else, any value)
              when it is added in memory/context. It takes space in memory and
              is not empty.
              <br />→ <b>Imp:</b> If a function is defined as an arrow function,
              then it behaves like a variable and will have value "undefined"
              during the memory allocation phase. It needs to be defined using
              the "function" keyword to be available (its definition copied) and
              stored in the context. Also this acts like a variable: var a =
              function(){'{...}'}
            </li>
            <li>
              Loosely/Weakly typed language, variables can hold any type. Not a
              good practice to assign a variables value to "undefined" as it is
              a kind of special placeholder to say a variable was never defined
              through the code.
            </li>
          </ul>
        </li>
        <li>
          Javascript Functions: <br />
          → When function invoked, a new execution context is created. Variables
          in the new context will be independent of variables of same name in
          global context. Control of execution will be in our current context
          and JS will look for variable in local memory. When function execution
          is done, context is popped from the call stack and control returns
          back to place where func was invoked.
          <br />→ window & this keywords: These global objects are always
          created at the global level even if JS file is empty. Wherever JS
          engine exists and JS runs, global object is created (object name can
          be different when JS is running elsewhere like server etc, for
          browsers its name is mainly: window). At the global level, this ===
          window prints "true" meaning both are same. Any variable or function
          created in the global context will have mapping in window object as
          well, variables declared inside a function will not be in the window
          object.
        </li>
        <li>
          <b>Scope Chain</b>: <br />→ Whenever a execution context is created,
          lexical env is created,
          <b> lexical env is local memory + lexical env of parent</b>. (lexical:
          hierarchy/sequence ) ex:
          <br />
          function a() {'{ function c() {...} }'}
          <br />
          → function c is lexically inside function a and a is lexically inside
          the global scope. (location where the code is physically present). In
          the memory part of the context, there is reference to its lexical
          parent (env/memory). Global context points to null.
          <br />→ This linking/referencing chain of every env to its parent is
          scope chain. If JS engine does not find a variable etc, in the local
          memory then it goes to its lexical parent memory/next level of scope
          chain and so on.
        </li>
        <li>
          <b>Let & const</b>: <br />
          → Both are hoisted but in a different way than "var". They are also
          allocated memory but in a different inaccesible memory space and not
          in the global object(can see in Scope → Script section in inspect),
          cannot be accessed until a value is put into them (will not exist in
          the window object also at the global level).
          <br />→ <b>Temporal dead zone</b>: It is the time between when
          let/const was hoisted and till it is initialised with some value. 1st
          phase when JS skims and allocates memory, let/const are in a different
          inaccessible memory aka temporal dead zone. When code is executed and
          some value is assigned to the variable then they are out of the zone.
          Trying to access variable in this zone throws reference error
          (Uncaught ReferenceError: Cannot access 'var_name' before
          initialization) though they are hoisted and allocated memory.
          <br />
          → Redeclarations of let variables not allowed → Syntax error (ex: let
          a = 10; let a = 100; or let a=10; var a = 10;).
          <br />
          In "const", initialising inline is necessary unlike "let" (ex: let a;
          a = 10 → allowed but const a; a=10; → syntax error, const a=10; → only
          valid way). const variable cannot change value (const a = 10; a=100;
          invalid) <br />
          Syntax error: redeclaring let, const not initialised. Type error: re
          assigning const, reference error: trying to access anything
          inacccesible
        </li>
        <li>
          <b>Blocks in JS</b>:
          <br />→ Also known as compound statement, it is defined by curly
          braces {'{}'}
          , used to combine multiple JS statements into a group. Use of block:
          multiple statements can be grouped and used at a place where JS
          expects a single statement (like with "if" or "for", "if" expects
          single statement ahead of it: if(true) "here").
          <br />
          → Block scope: let & const inside a block are hoisted in a different
          space in memory, called "Block" section (let and const declared in
          global are stored in "Script" section). They are block scoped as they
          can be accessed only in the block (see inspect → scope) ("var" always
          stored in the global object, function scope). Block scopes also follow
          lexical scopes, these scopes are lexically present.
          <br />
          → Shadowing:
          <br />
          Redeclaring "var" shadows/overrides the previous value as they point
          to same location in memory
          <br />
          var a=10; {'{ var a = 100; // inside a block }'}; → a will be changed
          to 100
          <br />→ "let" declared a inside block shadows "let" declared outside
          the block, both "let" variables store different values
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              let a = 10;
              { 
                let a = 100; 
                console.log(a); // Prints 100
              }
              console.log(a); // Prints 10

              // Works the same way in case of functions.
            `}
          </SyntaxHighlighter>
          → Illegal shadowing: let cannot be shadowed using a var: <br />
          let a = 10; {'{ var a = 10; }'} // only let can shadow let
          <br />→ This is because "var" is trying to cross the boundary of its
          scope, shadowing works only when we are within the boundary of our
          scope. Vice versa is ok → var a = 20; {'{ let a = 10; }'},
          <br />
          As "var" is function scope this is ok:
          <br />
          let a = 10;
          <br /> function x() {'{ var a = 100; }'}
          <br />
          Behaviour is same for arrow function as well.
        </li>
        <li>
          <b>Closures</b>:
          <br />
          <>
            → It means when a function is bind together/along with its lexical
            environment. Function + reference to its lexical env = Closure. In
            below ex: function y is returned by x and after execution of line
            var z = x(), x will be popped from stack and cease to exist. But
            still z() logs 7 as returned function y maintains its closure
            (lexical env). We can say not just function y was returned by x, but
            closure was returned. Closures are maintained at all depths of the
            scope chain.
            <br />
            <SyntaxHighlighter language='javascript' style={docco}>
              {`
                function x() {
                  var a = 7;
                  function y() {
                    console.log(a);
                  }
                  return y;
                }
                var z = x();
                //....any amount of code            
                z();
              `}
            </SyntaxHighlighter>
            → setTimeout: setTimeout( function() {'{...}'}, 1000);
            <br />
            Whenever this is encountered while executing, JS stores it at some
            place attaches a timer and executes the function/puts it in call
            stack after the timer is done. Meanwhile, the rest of the code after
            setTimeout continues to execute (immediately after storing the func
            and attaching timer) and does not wait for setTimeout.
            <br />
            → Ques: print after every second - 1, 2, 3, 4, 5
            <br />
            Solution 1: for loop using "let". "let" is block scope so new copy
            of i is passed to timeout so it works.
            <SyntaxHighlighter language='javascript' style={docco}>
              {`
                function x() {
                  for(let i=1; i<=5; i++) {
                    setTimeout( function () {
                      console.log(i);
                    }, i * 1000);
                  }
                }         
                x();
            `}
            </SyntaxHighlighter>
            Using "var": The incorrect way below, as "var" is not block scope,
            "i" is used by reference so following prints 6,6,6,6,6 after every
            second. i has become 6 after for loop and every setTimeout is
            pointing to it:
            <SyntaxHighlighter language='javascript' style={docco}>
              {`
                function x() {
                  for(var i=1; i<=5; i++) {
                    setTimeout( function () {
                      console.log(i);
                    }, i * 1000);
                  }
                }
                x();
            `}
            </SyntaxHighlighter>
            Fix: Using closures, we enclose it in a function, so everytime new
            value/copy of i is passed and everyone does not point to same place:
            <SyntaxHighlighter language='javascript' style={docco}>
              {`
                function x() {
                  for(var i=1; i<=5; i++) {
                    function close(x) {
                      setTimeout( function () {
                        console.log(x);
                      }, x * 1000);
                    }
                    close(i);
                  }
                }
                x();
              `}
            </SyntaxHighlighter>
            → Advantages of closures: Function currying, setTimeout, HOC
            (Memoize, once), Module patterns, data hiding & encapsulation.{' '}
            <br />
            → Data hiding & encapsulation: Avoiding access of a variable from
            some other function/parts of a code. Using Closure: count variable
            is inside function and cannot be accessed by anyone else and can be
            modified using the returned function. Another advantage, we can have
            multiple counters and each will store different count.
            <br />
            <SyntaxHighlighter language='javascript' style={docco}>
              {`
                function Counter () {
                  var count = 0

                  this.incrementCounter = function () {
                    count++
                  }

                  this.decrementCounter = function () {
                    count--
                  }

                  this.getCount = function () {
                    return count
                  }
                }

                const counter1 = new Counter()
                counter1.incrementCounter()
                counter1.incrementCounter()
                console.log(counter1.getCount()) // 2

                const counter2 = new Counter()
                counter2.incrementCounter()
                counter1.incrementCounter()
                console.log(counter2.getCount()) // 1
                console.log(counter1.getCount()) // 3
              `}
            </SyntaxHighlighter>
            → Disadvantages of closure: Overconsumption of memory, lot of memory
            is used if lot of closures are created in the code. If closed over
            variables are not garbage collected and not handled properly there
            can be memory leaks.
            <br />→ Garbage collector: Frees up the unutilised memory, variables
            not being used anymore.
          </>
        </li>
        <li>
          First Class Functions: <br />
          <ul>
            <li>
              Function Statement aka Function declaration: The usual way of
              declaring functions is function statement : function a(){' '}
              {'{....}'}
            </li>
            <li>
              Function Expression: Functions can be treated just like a value
              and can be assigned to other variables, this is a func expression:
              <br />
              var b = function () {'{....}'}
              <br />
              → Major Diff b/w function statement & exp. is hoisting (see
              basics): During 1st phase (memory alloc), in function statement,
              map will be created and function definition will be copied/stored
              so it can be called before the statement. But in function
              expression, variable b will be "undefined" initially before
              executing the line where it is assigned the function, so we cannot
              call it before.
              <br />
              a();
              <br />
              function a() {'{....}'}
              <br />
              b(); // error as b will be "undefined"
              <br />
              var b = function () {'{....}'}
              <br />a works but b does not
            </li>
            <li>
              Anonymous Functions: Functions without a name, they don't have any
              identity. ex: function () {'{...}'}. We can only use them where
              func are used as values (like above in a function expression),
              otherwise syntax error is thrown as it is a function statement and
              statements require a name.
            </li>
            <li>
              Named Function expression: When an function expression has a name.
              <br />
              ex: var b = function c() {'{....}'}
              <br />
              → If we try to call c() in global scope it throws error as c does
              not exist in global scope. ex: <br />
              var b = function c() {'{...}'}; <br />
              c();
            </li>
            <li>
              Diff b/w parameters and arguments: <br />
              Params: Local variables in the function's scope, cannot be
              accessed outside, the variables which it accepts.
              <br />
              ex: function a(param1, param2) {'{...}'};
              <br />
              Arguments: The values which we pass to a function when
              calling/invoking it.
              <br />
              ex: a(arg1, arg2);
            </li>
            <li>
              First Class Functions: In JS, we can use function as values, pass
              them as arguments to another function, or return a function from
              another function or assign it to a variable. The ability to do all
              this is called first class functions aka first class citizens. It
              also helps in achieving async operations.
            </li>
          </ul>
        </li>
        <li>
          Callback Functions:
          <br />→ Function passed as an argument is a callback function. Below
          ex: y is the callback func. Why callback? - We call a function y
          sometime later in our code, like we give x the responsibilty of
          calling y sometime later. Best example is setTimeout, we pass a
          function as an argument and time after which to invoke the func (see
          inspect/source call stack to visualise this, after timer is done, the
          callback function, will be pushed in stack).
          <br />
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              function x(y) { 
                y(); // might be called some time later
              };

              function callbackFunc() {
                ...
              }
              x(callbackFunc);
            `}
          </SyntaxHighlighter>
          → Every execution in JS happens only from the one call stack, can also
          say single threaded where this stack is the thread. When any operation
          blocks the call stack, it is called <b>blocking the main thread.</b>{' '}
          <br />→ Event Listeners: Event listeners also take up callback
          functions, when the event (click/hover below) occurs, the callback
          function is brought in the call stack and executed. ex:
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              document
                .getElementById("someIdGivenToADiv")
                .addEventListener("event(click/hover)", callbackFunc);

                function callbackFunc(params) {
                  ...
                }
            `}
          </SyntaxHighlighter>
          → Task: On button click display number of times it is clicked: Add the
          listener in a function (closure), inner callback function stores the
          count. (lexical env/closure):
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              function attachEventListener() {
                let count = 0;

                document
                  .getElementById("buttonId")
                  .addEventListener("click", console.log("Click: ", ++count));
              }

              attachEventListener();
            `}
          </SyntaxHighlighter>
          → Event Listeners are heavy, meaning they take up memory due to
          maintaining closures etc. We can have multiple listeners etc, in our
          page taking up lot of memory which can slow doen the UI. So, a good
          practice is to remove them after use for garbage collection.
        </li>
        <li>
          Event Loop: <br />
          → In the browser we have JS Engine & in the JS engine we have call
          stack, this stack immediately executes anything which is in it and
          waits for nothing, so how to execute code which has to execute after
          some time and not immediately.
          <br />→ This is where a browser comes in, a browser has every power
          that we need ex: timers, localStorage, web url, hitting servers,
          geolocation etc.
          <br />→ To use all that, we have <b>Web APIs</b> for the same for
          creating the connection between the browser and the JS engine. Some of
          the web APIs which are a part of the browser: setTimeout, DOM APIs
          (document.getElementById etc.), fetch(), localStorage, console,
          location etc. Browser gives access of all these to the JS engine for
          using them through the keyword "window". Browser wraps up all these
          APIs/functions in the global object, or the "window" object
          (window.console.log() & console.log() both are same just like any
          other global variable).
          <br />
          → When we call any of these web APIs, browser internally has their
          implementations which run and do the task (like log, set timer etc.)
          Other places where JS runs might have different web APIs and their
          implementations. (node.js, smartwatches, water cooler etc, wherever JS
          runs, JS engine/env)
          <br />→ As we encounter setTimeout, browser registers the function in
          it and starts the timer, now after the timer is up we need the
          function in the call stack as everything is executed only there. Here
          event loop and callback queue comes into picture. After timer expires,
          the callback function is put into the callback queue. Event loop acts
          like a gatekeeper, it checks the callback queue and puts the function
          in the call stack. All callback functions are pushed in callback queue
          waiting to be executed, event loop continuously checks the call stack,
          as soon it is empty and there's something in the queue to be executed
          it is pushed in the call stack.
          <br />→ <b>fetch()</b> - This works slightly differently than other
          callback funcs. When we encounter a fetch, API call is made to passed
          url and the callback function (to be executed after the promise is
          resolved) is registered in the browser. When data is received from
          server, the callback function is not pushed in the queue unlike other
          callback functions.
          <br />→ Here <b>Microtask queue</b> comes in, similar to callback
          queue but has higher priority. In case of fetch, the callback function
          will be pushed in the microtask queue and event loop picks it to be
          executed first as soon as the call stack is empty (then callback queue
          processed).
          <br />→ All callback functions that come from promises are pushed in
          microtask queue, also mutation observers. Everyother callback function
          is pushed in callback queue also known as <b>Task Queue</b>. Callback
          queue is touched only when microtask queue is empty.
          <br />→ <b>Starvation:</b>
          <br />
          If a function in microtask queue is creating another
          microtask/callback funtion (and so on, many functions are pushed in
          microtask queue), and if there is also a function in the callback
          queue, it might have to wait for a long time before being executed.
          <br />→ Event loop is always running, only asynchronous web APIs are
          registered in the browser and not the synchronous callback functions
          like what we pass inside map, filter, and reduce.
        </li>
        <li>
          JS Engine:
          <br />
          → JS can run anywhere (browser, smartwatch etc.) because of JavaScript
          runtime environment. It has JS engine (heart of JS runtime env): web
          APIs, event loop, queues etc, ie everything needed to run JS code. JS
          engine is just a code which processes our JS code (google's v8 JS
          engine is written in c++). It takes code as an input, goes through 3
          major steps: 1) Parsing 2) Compilation 3) Execution.
          <br />→ In parsing, tokenisation (converting out JS code into tokens)
          happens and there is also Syntax Parser which creates an AST (Abstract
          Syntax tree) (Visualize AST:{' '}
          <a href={'https://astexplorer.net/'} target='_blank'>
            https://astexplorer.net/
          </a>
          .) <br />
          → The AST is then passed to compilation. Some languages use
          interpreter which directly executes code line by line and no need to
          compile (pros: it is fast). Some languages use compiler, which
          compiles the code to create an efficient and optimised version and
          then executes (pros: efficiency). JS can behave as both (interpreted
          or compiled language) depending on the JS engine.
          <br />
          → JS engines can use interpreter + compiler which makes a JIT
          Compilation (Just in Time).
          <br />→ Now the AST goes to the interpreter to convert it (high level
          code) to executable code (called Bytecode) and at the same time it
          takes help from compiler to optimise the code. While interpreter
          executes code line by line it interacts with the compiler to optimise
          the code as much it can. Execution then happens using call stack and
          memory heap (where all variable and function assigned memory) inside
          the JS engine.
          <br />→ Now we also have a garbage collector in there (in sync with
          memory heap etc.) to free up unused memory. It uses an algo known as{' '}
          <b>Mark & sweep algo.</b> We also have some optimising techniques in
          the engine, some of them are: Inlining, Inline caching, copy elision
          (read more).
          <br />→ This all is a generic JS engine, different engine have
          different ways/implementations of the engine.
        </li>
        <li>
          setTimeout issue: Let's say we added a setTimeout with 3 second timer,
          the callback function gets registered in the browser (using
          setTimeouts web API) and the the timer starts. But after the
          setTimeout line in code, suppose there is JS execution to be done
          which can require lets say 7 sec. Now, the callback function, which is
          expected to execute after 3 sec, won't run for 7 sec atleast.
          <br />→ This is because the global execution context is still in the
          stack and subsequent lines (after timeout one) are still being
          executed. Meanwhile the timer is up and the callback function is put
          in callback queue, waiting to be executed as the stack is not empty.
          After 7 sec when stack gets empty, event loop puts it in call stack
          and then it gets executed. This is why we should not block the main
          thread/call stack for a long time.
          <br />A hack to block thread for long time:
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              let startTime = new Date().getTime();
              let endTime = startTime;
              let delay = 10000 // change delay to any ms
              while (endTime < startTime + delay) {
                endTime = new Date().getTime();
              }
            `}
          </SyntaxHighlighter>
        </li>
        <li>
          Functional Programming:
          <br />
          → Higher order function: A function which takes another function as an
          argument or returns a from it function is HOC.
          <br />→ Following is a way to write code for the problem: We have a
          radius array and want to generate 3 more arrays: circumference, area
          and diameter. Repeating code as below is not the correct way to do it.
          <br />
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              let radius = [3, 1, 5, 7];
              
              function area (rad) {
                let res = [];
                for (let i=0; i<rad.length; i++) {
                  res.push(Math.PI * rad[i] * rad[i]);
                }
                return res;
              }

              function circumference (rad) {
                let res = [];
                for (let i=0; i<rad.length; i++) {
                  res.push(2 * Math.PI * rad[i]);
                }
                return res;
              }

              function diameter (rad) {
                let res = [];
                for (let i=0; i<rad.length; i++) {
                  res.push(2 * rad[i]);
                }
                return res;
              }

              console.log( area(radius) );
              console.log( circumference(radius) );
              console.log( diameter(radius) );
            `}
          </SyntaxHighlighter>
          → Better way of improving this is to extract the computation logic out
          and keep a common function for calculations like below:
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              let radius = [3, 1, 5, 7];

              const area = function (radius) {
                return Math.PI * radius * radius;
              }

              const circumference = function (radius) {
                return 2 * Math.PI * radius;
              }

              const diameter = function (radius) {
                return 2 * radius;
              }
              
              function calculate (rad, operation) {
                let res = [];
                for (let i=0; i<rad.length; i++) {
                  res.push( operation(rad[i]) );
                }
                return res;
              }

              console.log( calculate(radius, area) );
              console.log( calculate(radius, circumference) );
              console.log( calculate(radius, diameter) );
            `}
          </SyntaxHighlighter>
          → Now the code is divided into several units and each performs its own
          task. Area function just calculates area, similarly other two, and
          calculate function just takes any operation and input and performs
          that operation on the input.
          <br />
          → We have small reusable components each doing some task, this
          increases reusability, modularity. We broke down the code into smaller
          functional units.
          <br />→ If we want to convert the calculate function like how we call
          Array.map, in the calculate function "this" points to the array with
          which it is invoked (radius in our case) :
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              let radius = [3, 1, 5, 7];

              const area = function (radius) {
                return Math.PI * radius * radius;
              }

              Array.prototype.calculate = function(operation) {
                let res = [];
                for (let i=0; i < this.length; i++) {
                  res.push( operation( this[i] ) );
                }
                return res;
              }

              console.log( radius.calculate(area) );
            `}
          </SyntaxHighlighter>
        </li>
        <li>
          Map, filter & reduce: <br />
          → Map: Used to perform some operation on each element and transform
          the array to create a new array: arr.map(func): Where arr is array to
          map on and func is the callback function (any operation to perform)
          <br />
          → Filter: Used to filter out elements from an array based on the
          passed logic: arr.filter(func), where arr is array to be filtered and
          func is the filter logic function (callback func passed to filter).
          <br />
          → Reduce: Used when we have to take all the values in an array and
          come up with a single value out of them: arr.reduce(func, initial)
          takes two arguments: callback function and initial value of
          accumulator.
          <br />→ ex: sum of elements of array:
          <br />
          arr.reduce(function (acc, curr) {'{ acc = acc + curr; return acc; }'},
          0)
          <br />
          → Above, the callback function which we pass gets two parameters,
          "acc": accumulator which is initialised to some value (0 here) and our
          result is accumulated in it. Second param "curr" is the current value,
          when iterating over an array, it is the current value which we are on.
          <br />
          → First argument: Callback function and the second argument is the
          initial value to be assigned to the accumulator.
          <br />→ Chaining of all these three is possible like:
          array.map(func1).filter(func2).reduce(.....)
        </li>
        <li>
          Callbacks issue: <br />→ If there is a flow of APIs, like if one API
          is resolved we need to call a new API and so on, callback functions
          can be a big issue. The code grows horizontally (called pyramid of
          doom) and is highly unreadable, unmaintainable etc. ex:
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              API1(data, function1 () {
                API2(data, function2 () {
                  API3()....so on
                });
              });
            `}
          </SyntaxHighlighter>
          → Inversion of control: Its like we lose control of our code while
          using callbacks. Like above we gave control to API1 (when it is
          resolved), the responsibility of calling API2, this is risky and we
          are blindly trusting API1 to call API2 by giving the callback
          function. API1 might have issues and it may happen that API2 never
          runs or API2 runs twice (lets say API2 is critical, some payment API
          etc.)
        </li>
        <li>
          <b>Promises</b>
          <ul>
            <li>
              Used to handle async operations in JS. Ex: shopping website: a
              cart, first createOrder API, when resolved, proceed to payment
              API.
            </li>
            <li>
              We can use callbacks to create a flow, but as we know from above
              issues of callback this is not reliable:
              <SyntaxHighlighter language='javascript' style={docco}>
                {`
                  createOrder( cart, function(orderId) {
                    proceedToPayment(orderId);
                  });
                  // cart = ["books", "pen", "shoes"];
                `}
              </SyntaxHighlighter>
            </li>
            <li>
              Here we use promises to create a better and reliable flow. Our
              function will return a promise which is nothing but an empty
              object with some undefined data key. Whenever the API returns data
              after some time and the promise is resolved the undefined data
              will be filled with the returned data. (after executing promise
              line, rest of the lines executed as usual). We <b>attach</b> a
              callback function using then(), this callback func is
              automatically called after we get the data.
              <SyntaxHighlighter language='javascript' style={docco}>
                {`
                  const promise = createOrder(cart);
                  // promise → { data: undefined } empty before we get data

                  promise.then(function (orderId) { proceedToPayment(orderId); } );
                  // promise → { data: orderDetails } after we get data
                `}
              </SyntaxHighlighter>
            </li>
            <li>
              So there is big difference b/w the callback way and the promise
              way: 1st one we are passing the callback function to another
              function and the 1st func (createOrder here) will call it whenever
              it wants to.
              <br />→ 2nd way we are attaching a callback function to promise
              object, so we have the control of the program with us (we are not
              passing a function to another function). createOrder will do its
              job of getting data, as soon as there is data in the promise
              object we have the guarantee of calling the callback function
              passed only once.
            </li>
            → Promise object actual: fetch() return a promise (see its response)
            <br />
            → It mainly has three things, PromiseResult - which stores the
            fetched data. PromisePrototype, and third PromiseState - this is the
            state of the promise, if it's not resolved it will be in "pending"
            state, after getting data it will be in "fulfilled" state. If failed
            then it will be in "rejected" state, it is guaranteed to be in these
            3 states. (refer mozilla docs). Promise object is immutable, we
            cannot change any value in object.
            <br />
            <li>
              Promise chaining to resolve callback hell/pyramid of doom:
              <br />
              We can add multiple .then() and chain to add many callback
              functions. It solves the issue of passing multiple callback
              functions (see callback issues) ex:
              <SyntaxHighlighter language='javascript' style={docco}>
                {`
                createOrder(cart)
                  .then(data => {
                    return payment(data);
                  })
                  .then(data => {
                    return updateWallet(data);
                  })
                  .then(data => {
                    return showSummary(data);
                  });
              `}
              </SyntaxHighlighter>
            </li>
            <li>
              Some things in chaining: When multiple .then chained, always use
              "return" at the end of the function (like above), to return data
              that needs to be used in the next .then() in the chain.
              <br />
              → Also if there is an error in any part of the chain, the last
              .catch() which we add handles the error.
              <br />→ <b>Imp:</b> Catch handles any error in the chain which is
              above it in the chain, if there is a .then() after the .catch() in
              the chain, the .then() will execute. Let there be any no. of
              .then() statements above catch, if one .then() fails then none of
              the subsequent .then() up until the catch will not execute, but if
              there is a .then() after catch it will execute. ex: showsummary
              function always runs, error in payment/updateWallet functions will
              be catched.
            </li>
            <SyntaxHighlighter language='javascript' style={docco}>
              {`
                createOrder(cart)
                  .then( data => return payment(data) )
                  .then( data => return updateWallet(data) )
                  .catch( err => console.log(err.message) )
                  .then( data => return showSummary(data) );
              `}
            </SyntaxHighlighter>
            <li>
              Create a promise: We call the Promise() constructor which takes a
              function and provides two functions resolve & reject given by
              Promise API/object to build promises. When a promise is resolved
              we handle it with the callback function passed to then, else when
              promise is rejected ( reject() ), we handle it by passing callback
              function to catch(), which is chained with then and receives the
              error object. const pr = new Promise(function (resolve, reject){' '}
              {'{ }'})
              <SyntaxHighlighter language='javascript' style={docco}>
                {`
              // This is a consumer as we are consuming the promise
              const promise = createOrder(cart) // cart = ["shoes" , "pant", ...]

              promise
                .then((data) => { console.log(data)})
                .catch((err) => { console.log(err.message)});

              // Producer: produces the promise;

              function createOrder(cart) {
                const pr = new Promise((resolve, reject) => {
                  if (!validCart(cart)) { 
                    // some validation logic
                    const err = new Error("Some error message");
                    reject(err);
                  }

                  // Our code logic then we have data and return it in resolve
                  ...
                  //
                  
                  if (everythingOk) {
                    resolve(data);
                  }
                })

                return pr;
              }
            `}
              </SyntaxHighlighter>
            </li>
            <b>Promise APIs:</b>
            <br />
            <li>
              Promise.all(): Used when we have to make multiple API calls
              parallely. We can pass an array (check iterable type) of promises
              to the .all() function. ex: Promise.all([promise1, promise2,
              promise3]) - 3 parallel API calls will be made. If all 3 calls are
              succesfull, it returns an array of values (passed in resolve). It
              will wait for every promise to resolve then only return the
              result, if API call times are p1 - 3s, p2 - 1s, p3 - 2s then the
              fetched data array is returned after 3s.
              <br />→ If any of the promise fails/rejected, immediately an error
              is thrown having the error from the failed promise (promise.all()
              is rejected, whole collection of promises). If p2 fails error is
              thrown after 1s, p1 & p3 promises are not cancelled. As soon as
              error encountered, promise.all() fails, it does not wait for other
              promises regardless of their success/failure.
            </li>
            <li>
              Promise.allSettled([p1, p2, p3]): Same as above, in case every
              promise is successfull. But if any promise fails, it still waits
              for every other promise to settle (either reject/resolve) and then
              returns array (same length as no. of promises) of the results ( in
              data in .then() ). ex:
              <br />
              {
                "[ { status: 'fulfilled', value: resolved_value }, { status: 'fulfilled', value: resolved_value } ] "
              }
            </li>
            <li>
              Promise.race([p1, p2,p3]) : As the name, it is a race. The promise
              which settles the earliest is returned whether it is a success or
              failure. ex: p2 resolves in 1s, returned value: val2 else returns
              error if it is rejected. Other promise doesn't matter what their
              result is, the one which settles first is returned.
            </li>
            <li>
              Promise.any([p1,p2,p3]): Same as race but it waits for a
              successfull promise, if the first promise settled is rejected then
              it continues to wait for other promises until it gets a successful
              promise and returns the value/fetced data (Seeking for first
              success). If all promises fail, then an array of errors from all
              promises is returned. It is called <b>Aggregate Error</b>. Access
              the array of errors in catch section → err.errors.
            </li>
            All the four above return a promise, attach a callback function
            using .then() to see results. ex:
            <br />
            {'Promise.all([p1, p2, p3]).then( (res) => {...} )'}
          </ul>
        </li>
        <li>
          <b>Async, await</b>:
          <br />→ Async: Keyword used to create an async function ex: async
          function getData() {'{...}'}. Async func always returns a promise,
          either we create a promise and return from it or if we return a
          string/int the function will wrap the value in a promise and return.
          <br />
          → Async and await combo is used to handle promises. Earlier way of
          handling promises: <br />
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              const p = new Promise((resolve, reject) => {
                resolve("Promise resolved");
              });

              function getData() {
                p.then((res) => console.log(res));
                console.log("Here");
              }

              getData();
            `}
          </SyntaxHighlighter>
          Using async await for the same:
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              const p = new Promise((resolve, reject) => {
                resolve("Promise resolved");
              });

              async function getData() {
                const data = await p;
                console.log("Here");
                console.log(data);
              }

              getData();
            `}
          </SyntaxHighlighter>
          → We will use the await keyword in front of the promise and will get
          the data in a variable. await can be used only inside an async func.{' '}
          <br />→ <b>Difference</b> b/w both: Major difference is the execution
          of the code written after the promise resolution line. Assume promise
          takes 10s to resolve. For above example, on the old way (.then), the
          promise.then is registered and immediately the subsequent lines are
          executed, so immediately "Here" will be printed and then after 10s
          Promise resolved will be printed, execution does not stop at that
          line. In async await, execution stops at the await line and waits
          there until the promise is resolved, so "Here" wont be printed
          immediately, it will go to next line only after promise resolves after
          10s. <br />
          → The following code will print both their subsequent logs immediately
          after 10s as they are the same promise and will be resolved after 10s,
          we will get 4 logs immediately after 10s.
          <br />
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              const p = new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve("Promise resolved");
                }, 10000)
              });

              async function getData() {
                const data1 = await p;
                console.log("Here1");
                console.log(data1);

                const data2 = await p;
                console.log("Here2");
                console.log(data2);
              }

              getData();
            `}
          </SyntaxHighlighter>
          → But if we have two promises with different timeouts lets say p1: 10s
          and p2: 5s, after 10s everything (all 4 logs) gets printed as both
          will be resolved after 10s. But if we swap times p1: 5s and p2: 10s,
          after 5s, logs after p1 get printed and more 5s (total 10s), logs
          after p2 get printed.
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              const p1 = new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve("Promise resolved 1");
                }, 10000);
              });

              const p2 = new Promise((resolve, reject) => {
                setTimeout(() => {
                  resolve("Promise resolved 2");
                }, 5000);
              });

              //swap times for another behaviour

              async function getData() {
                const data1 = await p1;
                console.log("Here1");
                console.log(data1);

                const data2 = await p2;
                console.log("Here2");
                console.log(data2);
              }

              getData();
            `}
          </SyntaxHighlighter>
          → <b>Imp. </b> So as we know, JS never stops executing, it just
          appears as if the execution is stopped there. JS engine (never waits)
          is not waiting at the await line for the promise to resolve, getData()
          func is not present even in the call stack. As it encounters await
          line, getData() is removed from the call stack while p1/p2 is
          resolving. When its resolved execution starts again from the next line
          and so on.
          <br />→ Using <b>fetch()</b>. It returns a promise. Once the promise
          is resolved, we get a "Response" object in the variable. This object
          has a body (key) which is a <b>readable stream</b>. We do
          Response.json() which is again a promise which on resolution gives our
          final result.
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              const data = await fetch(); // data has response object
              const jsonValue = await data.json();

              // Error handling can be done through try catch block:
              try {
                const data = await fetch(...);
                //any operations

              } catch(err) {
                console.log(err)
              }
              
              // Old way of handling can also be done as async function returns a promise:
              async function getData() { .... };
              getData()
                .catch(err => console.log(err) );
            `}
          </SyntaxHighlighter>
          → Async await is just a <b>syntactic sugar</b> over then and catch,
          behind the scenes it uses "then" only. Improves readability and the
          flow makes sense, we dont have to deal with callback funcs and all.
        </li>
        <li>
          <b>this keyword</b>:
          <br />
          → In global space: "this" will be equal to the global object always in
          the global space/scope. In browsers the object is the Window object.
          <br />→ In a function: If it is not strict mode then it is equal to
          the global object, in strict mode it will be undefined.
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              function x() { 
                console.log(this);
              };
              x();
            `}
          </SyntaxHighlighter>
          → This behaviour is because of a phenomenon known as "this
          substitution": If the value of "this" keyword is undefined or null
          then the value of "this" keyword will be replaced with global object
          only if we are in non strict mode.
          <br />
          → The value of this keyword also depends on how the function is
          called: (only strict mode examples now). In the above example, x is
          called without any reference of an object ( x() ) so value of "this"
          is undefined. But if x is called as: window.x(); then value of "this"
          will be the global object, we are referencing it using the window
          object. <br />
          → Inside an objects method:
          <br />
          Method: When we make a function a part of an object it is known as
          method. Like below, x is a method. (just a lingo, it is a function
          only)
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              let a = { 
                a: 10, 
                x: function () {
                  console.log(this) 
                } 
              };
              obj.x();
            `}
          </SyntaxHighlighter>
          → The above will print the object itself, when called like above, this
          refers to the whole object. Instead of "this", if we log "this.a",
          then 10 will be printed.
          <br />→ Call, bind, apply: When we have to share methods, like there
          is a function (method) in one object and we need to use it on another
          object. Ex:
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              const person1 = {
                name: "Aditya",
                printName: function () {
                  console.log(this.name);
                }, 
              }
              
              person1.printName(); // prints "Aditya"

              const person2 = {
                name: "Martin",
              }

              person2.printName(); // cannot work as person2 does not have the method printName.

              //We use call to use a objects method on another object.
              person1.printName.call(person2); // prints "Martin"
            `}
          </SyntaxHighlighter>
          → Above, the argument person2 which we pass to "call" becomes the
          value of "this" in printName, we override the value.
          <br />→ If our function accepts some parameters, we can pass them as
          subsequent arguments after passing the reference object. Also we can
          keep the method outside. Ex:
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              const person1 = {
                name: "Aditya", 
              }

              let printName = function (lastName, city) {
                console.log(this.name + " " + lastName + " " + city);
              },
              
              printName.call(person1, "Malvi", "ABC"); // prints "Aditya Malvi ABC"

              const person2 = {
                name: "Martin",
              }

              printName.call(person2); // prints "Martin undefined undefined" as no args passed 
            `}
          </SyntaxHighlighter>
          → Apply: Same as "call", only thing different is the way we pass
          arguments as an array in "apply" instead of several comma separated
          args. Ex: printName.apply(person1, ["Malvi", "ABC"]);
          <br />
          → Bind: Bind finds the method (printName) with an object and returns
          the copy of that method. It does not call the method instead returns a
          func. Used to bind and keep a copy of that method and use it later
          instead of invoking it directly like in call and apply. ex: <br />
          let printCopy = printName.bind(person1, "Malvi", "ABC"); <br />
          printCopy();
          <br />
          Polyfill or bind: If a browser does not support a function then we
          need to have/implement some fallback func (our own) to use in place of
          the unsupported func, this is called polyfills. For bind:
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
                  let person1 = {
                    firstName: "Aditya",
                    lastName: "Malvi",
                  }

                  let printName = function (hometown, state) {
                    console.log(this.firstName + " " + this.lastName + " " + from + " " + hometown + "," + state);
                  }

                  Function.prototype.myBind (...args) {
                    let obj = this; // this will be pointing to the printName method
                    // args passed to myBind handled here
                    let params = args.slice(1); // remove first arg, get the remaining array

                    //args passed to the returned func (like state here), handled here
                    return function (...args2) {
                      obj.apply(args[0], [...params, ...args2]); // same as printName.call(person1)
                    }
                  }

                  let printName1 = printName.myBind(person1, "Nashik");
                  printName1("Maharashtra");
                `}
          </SyntaxHighlighter>
          → <b>In arrow functions</b>: this takes the value from its lexical
          env, arrow functions do not have their own "this" and dont have the
          concept of "this". In the person1 ex, if we replace printName with:
          printName: {'() => { console.log(this) }'}, will not work, instead
          global object will be printed. Below, the object will get printed as
          the arrow function is inside another function ( its enclosing lexical
          context ), just behaves like above ex:
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              const person1 = {
                name: "Aditya",
                printName: function () {
                  const y = () => {
                    console.log(this.name)
                  }
                  y();
                }, 
              }
              person1.printName();
            `}
          </SyntaxHighlighter>
          → this in HTML DOM: it refers to the HTML element we access this. ex
          if we add this in the HTML script, this has reference to the HTML
          button element:
          {`<button onclick={"alert(this)"}> Click</button>`}
        </li>
        <li>
          <b>Debouncing</b>: Lets say in our search bar we have auto suggest
          based on the text typed. When we type, API call is not made for every
          character we type (every keystroke), instead when take some pause an
          API call is made with the word typed so far. This delaying is called
          debouncing. Ex: getData() is called to get auto suggest data. We need
          to debounce getData, meaning invoking it only when we take a pause.
          Lets say only if there is time span of more than 300ms b/w two key
          presses then only call getData. We set a timer with a delay (300ms),
          if 300ms occur b/w two key presses, then we call getData() as
          setTimeout func will execute after that time. But if it is less than
          300ms b/w key strokes, then we have to clear the timer and reset it.
          <br />
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              const getData = () => {...};

              const debounce = function (func, delay) {
                let timer;
                return function () {
                  clearTimeout(timer);
                  timer = setTimeout(() => {
                    func();
                  }, delay);
                }
              }

              const debouncedGetData = debounce(getData, 300);

              return (
                <>
                  <SearchBar onKeyUp={debouncedGetData}/>
                </>
              )
            `}
          </SyntaxHighlighter>
        </li>
        <li>
          <b>Throttling</b>: Lets say on clicking a button we make an API call,
          on continuos clicking of button we should avoid making multiple calls
          and limit the rate. By throttling, after the first click, we can delay
          the next call for a certain limit of time, lets say, by 500ms. After a
          function call happens, the next function call will only happen after
          delay (ex: 500ms) amount of time, even if there are multiple button
          clicks occuring. Ex: We have an expensive function which needs to be
          throttled, called less frequently. We can implement throttle as below.
          We return a closure having a variable flag, if true then we run
          function and set the flag to false and switch back to true only after
          delay time. We handle args and call func the below way and not
          directly ( func() ).
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              const expensiveFunc = () => {...};

              const throttle = function (func, delay) {
                let flag = true;
                return function () {
                  let context = this, args = arguments;
                  if (flag) {
                    func.apply(context, args);
                    flag = false;
                    setTimeout(() => {
                      flag = true;
                    }, delay)
                  }
                }
              }

              const throttledFunc = throttle(expensiveFunc, 500);

            `}
          </SyntaxHighlighter>
        </li>
        <li>
          <b>Debouncing vs throttling</b>: Both are used to optimise performance
          by limitng the rate of function calls. Few examples: <br />
          1. Search bar example: While searching we cannot make API calls for
          every key press event to fetch auto suggestions. We debounce, so the
          API/function call is made only when there is a certain delay/time
          difference b/w the two key press events. Throttling: lets say it makes
          a call at the beginning and then will make new call only after delay
          amount of time, any characters typed during that time will be ignored.
          Debouncing is preferred and makes more sense in this scenario.
          <br />
          2. Window Resize: Lets say when user resizes the browser window, we
          want to call a function. We add event listener and attach the callback
          function. But when we are continuously resizing, huge amount of resize
          events are triggered which will cause many function calls. By
          debouncing, we can call the function only when time difference b/w 2
          resize events is some delay. In throttling, we can call the function
          after every delay amount of time. Depends on use case which to use
          from both.
          <br />
          3. Button click: If a button click happens frequently, (lets say
          shooting game), triggering several functions. In debouncing, click
          handler will be called only when differnce b/w two click events is
          more than a delay, clicking quickly/frequently will have two events
          with time diff less than delay so extra function calls avoided. Lets
          say there two guns, pistol and rifle. If we click and shoot, both guns
          have different time after which next bullet can be fired and mouse
          clicks between are redundant. If pistol takes 1s after 1 shot to fire
          again, we can throttle so that the mouse click event (firing bullet)
          takes place only after atleast 1s. And rifle can take less time to
          fire new bullet after firing one so we can reduce the throttle delay.
          Throttling is more useful in this scenario.
        </li>
        <li>
          <b>Event delegation</b>:
          <br />
          → Technique in JavaScript, where you use a single event listener to
          manage events for multiple elements, instead of attaching separate
          event listeners to each element. This is achieved by taking advantage
          of the event bubbling mechanism.
          <br />
          → Event Bubbling: When an event is triggered on an element, it first
          runs the event handlers on that element, then on its parent, and so
          on, all the way up to the document object. This is known as event
          bubbling.
          <br />
          → How Event Delegation Works: By placing a single event listener on a
          common ancestor of the elements you are interested in, you can catch
          events from all of the target elements that bubble up to that
          ancestor. This approach is efficient and can greatly simplify your
          code.
          <br />→ Ex: Suppose you have a list of items, and you want to handle
          click events on each item. Instead of attaching a click event listener
          to each item, you can attach a single event listener to the parent
          element.
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
              document.getElementById('parent').addEventListener('click', function(event) {
                if (event.target && event.target.matches('li.child')) {
                  console.log('Item clicked:', event.target.textContent);
                }
              });

              <ul id="parent">
                <li class="child">Item 1</li>
                <li class="child">Item 2</li>
                <li class="child">Item 3</li>
                <li class="child">Item 4</li>
              </ul>
            `}
          </SyntaxHighlighter>
          → Advantages of Event Delegation Performance:
          <br />
          1. Fewer event listeners result in lower memory consumption and better
          performance, especially when dealing with a large number of elements.
          <br />
          2. Simpler Code: You only need to add and remove one event listener,
          making your code cleaner and easier to maintain.
          <br />
          3. Dynamic Content: Event delegation works well with dynamically added
          elements, as the parent element's event listener can handle events
          from new children without additional code.
          <br />
          → Use Cases:
          <br />
          1. Handling click events on list items.
          <br />
          2. Managing form validation on multiple input fields.
          <br />
          3. Implementing drag-and-drop interfaces.
          <br />
          4. Capturing events from dynamically generated content.
        </li>
      </ul>
    </Content>
  )
}
