# Docker Fundamentals: Images and Containers

## Docker Containers

### What is a Container?
A container is a runnable, isolated instance of processes and their dependencies, built from an image. Containers provide an isolated environment where applications can run with everything they need, without interfering with other processes on the host system or other containers.

Containers are managed by the Docker Engine, which handles their lifecycle from creation through execution to termination. Because containers share the host operating system's kernel rather than running their own complete OS, they are lightweight and start up quickly. This makes them ideal for modern application deployment where you might need to scale services up or down rapidly.

One important principle of containers is that they should ideally be stateless. This means any data that needs to persist beyond the container's lifetime should be stored in volumes rather than within the container itself. This approach allows containers to be easily replaced, updated, or scaled without losing important data.

### Creating and Running Containers

The `docker run` command both creates a new container from an image and starts it in one step. The `docker start` command is used to start a container that already exists but is stopped.

**Run container (create + start):**
```bash
docker run ubuntu
docker run -d nginx  # detached mode
docker run -it ubuntu  # interactive with terminal
```

**Common flags:**
- `-d` - detached mode (background)
- `-it` - interactive terminal
- `-p` - publish ports (`-p 8080:80`)
- `--name` - assign container name
- `-v` - mount volume
- `--env` - set environment variables

**Create without starting:**
```bash
docker create -p 80:80 nginx
docker start <container-id>
```

## Docker Images

### What is an Image?
A Docker image is a blueprint for a container - a template that defines everything needed to run an application. Images form a hierarchy where one image builds "FROM" another. Each image is named and tagged with versions (e.g., `ubuntu:latest`) and has a unique ID.

## Image vs Container

An image is a static template that defines what should run, similar to a class in object-oriented programming. A container is a running instance created from that image, similar to an object instantiated from a class. Images are immutable and serve as the blueprint, while containers are mutable during their runtime and add a writable layer on top of the image.

## Command Quick Reference

**Container Commands:**
- `docker run <image>` - create and start a container from an image
- `docker ps` - list running containers
- `docker ps -a` - list all containers (including stopped)
- `docker start <container>` - start a stopped container
- `docker stop <container>` - stop a running container
- `docker rm <container>` - remove a container
- `docker logs <container>` - view container logs
- `docker exec <container> <command>` - execute a command in a running container

**Image Commands:**
- `docker images` - list local images
- `docker pull <image>` - download an image from a registry
- `docker build -t <name> .` - build an image from a Dockerfile
- `docker rmi <image>` - remove an image
- `docker push <image>` - upload an image to a registry