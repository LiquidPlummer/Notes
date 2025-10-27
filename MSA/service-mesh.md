# Service Mesh

## The Problem

As microservices systems grow, managing service-to-service communication becomes increasingly complex. Each service needs to handle service discovery, load balancing, retries, timeouts, circuit breaking, authentication, encryption, and observability. Implementing these concerns in every service creates duplication, inconsistency, and maintenance overhead across different languages and frameworks. Developers end up spending more time on infrastructure plumbing than business logic.

## What is a Service Mesh?

A service mesh is a dedicated infrastructure layer for managing service-to-service communication in a microservices architecture. It handles all network communication between services through a proxy deployed alongside each service instance (sidecar pattern). The mesh provides reliability, security, and observability features without requiring changes to application code. Services communicate through their local proxy, which handles all the complex networking concerns transparently.

## Architecture

### Data Plane
The data plane consists of lightweight proxies deployed as sidecars next to each service instance. All traffic between services flows through these proxies, which handle:
- Request routing and load balancing
- Service discovery
- Health checks
- Retries and timeouts
- Circuit breaking
- Encryption (mTLS)
- Metrics collection

**Common proxy:** Envoy (used by most service meshes)

### Control Plane
The control plane manages and configures the proxies. It provides:
- Configuration distribution to proxies
- Service discovery information
- Certificate management for mTLS
- Policy enforcement
- Telemetry aggregation

Operators interact with the control plane to configure routing rules, security policies, and traffic management.

## Key Features

### Traffic Management
Control how requests flow between services with features like:
- **Load balancing**: Multiple algorithms (round-robin, least connections, etc.)
- **Traffic splitting**: Route percentage of traffic to different versions (canary deployments, A/B testing)
- **Request routing**: Route based on headers, paths, or other criteria
- **Retries and timeouts**: Automatic retry logic with exponential backoff
- **Circuit breaking**: Prevent cascading failures

### Security
- **Mutual TLS (mTLS)**: Automatic encryption and authentication between services
- **Certificate management**: Automatic certificate rotation
- **Authorization policies**: Fine-grained access control between services
- **Service identity**: Strong service identity without application code changes

### Observability
Automatic collection of metrics, logs, and traces:
- **Metrics**: Request rates, latency, error rates for all service communication
- **Distributed tracing**: Track requests across multiple services
- **Access logs**: Detailed logs of all service-to-service calls
- **Service graphs**: Visualize dependencies and traffic flow

### Resilience
- **Circuit breakers**: Protect services from cascading failures
- **Rate limiting**: Control request rates per service
- **Fault injection**: Test resilience by injecting delays or errors
- **Retries**: Automatic retry with configurable policies

## Advantages

- **Centralized configuration**: Manage networking concerns in one place rather than per service
- **Language agnostic**: Works with services written in any language
- **No code changes**: Infrastructure concerns handled outside application code
- **Consistent observability**: Uniform metrics and tracing across all services
- **Enhanced security**: mTLS and authorization without application changes
- **Operational simplicity**: Easier to enforce policies and standards

## Drawbacks

- **Increased complexity**: Another system to deploy, configure, and maintain
- **Resource overhead**: Each service requires an additional sidecar proxy
- **Performance impact**: Additional network hop through proxy adds latency
- **Learning curve**: New concepts and configuration patterns to master
- **Debugging challenges**: Additional layer can complicate troubleshooting
- **Operational requirements**: Requires Kubernetes or similar orchestration platform

## When to Use a Service Mesh

**Good fit:**
- Large number of microservices (10+ services)
- Need consistent security, observability, or resilience across services
- Multiple teams working on different services
- Services written in multiple languages/frameworks
- Complex traffic management requirements

**Probably overkill:**
- Small number of services (< 10)
- Simple, monolithic applications
- Team can easily maintain networking libraries
- Performance is critical (latency sensitive)

## Common Service Mesh Implementations

### Istio
Most popular and feature-rich service mesh. Uses Envoy as data plane. Provides comprehensive traffic management, security, and observability. Steeper learning curve but powerful.

### Linkerd
Lightweight, simpler alternative to Istio. Focuses on ease of use and performance. Uses its own Rust-based proxy (linkerd2-proxy). Good for teams new to service meshes.

### Consul Connect
Service mesh from HashiCorp, integrated with Consul service discovery. Can use Envoy or built-in proxy. Works well if already using Consul.

### AWS App Mesh
Managed service mesh for AWS. Uses Envoy proxies. Integrates with AWS services like ECS, EKS, and EC2.

### Cilium Service Mesh
Uses eBPF for high-performance networking. Integrated with Cilium CNI. Lower overhead than sidecar-based meshes.

## Service Mesh vs API Gateway

These are complementary, not competing technologies:
- **API Gateway**: External clients → internal services (north-south traffic)
- **Service Mesh**: Internal service-to-service communication (east-west traffic)

Many architectures use both: API Gateway at the edge for external traffic, service mesh for internal communication.