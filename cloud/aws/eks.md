# EKS (Elastic Kubernetes Service)

## What is EKS?

EKS is AWS's managed Kubernetes service. Kubernetes is an open-source container orchestration platform that automates deploying, scaling, and managing containerized applications. AWS manages the Kubernetes control plane (API servers, scheduling, state management) while you manage worker nodes that run your containers.

## Why Kubernetes?

Kubernetes automates container management at scale. You declare desired state (run 5 replicas of this container) and Kubernetes maintains it—restarting failed containers, distributing load, and rolling out updates. It's portable across cloud providers and has a massive ecosystem of tools.

## EKS Architecture

An EKS cluster has two parts: the **control plane** (AWS-managed, runs in AWS VPC across multiple AZs) and the **data plane** (your worker nodes in your VPC where containers actually run).

You interact with the control plane via kubectl or APIs. AWS handles control plane updates and availability. Your worker nodes execute the containerized workloads.

## Node Types

- **Self-managed nodes** - EC2 instances you fully manage (AMIs, scaling, patching)
- **Managed node groups** - AWS handles provisioning, updates, and lifecycle for EC2 nodes
- **Fargate** - Serverless, no node management, AWS runs each pod in isolated compute

Most use managed node groups for simplicity. Fargate is easiest but more expensive with some limitations.

## Kubernetes Basics

**Pods** are the smallest unit—one or more containers that share networking and storage. Pods are ephemeral.

**Deployments** maintain a specified number of pod replicas, recreating them if they fail.

**Services** provide stable networking endpoints and load balance across pod replicas. Types include ClusterIP (internal), LoadBalancer (creates ELB), and NodePort.

**Namespaces** isolate resources within a cluster for organization.

**ConfigMaps and Secrets** store configuration and sensitive data consumed by pods.

## Networking

EKS uses AWS VPC CNI—each pod gets an IP from your VPC subnet. Pods communicate with AWS services using VPC routing and security groups.

Worker nodes run in your VPC subnets (typically private with NAT gateway). The AWS Load Balancer Controller integrates Services with ALB/NLB for external access.

## Pricing

You pay $0.10/hour for each EKS cluster (control plane) plus costs for worker nodes (EC2 or Fargate), storage, load balancers, and data transfer. Fargate is more expensive per pod than EC2 but eliminates node management overhead.