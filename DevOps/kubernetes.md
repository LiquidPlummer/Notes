# Kubernetes

## What is Kubernetes?

Kubernetes (K8s) is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. Originally developed by Google and now maintained by the Cloud Native Computing Foundation, it's become the industry standard for running containers at scale.

At its core, Kubernetes solves the problem of managing hundreds or thousands of containers across multiple machines. Instead of manually starting containers, monitoring their health, and restarting them when they fail, Kubernetes handles all of this automatically. You declare what you want your application to look like (how many instances, what resources they need, how they should be updated), and Kubernetes works continuously to make reality match your desired state.

## Kubernetes Architecture

Kubernetes uses a cluster architecture with two main types of machines: the control plane and worker nodes. The control plane manages the cluster and makes decisions about where to run workloads, while worker nodes are where your actual applications run.

### Control Plane Components

The control plane is the brain of the cluster. The **API Server** acts as the front door - all communication with the cluster goes through it. The **Scheduler** decides which worker node should run each new workload based on resource availability and constraints. The **Controller Manager** runs various controllers that watch the cluster state and make changes to match your desired configuration, like ensuring the right number of pods are running. The **etcd** database stores all cluster data and configuration as the single source of truth.

### Worker Nodes and Kubelet

Worker nodes are the machines that actually run your containerized applications. Each worker node runs a few key processes. The **kubelet** is an agent that communicates with the control plane and manages the containers on that node - it receives instructions about what containers to run and ensures they stay healthy. The container runtime (like Docker or containerd) actually runs the containers. The **kube-proxy** handles networking, routing traffic to the correct containers.

## Core Concepts

### Pods

A Pod is the smallest deployable unit in Kubernetes and represents one or more containers that should run together. Typically a Pod contains a single container, but you might have multiple containers in a Pod if they need to share resources and are tightly coupled. Containers in the same Pod share networking (they can talk to each other via localhost) and can share storage volumes. Pods are ephemeral - they can be created, destroyed, and recreated at any time.

### ReplicaSets

A ReplicaSet ensures that a specified number of identical Pod replicas are running at all times. If a Pod crashes or gets deleted, the ReplicaSet automatically creates a new one to replace it. If you want to run 5 copies of your application for load balancing, the ReplicaSet maintains exactly 5 Pods, creating new ones if they die and removing extras if there are too many. You rarely create ReplicaSets directly - instead you use Deployments which manage ReplicaSets for you.

### Deployments and Services

Deployments sit above ReplicaSets and provide declarative updates and rollback capabilities. When you want to update your application to a new version, the Deployment manages rolling out the change gradually. Services provide stable networking endpoints for your Pods, since Pod IPs change when they're recreated. A Service gives you a consistent DNS name and IP that routes traffic to the healthy Pods behind it.

## Managed Kubernetes Solutions

### AWS EKS (Elastic Kubernetes Service)

AWS EKS is Amazon's managed Kubernetes service that handles the heavy lifting of running the control plane. AWS manages, scales, and maintains the control plane nodes across multiple availability zones for high availability. You only worry about your worker nodes and applications.

EKS integrates deeply with AWS services like IAM for authentication, VPC for networking, ELB for load balancing, and EBS/EFS for storage. It automatically patches and updates the Kubernetes control plane, handles etcd backups, and provides monitoring through CloudWatch. You can run worker nodes on EC2 instances you manage, use managed node groups where AWS handles node updates, or go serverless with Fargate where you don't manage nodes at all.

Other major cloud providers offer similar managed Kubernetes services - Google has GKE (Google Kubernetes Engine) which pioneered managed Kubernetes, and Azure offers AKS (Azure Kubernetes Service). All abstract away control plane management while giving you full Kubernetes functionality.