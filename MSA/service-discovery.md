# Service Discovery and Registry

## The Problem

In a microservices architecture, services need to communicate with each other over the network. But how does Service A find Service B? In a monolithic application, components simply call functions directly—there's no need to locate anything. In a distributed system, services are deployed across multiple servers with dynamic IP addresses and ports. Services may scale up or down, move between hosts, or be replaced due to failures. Hardcoding service locations becomes impossible when instances are constantly changing. We need a mechanism for services to dynamically discover each other's network locations at runtime.

## Service Discovery

Service discovery is the process by which services automatically detect and locate each other in a distributed system. It provides a way for service instances to register their network locations and for other services to query and retrieve those locations. When a service starts up, it registers itself with the discovery system, providing its address and metadata. When a service needs to communicate with another service, it queries the discovery system to find available instances. This enables dynamic, flexible communication without hardcoded dependencies.

## Approaches to Service Discovery

### Client-Side Discovery
The client is responsible for determining the network locations of available service instances and load balancing requests across them. The client queries a service registry to get a list of available instances, then selects one using a load-balancing algorithm. Examples: Netflix Eureka, Consul.

**Advantages:** Client has direct control over load balancing; fewer network hops.
**Drawbacks:** Client must implement discovery logic for each language/framework; couples clients to the registry.

### Server-Side Discovery
The client makes a request to a load balancer or router, which queries the service registry and forwards the request to an available instance. The client doesn't need to know about the registry—the infrastructure handles discovery. Examples: AWS Elastic Load Balancer, Kubernetes Services.

**Advantages:** Simplified client logic; discovery logic is centralized; language-agnostic.
**Drawbacks:** Additional network hop through the load balancer; load balancer becomes a potential bottleneck or single point of failure.

## Service Registry

A service registry is a database of available service instances and their network locations. It acts as the central directory that enables service discovery by maintaining real-time information about which services are running and where they can be reached. Each entry typically includes the service name, IP address, port, and metadata like version or health status. Services register themselves when they start up and deregister when they shut down. The registry must stay current as services dynamically scale, fail, or move, making it a critical component in microservices architectures.

## Registry and Discovery Implementations

These tools provide both the registry (database) and discovery (query interface) capabilities:

- **Consul**: Service mesh with discovery, health checking, and KV store. DNS and HTTP interfaces.
- **Eureka**: Netflix's client-side discovery for AWS. Prioritizes availability (AP).
- **Kubernetes Services**: Built-in server-side discovery with DNS and virtual IPs.
- **etcd**: Distributed key-value store for service registration. Used by Kubernetes.
- **Zookeeper**: Centralized coordination service. Prioritizes consistency (CP).

## Service Discovery vs Load Balancing

While related, service discovery and load balancing serve different purposes. **Service discovery** answers "where are the available instances?" by maintaining a registry of service locations. **Load balancing** answers "which instance should handle this request?" by distributing traffic across available instances. Service discovery provides the list of targets; load balancing chooses among them. In practice, they often work together—discovery identifies the pool of instances, and load balancing distributes requests across that pool using algorithms like round-robin, least connections, or weighted distribution.