# QC Study for Kubernetes

What is Kubernetes?
  - A containerization solution

Why do we use kubernetes?
  - Automates the process managing, creating, destroying, copying containers

How does kubernetes do orchistration?
  - There is an object called a kublet which exposes an API within a node for kubernetes to manage that node and it's contents.
What is a node?
  - The node is kubernetes lowest level abstraction of hardware, or the smallest unit of hardware that k8s can work with.
  - As far as k8s is concerned a node is a server, it's basically a VM on which k8s runs pods.

What is a cluster?
  - a cluster of nodes, these nodes are basically logical representations of hardware like VMs, and clusters are groupings of this hardware on which to run nodes, which run pods.

What is a pod?
  - smallest unit of software that kubernetes handles, represents a series of running processes and supporting environment and libraries, frameworks, etc. <- this is basically describing containers.
  - A pod is one or more containers which act together to do work, these get scaled together, kubernetes orchistrates pods, not containers.
