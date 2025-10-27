# Common Microservices Patterns

## Circuit Breaker

### The Problem
When a service fails or becomes slow, clients that depend on it may wait for timeouts, causing cascading failures throughout the system. Repeated calls to a failing service waste resources and can bring down the entire system.

### The Solution
The circuit breaker pattern monitors calls to a service and "opens the circuit" when failures exceed a threshold, immediately returning an error instead of attempting the call. After a timeout period, it allows a few test requests through ("half-open" state). If they succeed, the circuit closes and normal operation resumes.

**States:**
- **Closed**: Normal operation, requests pass through
- **Open**: Service is failing, requests fail immediately without calling the service
- **Half-Open**: Testing if service has recovered

**Benefits:** Prevents cascading failures, gives failing services time to recover, provides fast failures instead of hanging requests.

**Implementations:** Netflix Hystrix (deprecated), Resilience4j, Polly (.NET).

## Publish/Subscribe (Pub/Sub)

### The Problem
Services need to communicate events without tight coupling. Direct service-to-service calls create dependencies that make the system brittle and difficult to evolve.

### The Solution
Pub/Sub decouples services through asynchronous messaging. Publishers emit events to topics without knowing who will consume them. Subscribers listen to topics they're interested in without knowing who publishes. A message broker handles delivery.

**Example:** When a user places an order, the Order Service publishes an "OrderCreated" event. The Inventory Service, Shipping Service, and Analytics Service all subscribe to this event and react independently.

**Benefits:** Loose coupling, easy to add new consumers, natural asynchronous processing, better scalability.

**Drawbacks:** Eventual consistency, harder to debug, requires message broker infrastructure.

**Implementations:** Apache Kafka, RabbitMQ, AWS SNS/SQS, Google Pub/Sub, Redis Pub/Sub.

## Saga Pattern

### The Problem
Distributed transactions across multiple services are difficult. Traditional ACID transactions don't work well in microservices because each service owns its own database.

### The Solution
A saga is a sequence of local transactions where each service updates its own database and publishes an event. If one step fails, compensating transactions undo the previous steps.

**Example:** Booking a trip requires reserving a flight, hotel, and car. If the car reservation fails, the saga executes compensating transactions to cancel the flight and hotel.

**Two Approaches:**
- **Choreography**: Each service listens for events and knows what to do next (decentralized)
- **Orchestration**: A central coordinator tells each service what to do (centralized)

**Benefits:** Maintains data consistency without distributed transactions.

**Drawbacks:** Complex to implement, difficult to debug, must design compensating transactions carefully.

## Bulkhead Pattern

### The Problem
When one service or resource pool becomes overwhelmed, it can consume all available resources (threads, connections) and starve other parts of the system.

### The Solution
Isolate resources into separate pools (bulkheads), just like compartments in a ship. Each service or operation gets its own resource pool. If one pool is exhausted, others continue functioning.

**Example:** Create separate thread pools for different downstream services. If Service A becomes slow and exhausts its thread pool, threads for Service B remain available.

**Benefits:** Prevents resource exhaustion from spreading, contains failures, maintains partial system availability.

## Retry Pattern

### The Problem
Temporary network issues or service hiccups can cause requests to fail, even though the service would succeed if tried again moments later.

### The Solution
Automatically retry failed requests with a strategy to avoid overwhelming the service.

**Strategies:**
- **Fixed Delay**: Wait a constant time between retries
- **Exponential Backoff**: Increase wait time exponentially (1s, 2s, 4s, 8s...)
- **Exponential Backoff with Jitter**: Add randomness to prevent thundering herd

**Important:** Implement maximum retry limits and only retry idempotent operations (safe to repeat).

**Benefits:** Handles transient failures automatically, improves reliability.

**Drawbacks:** Can increase latency, may overwhelm recovering services without proper backoff.

## Sidecar Pattern

### The Problem
Cross-cutting concerns like logging, monitoring, and service mesh functionality require similar code in every service, violating DRY principles and creating maintenance burden.

### The Solution
Deploy a helper process (sidecar) alongside each service instance. The sidecar handles cross-cutting concerns while the main service focuses on business logic. They share the same lifecycle and resources.

**Example:** Envoy proxy runs as a sidecar to handle service mesh communication, leaving services to focus only on business logic.

**Benefits:** Language-agnostic, centralized implementation of cross-cutting concerns, separates infrastructure from business logic.

**Used by:** Service meshes like Istio, Linkerd.