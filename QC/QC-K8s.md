## Unit

# Kubernetes

## Links

* [Required Questions](#required-questions)
* [Preferred Questions](#preferred-questions)
* [Stretch Questions](#stretch-questions)

## Required Questions

[Back to top](#unit)

* **What is Kubernetes?**
  * Keywords, concepts, or topics that should be in the response:
    * Is an open-source system for automating deployment, scaling, and management of containerized applications

* **What is Kubernetes used for?**
  * Keywords, concepts, or topics that should be in the response:
    * It's used to create applications that are easy to be managed and deployed anywhere in the world
  * Possible follow-up questions:
    * **What are some common use cases for Kubernetes?**
      * Increasing development velocity
        * K8s supports containerization of existing apps, which lets us develop apps faster
      * Deploying applications anywhere
        * K8s is built to be used anywhere, allowing us to run our apps where we need them
      * Running efficient services
        * K8s automatically adjusts the size of a cluster required to run a service, thus auto-scaling our apps up or down based on the demand and run them as efficient as possible

* **What are the benefits of using Kubernetes?**
  * Keywords, concepts, or topics that should be in the response:
    * Automated operations
      * K8s has built-in commands to do the heavy lifting for application management
    * Infrastructure abstraction
      * K8s handles the computing, networking, and storage for our workloads so we don't have to worry about them
    * Service health monitoring
      * K8s runs health checks against our services

* **What is container orchestration?**
  * Keywords, concepts, or topics that should be in the response:
    * A software that can deploy and manage containerized applications

* **What is a Cluster in Kubernetes?**
  * Keywords, concepts, or topics that should be in the response:
    * A collection of nodes that are all controlled by a single Kubernetes control plane
  * Possible follow-up questions:
    * **Can a Cluster have virtual machines added or subtracted from them?**
      * Yes

* **What is a Node in Kubernetes?**
  * Keywords, concepts, or topics that should be in the response:
    * A virtual machine or physical machine controlled by the Kubernetes Control Plane
    * A Kubelet program on a node that connects it to the control plane

* **What is a Control Plane for Kubernetes?**
  * Keywords, concepts, or topics that should be in the response:
    * The brain of a cluster
    * It controls the nodes that are on the cluster

* **What is a Kubelet?**
  * Keywords, concepts, or topics that should be in the response:
    * It's an agent that runs on each node in the cluster
    * Makes sure that containers are running in a pod
    * Takes a set of PodSpecs that are provided through various mechanisms and ensures that the containers described in those PodSpecs are healthy
    * Does not manage containers that are not created by K8s

* **What is a Pod in Kubernetes?**
  * Keywords, concepts, or topics that should be in the response:
    * Smallest atomic unit of computing in K8s
    * Your containers and programs run in pods
    * A self contained process
    * Most pods are a single container
  * Possible follow-up questions:
    * **Can we have multiple containers running in 1 pod?**
      * Yes, but most pods run only a single container

* **What is a label in a pod?**
  * Keywords, concepts, or topics that should be in the response:
    * Key value pairs
    * They don't do anything themselves
    * They serve as a way to identify and select pods

* **What is a Service in Kubernetes?**
  * Keywords, concepts, or topics that should be in the response:
    * An object that `EXPOSES` a pod(s) to other pods or the outside internet

## Preferred Questions

[Back to top](#unit)

* **What are some key terms we would find in our K8s yaml file? Can you describe what each key term is doing?**
  * Keywords, concepts, or topics that should be in the response:
    * Kind
      * The type of object you are creating
    * metadata
      * High level info about the object
      * Used by controllers to identify and connect objects for the desired state
    * name
      * The custom name of the object you are creating
    * annotations
      * Modify the K8s object
      * Used to add additional functionality to the object
    * spec
      * Technical specifications of the object you are creating

* **How can we go about configuring our Ingress resource?**
  * Keywords, concepts, or topics that should be in the response:
    * We can configure our Ingress resource by adding a `.yaml` file
  * Possible follow-up questions:
    * **What are some keywords that we would see in our Ingress resource `.yaml` file?**
      * `apiVersion`
      * `kind`
      * `metadata`
        * Here is where we can add the `name` or `annotations`
      * `spec`
        * Under the `spec` is where we would add the `ingressClassName`

* **If we wanted to configure our load balancer or proxy server for our Ingress resource, how would we be able to do so?**
  * Keywords, concepts, or topics that should be in the response:
    * We can do that in the Ingress `spec` in the `.yaml` file

* **What is Kubectl?**
  * Keywords, concepts, or topics that should be in the response:
    * K8s provides a command line tool for communicating with a K8s cluster's control plane
  * Possible follow-up questions:
    * **What are some common Kubectl commands that you know about and what do they do?**
      * `kubectl get services`
        * Gets a list of all services in the current namespace
      * `kubectl get pods --all-namespaces`
        * Get a list of services in **ALL** namespaces
      * `kubectl get nodes`
        * Gets the node's name, status, etc.
      * `kubectl create ns any-name-here`
        * Create a new namespace
      * `kubectl apply -f config.yaml`
        * Use our config file and alter our resources
      * `kubectl cluster-info`
        * Display endpoint info for our masters and services
      * `kubectl logs -f service-name`
        * Request service logs
      * `kubectl get secrets`
        * Fetch a list of all K8s secrets
      * `kubectl get events`
        * Fetch a list of all resource-based events

* **What is Ingress?**
  * Keywords, concepts, or topics that should be in the response:
    * An API object that manages external access to the services in the cluster, typically HTTP
    * May also provide load balancing, SSL termination and name-based virtual hosting

* **What is an Ingress Controller?**
  * Keywords, concepts, or topics that should be in the response:
    * In order for the Ingress resource to work, a cluster `must` have an ingress controller running

## Stretch Questions

[Back to top](#unit)

* **If our Ingress has no rules where would it send all the traffic?**
  * Keywords, concepts, or topics that should be in the response:
    * It would send all the traffic to a single default backend
    * The `.spec.defaultBackend` is the backend that should handle requests in this case
    * If no `.spec.rules` are specified, `.spec.defaultBackend` must be specified
    * If `defaultBackend` is not set, the requests that don't match any rules will be up to the Ingress controller

* **What are Path types for Ingress?**
  * Keywords, concepts, or topics that should be in the response:
    * Each path in an Ingress is `required` to have a corresponding path type
    * IF a path does not include an explicit `pathType` it will fail validation

* **What is Helm in terms of Kubernetes?**
  * Keywords, concepts, or topics that should be in the response:
    * Helm helps us manage our K8s app

* **What are Helm Charts?**
  * Keywords, concepts, or topics that should be in the response:
    * A chart is a collection of files that describe a related set of K8s resources

* **What are some Helm Chart Types?**
  * Keywords, concepts, or topics that should be in the response:
    * There are 2 types
    * `application`
      * This is the default type and it's the standard chart which can be operated on fully
    * `library`
      * Provides utilities or functions for the chart builder
  * Possible follow-up questions:
    * **What's the difference between a `library chart` and an `application chart`?**
      * A `library chart` is not installable and usually doesn't contain any resource objects
      * An `application chart` can be used as a library chart if we set the type to `library`

* **What are Helm Chart Dependencies?**
  * Keywords, concepts, or topics that should be in the response:
    * One Helm chart may depend many other Helm Charts  
  * Possible follow-up questions:
    * **How can we link the dependencies together?**
      * We can link these dependencies dynamically using the `dependencies` field in `Chart.yaml`
      * Brought into the `charts/` directory and managed manually by the developer
