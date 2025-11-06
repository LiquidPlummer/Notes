## Unit

# Docker

## Links

* [Required Questions](#required-questions)
* [Preferred Questions](#preferred-questions)
* [Stretch Questions](#stretch-questions)

## Required Questions

[Back to top](#unit)

* What is a container? How is it different from a virtual machine?
  * Containers are lightweight, they can share the underlying OS
  * Containers package only the app and the environment needed to run the app
  * Containers keep environments consistent for every deployment and isolate them from the rest of the system

* What is a Docker image? Container?
  * An image is like blueprint for a container
  * An image is readonly, like a file; container is the instantiation and contains the running application

* How is a Docker image different from a Docker container? How are the read/write layers different?
  * Docker containers are built in layers; each line in a Dockerfile adds a layer
  * A container adds a write layer
  * When an image needs to be rebuilt, only the layer that changed needs to be built

* List the steps to start Docker, create a Docker image, and spin up a container
  1. Write a Dockerfile
  2. Build the image `docker build <pathToDockerfile>` (or, pull an image from DockerHub)
  3. Spin up the container `docker run <imageName>`

## Preferred Questions

[Back to top](#unit)

* What are some other Docker commands?
  * `docker container ls`
  * `docker attach`
  * `docker kill`
  * `docker help`
  * `docker inspect`

## Stretch Questions

[Back to top](#unit)

* What is the Docker Daemon?
  * Underlying process that runs and manages the docker containers

* What is a container registry? How would you retrieve and upload images to DockerHub?
  * Holds images, either public or private
  * Use `docker pull` and `docker push` to upload/download images

* What is Docker compose and why is it useful?
  * Write a yml config file for spinning up multiple containers at once

* If you want to store state for a container, how does Docker recommend doing that?
  * Use a volume or connect to external state management service
  * Volumes are file systems mounted to a container and exist on the host independent of the container

* What is the benefit to an image being built in Layers?
  * Images can be composed from base images and keeps them lightweight / smaller size
