# Load Balancing in Microservices

## The Problem

When a service scales horizontally by running multiple instances, incoming requests need to be distributed across those instances. Without load balancing, all traffic might hit one instance while others sit idle, or clients would need to manually choose which instance to call. We need a mechanism to distribute requests evenly and efficiently across available service instances to maximize throughput, minimize response time, and ensure no single instance becomes overwhelmed.

## What is Load Balancing?

Load balancing distributes incoming network traffic across multiple server instances to ensure no single instance bears too much load. A load balancer sits between clients and service instances, receiving requests and forwarding them to healthy instances based on a distribution algorithm. It monitors instance health and routes traffic only to instances that can handle requests, improving both availability and performance.

## Load Balancing Strategies

### Round Robin
Requests are distributed sequentially to each instance in rotation. Simple and fair, but doesn't account for instance capacity or current load.

### Least Connections
Routes requests to the instance with the fewest active connections. Better for long-lived connections but requires tracking connection state.

### Weighted Distribution
Assigns a weight to each instance based on capacity. More powerful instances receive proportionally more traffic.

### IP Hash
Uses the client's IP address to determine which instance receives the request. Ensures the same client always reaches the same instance (session affinity).

### Random
Selects an instance randomly. Simple and surprisingly effective for stateless services.

### Least Response Time
Routes to the instance with the fastest response time. Requires health checks that measure latency.

## Client-Side vs Server-Side Load Balancing

### Server-Side Load Balancing
A dedicated load balancer component receives all requests and distributes them to instances. The client is unaware of multiple instances.

**Advantages:** Centralized control, simpler clients, language-agnostic.
**Drawbacks:** Additional network hop, potential single point of failure.
**Examples:** NGINX, HAProxy, AWS ELB, hardware load balancers.

### Client-Side Load Balancing
The client obtains a list of available instances (via service discovery) and chooses which instance to call.

**Advantages:** Eliminates extra network hop, no single point of failure.
**Drawbacks:** More complex client logic, must implement in each language/framework.
**Examples:** Netflix Ribbon, Spring Cloud LoadBalancer.

## Health Checks

Load balancers need to know which instances are healthy. Health checks are periodic requests to verify an instance can handle traffic. Unhealthy instances are automatically removed from the pool until they recover.

**Active Health Checks:** Load balancer actively probes instances at regular intervals.
**Passive Health Checks:** Load balancer monitors actual request/response patterns to detect failures.

## Session Affinity (Sticky Sessions)

Some applications require requests from the same client to always reach the same instance (e.g., for session state). Load balancers can use cookies or IP hashing to maintain affinity. However, this reduces the benefits of load balancing and can create uneven distribution. Better practice: design services to be stateless and store session data externally.

## Common Load Balancer Implementations

- **NGINX**: High-performance web server and reverse proxy with load balancing
- **HAProxy**: Reliable, high-performance TCP/HTTP load balancer
- **AWS Elastic Load Balancer (ELB)**: Managed load balancing service (ALB for HTTP, NLB for TCP)
- **Kubernetes Service**: Built-in load balancing via kube-proxy using iptables or IPVS
- **Envoy**: Modern proxy designed for cloud-native applications and service meshes
- **Traefik**: Dynamic load balancer with automatic service discov