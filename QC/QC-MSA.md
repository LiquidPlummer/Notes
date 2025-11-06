# Unit: Microservices


* [Critical](#importance-critical)
* [High](#importance-high)
* [Regular](#importance-regular)

## Exit Criteria

Upon completion of these units, an associate should be able to...

### Fundamentals

* Understand the pros/cons of a MSA
* Compare/contrast a MSA and a Monolithic architecture
* Create Services using the Single Responsibility Principle
* Create individual databases for each service
* Be able to communicate between Services through one of many ways (HTTP, Messaging Queue, etc.)
* Create/configure a gateway
* Create/configure a discovery server
* Set up a circuit breaker to prevent cascading failure
* Know of multiple technologies/options that can satisfy the requirements above

### Intermediate

* Set up horizontal scaling for Services in high demand
* Manage load balancing for horizontally scaled Services
* Understand the relation between MSA and SOA
* Implement a solution to Eventual Consistency of Data

### Importance: CRITICAL

[Back to top](#unit-microservices)

* Compare the microservice and monolithic architectures. What are the advantages / disadvantages of each?
  * Monolith - all code deployed together in single, large application
    * Harder to scale, single point of failure
    * Easier to deploy
    * Code can get messy, complex, tightly coupled
  * Microservices - application composed of independently deployed services
    * Services governed by single responsibility principle
    * Enforces loose coupling of application
    * Complex to deploy and manage relative to monolith
    * Easier to scale
    * Teams can work independently on different services

* Can a Java microservice communicate with a Node.js microservice? Why or why not?
  * Yes, this is polyglot pattern and a benefit of microservices
  * Services communicate through requests sent to APIs, typically use JSON or XML data formats (language agnostic)

* What's the difference between horizontal and vertical scalability? Which way do monoliths and microservices typically scale?
  * Vertically scale - upgrade single server CPU, memory, storage, etc
  * Horizontal scale - replicate service on another server
  * Monoliths - typically vertically scale; harder / costly to scale horizontal
  * Microservices - typically scale horizontal; easier with smaller services

* What are some best practices for building microservices?
  * Keep services independent and minimize dependencies where possible
  * Have each service manage its own data store / database; other services access the data through its API
  * Use distributed logging, tracing, and monitoring tools
  * Implement circuit breaking pattern for fault tolerance
  * Containerize each service for rapid deployment and scaling of infrastructure

* What is a Discovery Service, and how does Netflix Eureka Server fit into microservices architecture?
  * Which is responsible for tracking the locations of services in a microservices architecture. 
  * Netflix Eureka Server is a popular example that allows services to register themselves and discover other services via a REST API. It facilitates dynamic scaling and load balancing.

* What is Consul? How does it support service discovery?
  * Consul is a distributed service mesh solution by HashiCorp. 
  * It provides features such as service discovery, health checking, and key-value storage. Consul agents running on each node communicate with each other to maintain a consistent view of services and their health states.

* What is a Config Server in microservices architecture?
  * It centralizes external configuration for applications in a distributed system. 
  * Allows microservices to retrieve configuration properties dynamically at runtime without redeploying the services.

* What is Distributed Tracing, and why is it important?
  * Distributed Tracing is a technique used to monitor and profile microservices-based applications. 
  * It tracks requests as they propagate through multiple services, providing insights into performance bottlenecks, latency issues, and dependencies between services.

### Importance: HIGH

[Back to top](#unit-microservices)

* How do you solve the different problems inherent to microservices?
  * Use container orchestration tools for deployment (i.e. Kubernetes)
  * Use service discovery and API gateway to route requests

* How large should each service in a microservice be?
  * Follow single responsibility principle

* Explain strong vs eventual consistency and which one applies to microservices?
  * Eventual consistency applies - data may be inconsistent between services for a while until messages get resolved

* What is a messaging queue and how is using one different from calling service APIs directly?
  * Messaging queues store messages that other services consume
  * Prevents messages / data from being lost in network outage or service disruption
  * Keeps services loosely coupled; not dependent on other service API

* What is load balancing, and why is it important in microservices?
  * It is the distribution of incoming network traffic across multiple servers.
  * which ensures that requests are evenly distributed among service instances to optimize resource utilization and improve performance.

* What is an API Gateway?
  * Server that acts as an entry point into a microservices architecture. 
  * It provides a single, unified interface to the clients and handles tasks such as routing, authentication, rate limiting, and API composition.


* Explain horizontal scaling vs. vertical scaling in the context of microservices.
  * **Horizontal Scaling:** Adding more instances of a service to distribute load across multiple machines or nodes.
  * **Vertical Scaling:** Increasing the resources (CPU, memory) of an individual service instance to handle more load on a single machine.

* What is a "replica"?
  * A copy of a service; e.g. one service may be replicated n times across servers when horizontal scaling required

* What is the circuit breaker pattern? What are the different circuit states?
  * Monitor status of services, if one is unavailable, provide a fallback implementation
  * Prevent cascading failure in the system if other services depend on unavailable service
  * Circuit state changes from "closed" to "open" (breaker triggered) when number of unsuccessful requests exceed a threshold

### Importance: REGULAR

[Back to top](#unit-microservices)

* What are microservices?
  * An architectural style that structures an application as a collection of small, autonomous services, modeled around a business domain. 
  * Each service is independently deployable, scalable, and communicates with lightweight mechanisms like HTTP or messaging queues.

* How do microservices differ from monolithic applications?
  * Monolithic applications are built as a single, indivisible unit where all components are interconnected and interdependent. 
  * In contrast, microservices break down the application into smaller, independent services that can be developed, deployed, and scaled separately.

* What are the characteristics of a Microservices Architecture (MSA)?
  * **Decentralized Data Management:** Each microservice manages its own database or data store.
  * **Componentization via Services:** Application components are loosely coupled, independently deployable services.
  * **Infrastructure Automation:** Emphasis on automation of deployment, scaling, and management processes.
  * **Design for Failure:** Services are designed to handle failures gracefully.
  * **Continuous Delivery:** Each service can be deployed independently using automated CI/CD pipelines.

* What are the advantages of using microservices?
  * **Scalability:** Individual services can be scaled independently based on demand.
  * **Flexibility:** Easier to adopt new technologies and update individual services without affecting the entire application.
  * **Fault Isolation:** Failures in one service do not necessarily impact the entire application.
  * **Improved Maintainability:** Smaller, focused codebases are easier to understand and maintain.
  * **Team Autonomy:** Different teams can work on different services simultaneously.

* What are the disadvantages of microservices?
  * **Complexity:** Increased operational complexity due to the distributed nature of services.
  * **Network Latency:** Communication overhead between services can impact performance.
  * **Data Management:** Handling transactions and data consistency across multiple services is challenging.
  * **Increased Overhead:** Requires more effort in designing and managing deployment and monitoring.
  * **Testing Complexity:** Integration testing becomes more complex due to dependencies between services.

* What's the difference between a MSA (microservice architecture) and a SOA (service-oriented architecture)?
  * MSA (microservice architecture) is an extension of SOA to services within an application

### Netflix Stack

* Explain the Netflix OSS stack for microservices (Eureka, Zuul, Hystrix)
* How would you setup and configure Eureka? Zuul? Hystrix?
* What is the purpose of an API gateway and how does Zuul perform this?
* What is service discovery and how does Eureka do this?
* Is there any order in which you need to spin up these services?
* One of my microservices is throwing a TransportException! What might be the problem?
