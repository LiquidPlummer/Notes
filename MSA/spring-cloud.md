# Spring Cloud

## What is Spring Cloud?

Spring Cloud is a collection of tools and frameworks built on top of Spring Boot for developing distributed systems and microservices. It provides ready-made solutions for common microservices patterns like service discovery, configuration management, circuit breakers, and API gateways.

**Key Philosophy:** Convention over configuration with sensible defaults. Most features work with minimal setup.

## Core Components

### Spring Cloud Config

**Purpose:** Centralized external configuration management for distributed systems.

**The Problem:** Managing configuration across dozens of microservices is difficult. Hardcoded configs require rebuilds. Environment-specific properties scattered everywhere.

**The Solution:** Store all configuration in a central Git repository. Services fetch their config from a Config Server on startup. Changes can be refreshed without restarting services.

**Benefits:** Version-controlled configuration, environment-specific properties, no rebuilds for config changes, supports encryption for sensitive data.

**Example Setup:** Config Server reads from Git repo. Each microservice connects to Config Server and retrieves its properties based on service name and active profile (dev, prod, etc.).

### Spring Cloud Netflix Eureka

**Purpose:** Service discovery and registration.

**The Problem:** In microservices, service instances come and go dynamically. Hardcoding service locations doesn't work with auto-scaling or container orchestration.

**The Solution:** Services register themselves with Eureka Server on startup. Clients query Eureka to find available service instances. Includes health checking and automatic deregistration.

**How it Works:**
- Eureka Server maintains a registry of all services
- Services send heartbeats every 30 seconds
- Clients cache the registry locally and refresh periodically
- Failed services automatically removed from registry

**Benefits:** Dynamic service discovery, load balancing, fault tolerance.

**Note:** Netflix has mostly deprecated their OSS projects in favor of alternatives, but Eureka remains widely used.

### Spring Cloud Gateway

**Purpose:** API Gateway for routing and filtering requests.

**The Problem:** Clients shouldn't call microservices directly. Cross-cutting concerns like authentication, rate limiting, and logging need to happen somewhere.

**The Solution:** Single entry point that routes requests to appropriate microservices. Applies filters for security, logging, rate limiting, etc. Built on Spring WebFlux for reactive, non-blocking performance.

**Key Features:**
- Route matching based on path, headers, query params
- Predicates and filters (before/after request processing)
- Integration with service discovery
- Circuit breaker integration
- Rate limiting and request throttling

**Example:** Client calls `/api/orders` → Gateway routes to Order Service. Gateway applies authentication filter, adds correlation ID, rate limits the request.

### Spring Cloud Circuit Breaker

**Purpose:** Abstraction over circuit breaker implementations.

**The Problem:** Services need resilience patterns, but you shouldn't be locked into one library.

**The Solution:** Provides a common API that works with multiple circuit breaker libraries: Resilience4j, Sentinel, or Hystrix (deprecated).

**Usage:** Wrap service calls with circuit breaker. Define fallback methods for when circuit opens. Configure thresholds, timeouts, and recovery behavior.

**Benefits:** Library-agnostic API, easy fallback handling, integrates with Spring Cloud Gateway.

### Spring Cloud LoadBalancer

**Purpose:** Client-side load balancing.

**The Problem:** When multiple instances of a service exist, clients need to distribute requests across them.

**The Solution:** Replaces Netflix Ribbon (deprecated). Works with service discovery to fetch available instances and distributes requests using configurable strategies (round-robin, random, weighted).

**How it Works:** Integrated with RestTemplate or WebClient. When you call a service by name, LoadBalancer fetches instances from discovery and selects one.

**Example:** Call `http://order-service/api/orders` → LoadBalancer resolves to actual instance like `http://10.0.1.5:8080/api/orders`.

### Spring Cloud Stream

**Purpose:** Building message-driven microservices.

**The Problem:** Each message broker (Kafka, RabbitMQ) has different APIs. Switching brokers requires code changes.

**The Solution:** Abstraction layer over message brokers. Define inputs/outputs as Spring beans. Broker-specific details handled by binders.

**Key Concepts:**
- **Binders**: Connect to specific message systems (Kafka, RabbitMQ, etc.)
- **Bindings**: Bridge between app and message broker
- **Messages**: Spring Message objects with payload and headers

**Benefits:** Broker-agnostic code, easy testing, supports multiple brokers simultaneously.

### Spring Cloud Sleuth

**Purpose:** Distributed tracing for microservices.

**The Problem:** A single user request may span multiple services. Tracking the request flow and debugging failures is difficult.

**The Solution:** Automatically adds trace IDs and span IDs to requests. Each service logs these IDs. Integrates with Zipkin or other tracing systems for visualization.

**How it Works:**
- Generates unique trace ID for each request
- Creates span ID for each service hop
- Propagates IDs through HTTP headers, message headers, etc.
- Logs include trace/span IDs automatically

**Benefits:** End-to-end request tracking, performance analysis, easier debugging.

### Spring Cloud OpenFeign

**Purpose:** Declarative REST client.

**The Problem:** Writing REST client code is boilerplate-heavy. Manual handling of serialization, error handling, and retries.

**The Solution:** Define REST clients as Java interfaces with annotations. Feign generates the implementation. Integrates with Eureka, LoadBalancer, and Circuit Breaker automatically.

**Example:**
```java
@FeignClient(name = "order-service")
public interface OrderClient {
    @GetMapping("/api/orders/{id}")
    Order getOrder(@PathVariable Long id);
}
```

Feign handles service discovery, load balancing, and makes the HTTP call.

**Benefits:** Less boilerplate, automatic integration with Spring Cloud ecosystem, clean API.

## Spring Cloud vs. Spring Boot

**Spring Boot:** Foundation for building standalone Spring applications with embedded servers, auto-configuration, and production-ready features.

**Spring Cloud:** Built on top of Spring Boot, adds distributed systems patterns specifically for microservices.

You always use Spring Boot. You add Spring Cloud when building microservices.

## Common Architecture Pattern

1. **Config Server**: Centralized configuration
2. **Eureka Server**: Service registry
3. **API Gateway**: Single entry point
4. **Microservices**: Register with Eureka, fetch config from Config Server, communicate via Feign or messaging
5. **Tracing**: Sleuth + Zipkin for distributed tracing
6. **Resilience**: Circuit breakers for fault tolerance

## Alternatives

Many organizations now use Kubernetes-native alternatives:
- **Service Discovery**: Kubernetes DNS instead of Eureka
- **Config Management**: Kubernetes ConfigMaps/Secrets instead of Config Server
- **API Gateway**: Kong, Nginx, or cloud provider solutions
- **Service Mesh**: Istio or Linkerd instead of client-side patterns

Spring Cloud still valuable for non-Kubernetes deployments or when you want Spring-native solutions.
