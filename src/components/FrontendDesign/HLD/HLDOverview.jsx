export default function HLDOverview () {
  return (
    <ul>
      <h5>Overview - High Level Design:</h5>
      <li>
        High-Level Design (HLD) is the overall architectural blueprint of a
        system, focusing on major components, their interactions, data flow, and
        technology choices, without diving into specific code; it's the
        conceptual "what" and "where," bridging business needs to software,
        defining modules, scalability, and security at a macro level before
        Low-Level Design (LLD) details the "how" (specific algorithms, classes).
        HLD provides a roadmap for developers, stakeholders, and architects to
        understand the system's structure, ensuring it meets performance,
        scalability, and functional goals. The overall architecture and
        structure of a software system or app is planned and documented
        comprehensively. It is an essential step that bridges the gap between
        the requirements specification and the actual implementation of the
        system. The goal of HLD is to provide a blueprint of how the system will
        function and its components will interact.
        <br />
        Key Aspects of HLD:
        <br />
        → System Architecture: Defines major layers (UI, API, DB) and overall
        structure (e.g., microservices).
        <br />
        → Components: Identifies major parts (Auth Service, Payment Service) and
        their responsibilities.
        <br />
        → Technology Stack: Selects core technologies (languages, frameworks,
        databases).
        <br />
        → Data Flow & Storage: Shows how data moves and where it's stored
        (database choices, caching).
        <br />
        → Scalability: Plans for growth (horizontal/vertical scaling, load
        balancing).
        <br />
        → Security: Establishes high-level security (authentication,
        authorization, data encryption).
        <br />
        → Integrations: Defines connections to external services and APIs.
        <br />
        HLD vs LLD
        <br />
        → HLD (Macro): The big picture, architecture, modules, high-level
        interactions (what & where).
        <br />
        → LLD (Micro): Detailed implementation, specific algorithms, data
        structures, code logic (how).
        <br />
        → Process: HLD comes first (conceptual), followed by LLD (detailed
        implementation).
        <br />
        Why HLD is Important:
        <br />
        → Roadmap: Guides development, ensuring everyone understands the overall
        plan.
        <br />
        → Parallel Development: Allows different teams to work on distinct
        components simultaneously.
        <br />
        → Stakeholder Alignment: Provides a clear overview for business owners,
        managers, and developers.
        <br />→ Future-Proofing: Designs for flexibility to add new features
        without complete redesigns.
      </li>
      <li>
        Key Aspects:
        <ul>
          <li>
            Requirements Analysis: The crucial step of understanding, refining,
            and modeling what a system needs to do (functional, understand from
            the Product Manager, the features what it needs to do) and how well
            it must perform (non-functional, architect POV, performance,
            security, accessibility, SEO etc) before defining how to build it,
            focusing on overall architecture, modules, and high-level components
            (like databases, APIs, queues) to ensure business needs are met and
            technical feasibility is confirmed. It bridges gathered requirements
            with design by creating context diagrams, defining system
            boundaries, and identifying key elements for the blueprint, ensuring
            clarity and consistency for developers.
            <br />
            Key Activities in Requirements Analysis for HLD:
            <br />
            → Identify & Elicit Needs: Work with stakeholders (users, managers)
            to gather all business goals, user stories, and constraints.
            <br />
            → Analyze & Decompose: Break down broad requirements into specific
            features, categorize them (functional vs. non-functional), and
            prioritize them.
            <br />
            → Feasibility & Constraints: Assess technical and economic
            viability, defining project scope and limitations.
            <br />
            → Modeling: Create visual models like context diagrams to show
            system boundaries and interactions with the outside world.
            <br />
            → Define System Scope: Determine what the system is and is not,
            setting clear boundaries.
            <br />→ Identify Core Components: Pinpoint major system elements
            (e.g., database, APIs, services) and their high-level interactions.
            <br />
            In interviews, we have to understand this and ask relevant questions
            to the interviewer. Ex: If interviewer says, build Instagram, we
            have to ask the requirements as Insta has lots of features and
            modules, so what are required. Do not blindly spit out any
            design/solution from any Youtuber's video, as that can be specific
            to some requirements and interviewer has different requirements.
          </li>
          <li>
            System Architecture: Defines the overall structure and organization
            of a software system. It provides a macro-level view, outlining the
            major components, their interactions, and the underlying
            technologies.
            <br />
            Here are the key aspects of system architecture in HLD:
            <br />
            → Major Components/Modules: Identification of the primary building
            blocks of the system. These could be services, subsystems, or
            distinct functional units, each with defined responsibilities and
            boundaries. For example, in an e-commerce system, these might
            include a User Service, Product Catalog Service, Order Management
            Service, and Payment Gateway.
            <br />
            → Interactions and Data Flow: Description of how these major
            components communicate and exchange data. This often involves
            depicting the flow of information between modules using diagrams
            like Data Flow Diagrams (DFDs) or component diagrams, illustrating
            the sequence of operations and data transformations.
            <br />
            → Technology Stack: Specification of the core technologies,
            frameworks, databases, and infrastructure components that will be
            used to build and deploy the system. This includes choices like
            programming languages, web frameworks, database types (SQL/NoSQL),
            cloud platforms, and messaging queues.
            <br />
            → Architectural Style/Pattern: Selection of an appropriate
            architectural style that aligns with the system's requirements and
            constraints. Common styles include monolithic, client-server,
            microservices, event-driven, or layered architectures. The choice of
            style impacts scalability, maintainability, and development
            complexity.
            <br />
            → Interfaces: Definition of the external and internal interfaces,
            including Application Programming Interfaces (APIs) for
            inter-component communication and integration with external systems,
            as well as User Interfaces (UIs) for user interaction.
            <br />
            → Scalability and Performance Considerations: High-level strategies
            for ensuring the system can handle anticipated load and perform
            efficiently. This might involve discussing load balancing, caching
            mechanisms, database scaling techniques, and distributed processing.
            <br />
            → Security and Reliability: Addressing high-level security
            considerations, such as authentication, authorization, data
            encryption, and disaster recovery strategies to ensure system
            resilience and data integrity.
            <br />
            In essence, system architecture in HLD provides the blueprint for
            the entire system, guiding subsequent detailed design and
            development efforts while ensuring alignment with business
            objectives and technical requirements.
          </li>
          <li>
            Modules/Components: Modules and components are fundamental building
            blocks used to define the overall structure and architecture of a
            system. As a frontend engineer, we can pick the frontend component
            and dive deep into its design, interaction etc. We do not need to
            discuss databases schema etc.
          </li>
          <li>
            Data Design/ Interfaces/ API Schema:
            <br />
            Data design in High-Level Design (HLD) focuses on the big-picture
            data strategy: identifying core entities, their relationships, data
            flow, and selecting appropriate data storage (SQL/NoSQL) and systems
            (caches, queues) to meet overall system goals like scalability and
            performance, while detailed table structures (LLD) are left for
            later. It's about defining what data is needed and how it moves and
            is managed at a macro level, forming the blueprint for the system's
            data architecture.
            <b> Understanding </b> our data is very important to build a good
            system.
            <br />
            Key Aspects of Data Design in HLD:
            <br />
            → Core Entities & Relationships: Defining primary data objects
            (e.g., User, Product, Order) and how they link (e.g., User places
            many Orders).
            <br />
            → Data Flow: Mapping how data travels between system components,
            from input to processing to storage.
            <br />
            → Technology Stack (Data Layer): Choosing high-level database types
            (SQL vs. NoSQL), caching solutions (Redis), and message queues
            (RabbitMQ).
            <br />
            → Data Scalability: Planning how the data layer will handle growth
            (e.g., sharding, replication).
            <br />
            → Data Access Patterns: Considering how data will be read/written,
            influencing choices like database types.
            <br />
            Interfaces:
            <br />
            Interfaces define how different system modules, subsystems, and
            external entities communicate, specifying rules, data formats, and
            protocols for seamless interaction, ensuring components work
            together despite independent development, covering internal
            (module-to-module) and external (API/third-party) connections, and
            including User Interfaces (UIs) from a macro perspective. They act
            as crucial contracts, allowing modularity and abstraction, and are
            defined broadly (e.g., RPC, message passing) before detailed
            low-level design (LLD) specifies implementation details.
            <br />
            Types of Interfaces in HLD:
            <br />
            → Internal Module Interfaces: Define interactions between system
            components (e.g., Microservices, backend services). They specify
            data flow, communication methods (REST, gRPC), and protocols.
            <br />
            → External System Interfaces: Govern communication with third-party
            services or other systems (e.g., payment gateways, social media
            APIs).
            <br />
            → User Interfaces (UIs): Broad description of user interaction
            points (Web, Mobile, CLI), defining high-level user journeys and
            features, not pixel-perfect layouts.
            <br />
            Key Aspects Defined in HLD:
            <br />
            → Communication Protocols: What methods are used (e.g., HTTP,
            TCP/IP).
            <br />
            → Data Formats: Structure of data exchanged (e.g., JSON, XML).
            <br />
            → Interaction Patterns: Synchronous (RPC) vs. Asynchronous (Message
            Queues).
            <br />
            → Boundaries & Contracts: Establishes clear separation and
            dependencies between modules.
            <br />
            Why Interfaces are Critical in HLD:
            <br />
            → Modularity: Allows teams to work on components independently.
            <br />
            → Scalability & Flexibility: Easier to swap implementations (e.g.,
            different databases) without affecting other parts, as long as the
            interface contract is met.
            <br />
            → Clarity: Provides a big-picture view for stakeholders (devs, PMs,
            architects) on how the system fits together.
            <br />
            → Foundation for LLD: Interfaces define the "what" (the contract),
            while Low-Level Design defines the "how" (the specific
            code/nuts-and-bolts) for each module.
            <br />
            In a High-Level Design (HLD) document, the API schema is specified
            at a conceptual and interface level, focusing on what data is
            exchanged and how different macro-level components interact, rather
            than the minute implementation details. The detailed, code-level API
            and database schema design typically occur in the Low-Level Design
            (LLD) phase.
            <br />
            Role of API Schema in HLD
            <br />
            → The HLD uses API specifications to define the interfaces between
            system modules and external services, ensuring all stakeholders
            understand the "big picture" of data flow and communication
            protocols.
            <br />
            Key elements of the API schema in an HLD include:
            <br />→ Endpoint Definition: Identifying the primary resources and
            endpoints needed to meet the system's functional requirements.
            Examples: POST /users/register, GET /orders/{`{id}`}.
            <br />
            → Request/Response Formats: Specifying the data formats (e.g., JSON,
            XML) and high-level structure of the data exchanged (e.g., a User
            object has an id and name field).
            <br />
            → Authentication & Authorization Mechanisms: Outlining the security
            measures, such as OAuth 2.0 or JWT, without delving into the
            specific code implementation.
            <br />
            → Data Flow & Interaction Diagrams: Using sequence diagrams or
            architecture diagrams to visually illustrate how data moves between
            components via these APIs for specific use cases.
            <br />
            → Error Handling Overview: Defining a general strategy for error
            handling and the types of status codes used (e.g., 404 Not Found,
            500 Server Error).
            <br />→ Versioning Strategy: Mentioning how API changes will be
            managed in the future (e.g., /v1/users, /v2/users).
          </li>
          <li>
            Tech Choices:
            <br />
            → High-Level Design (HLD), tech stack choices involve selecting core
            technologies like databases (SQL/NoSQL), programming languages
            (Java, Python, Node.js, .NET), frameworks (Django, Spring),
            messaging queues (Kafka), caching (Redis), and infrastructure
            (Cloud, Serverless) to meet scalability, performance, and
            maintainability goals, focusing on what components are needed (APIs,
            Load Balancers, etc.) rather than how (low-level code). Key
            decisions center on architectural patterns, data flow, and
            communication protocols (REST, gRPC) for the overall system
            blueprint.
            <br />
            → Frontend HLD:
            <br />
            A frontend High-Level Design (HLD) defines the overall architecture
            (SPA/MPA, frameworks like React/Vue), component structure, routing,
            state management (Redux/Context), and API integration strategy
            (REST/GraphQL) for a user interface, focusing on what it does and
            how modules connect, not the specific code. The core tech stack
            involves HTML, CSS, JavaScript, extended with frameworks like React,
            Angular, or Vue, plus tools for performance, testing, and state
            management, forming the blueprint for a scalable, maintainable
            frontend.
            <br />
            Core Frontend Tech Stack (Building Blocks)
            <br />
            → HTML: Structure (HTML5).
            <br />
            → CSS: Styling & Layout (CSS3, Flexbox, Grid).
            <br />
            → JavaScript (JS): Behavior & Interactivity (ES6+).
            <br />
            Common Frameworks & Libraries
            <br />
            → React: Component-based library.
            <br />
            → Angular: Comprehensive framework.
            <br />
            → Vue.js: Progressive framework, often using Vite as a bundler.
            <br />
            → Next.js/Nuxt.js: Frameworks for React/Vue (SSR, SSG).
            <br />
            Key HLD Considerations & Decisions:
            <br />
            → Application Architecture: SPA (Single Page App) vs. MPA
            (Multi-Page App).
            <br />
            → Component Strategy: How to break down UI into reusable components
            (e.g., headers, cards).
            <br />
            → Routing: Client-side routing (React Router) for navigation.
            <br />
            → State Management: Redux, MobX, Context API, Zustand for complex
            state.
            <br />
            → API Integration: RESTful APIs or GraphQL.
            <br />
            → Performance: Optimizations for speed and responsiveness.
            <br />
            Supporting Tools & Concepts
            <br />
            → Build Tools: Webpack, Vite.
            <br />
            → Testing: Jest, Cypress.
            <br />
            → Styling: CSS-in-JS, Tailwind CSS.
            <br />
            → Design Tools: Figma.
            <br />
            → Micro-Frontends: For large-scale applications.
            <br />
            In essence, the frontend HLD uses these tools to map out the what,
            where, and how of the user-facing parts, ensuring a scalable and
            maintainable structure before diving into Low-Level Design (LLD) for
            specific code implementation.
          </li>
        </ul>
      </li>
      <li>
        Key Takeaways:
        <br />
        → For Junior developers, design questions can be straight forward (build
        something specific, like a chat UI, infinite list UI). For Senior
        developers, questions can be open ended (Build Insta, it is a big app,
        need to clarify what all modules to build)
        <br />
        → Do not assume things, clarify questions must be raised. Topic does not
        decide intent, if Insta is topic, do not assume just photos is the
        intent, can be many more things in it.
        <br />
        → Drive the interview with the interviewers intent and build what they
        want, not blindly spitting out some random solution posted online.
        <br />
        → System design is not about creating boxes, it is understanding the
        functional, non-functional requirements, APIs, etc and then we think
        about architecture. Do not directly jump on the architecture.
        <br />→ HLD is not about coding, it is just planning.
      </li>
    </ul>
  )
}
