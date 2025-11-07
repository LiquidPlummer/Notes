# Elastic Beanstalk

## What is Elastic Beanstalk?

Elastic Beanstalk is AWS's Platform-as-a-Service (PaaS) that simplifies deploying and managing web applications. You upload your application code and Beanstalk automatically handles deployment, capacity provisioning, load balancing, auto-scaling, and health monitoring. You retain full control over the underlying AWS resources but don't need to manage them manually.

Beanstalk is ideal when you want to focus on writing code rather than configuring infrastructure. It's free—you only pay for the AWS resources it provisions (EC2, RDS, load balancers, etc.).

## Supported Platforms

Beanstalk supports multiple platforms and languages:

- **Java** - with Tomcat, using JAR or WAR files
- **Node.js** - JavaScript runtime
- **Python** - web frameworks like Django and Flask
- **.NET** - on Windows Server with IIS
- **PHP** - common web scripting language
- **Ruby** - with Passenger or Puma
- **Go** - compiled Go applications
- **Docker** - single or multi-container Docker environments

Each platform has multiple versions. You can also create custom platforms if your stack isn't supported.

## Core Concepts

An **application** is the logical container for your project. Within an application, you create **environments** (like dev, staging, production). Each environment runs a specific version of your application code.

An **application version** is a deployable package of your code—a ZIP file or WAR file stored in S3. You can deploy different versions to different environments or roll back to previous versions.

Environments are the actual running instances of your application with all provisioned AWS resources. You can have multiple environments for the same application.

## Environment Tiers

Beanstalk offers two environment tiers based on your application architecture.

**Web server environments** handle HTTP requests and run web applications. Beanstalk provisions EC2 instances behind a load balancer. Users access your application through the load balancer, which distributes traffic across instances. This tier is for standard web apps, APIs, and websites.

**Worker environments** process background tasks from an SQS queue. Beanstalk provisions EC2 instances that poll the queue and run your code against each message. There's no load balancer since users don't directly access workers. Use this tier for async processing, scheduled tasks, or long-running jobs.

You can combine both tiers—a web environment handles user requests while a worker environment processes jobs added to the queue.

## Environment Configuration

Beanstalk lets you customize environment behavior through configuration options. You can modify instance types, auto-scaling rules, environment variables, database connections, and more.

**Configuration presets** offer quick templates: single instance (for dev/test), load balanced (for production with auto-scaling), or custom. Single instance runs one EC2 instance without a load balancer—cheap but not fault-tolerant. Load balanced uses an Auto Scaling group and Elastic Load Balancer for production traffic.

You can configure through the console, CLI, or using **.ebextensions**—YAML/JSON files in your application package that define advanced settings like installing packages, creating files, or running commands during deployment.

## Deployment Options

Beanstalk provides several deployment strategies with different tradeoffs.

**All at once** deploys to all instances simultaneously. It's fast but causes brief downtime. Suitable for dev environments.

**Rolling** deploys in batches. Beanstalk takes a batch of instances out of service, deploys the new version, then moves to the next batch. This avoids downtime but reduces capacity during deployment. If deployment fails mid-process, you have mixed versions running.

**Rolling with additional batch** launches new instances with the new version before terminating old ones, maintaining full capacity throughout deployment. Costs slightly more temporarily due to extra instances.

**Immutable** creates a new Auto Scaling group with new instances running the new version. Once healthy, Beanstalk swaps traffic to the new instances and terminates the old group. This is the safest option—if deployment fails, simply terminate the new group. No mixed versions and easy rollback, but takes longer and temporarily doubles resources.

**Traffic splitting** is similar to immutable but gradually shifts traffic to new instances, letting you test with a percentage of users before full deployment. Great for canary testing.

## Auto Scaling

Beanstalk automatically configures Auto Scaling for load balanced environments. You can adjust scaling triggers like CPU utilization, network traffic, or request count. Define minimum and maximum instance counts to control capacity and costs.

Scaling rules determine when to add or remove instances. The default scales based on network out, but CPU-based scaling is common for compute-intensive apps. You can also schedule scaling for predictable traffic patterns.

## Monitoring and Health

Beanstalk monitors environment health using metrics from the load balancer, EC2 instances, and Auto Scaling. The health dashboard shows overall environment status: OK (green), Warning (yellow), Degraded (red), or Severe (red).

Beanstalk publishes metrics to CloudWatch including request count, latency, HTTP status codes, and instance health. You can set alarms for anomalies.

**Enhanced health reporting** provides more detailed metrics like instance health causes and application server statistics. This requires the Beanstalk health agent on instances.

## Database Integration

Beanstalk can provision an RDS database for your environment. This is convenient for dev/test but **not recommended for production** because the database lifecycle is tied to the environment—deleting the environment deletes the database.

For production, create RDS separately and configure Beanstalk to connect using environment variables. This decouples your database from deployments and prevents accidental data loss.

## Custom Domain and HTTPS

Beanstalk provides a default URL like `myapp.elasticbeanstalk.com`. To use a custom domain, create a CNAME record pointing to the Beanstalk URL or use Route 53 for more control.

For HTTPS, upload an SSL certificate to AWS Certificate Manager and configure your load balancer to use it. Beanstalk handles the load balancer setup—you just select the certificate.

## Managed Updates

Beanstalk can automatically update the platform version (OS patches, runtime updates) during your maintenance window. This keeps environments secure without manual intervention.

You control update preferences: minor updates only, both minor and patch, or no automatic updates. Managed updates use immutable or rolling deployments to avoid downtime.

## Pricing

Beanstalk itself is free. You pay only for the AWS resources it creates: EC2 instances, load balancers, Auto Scaling, RDS, S3 storage for application versions, and data transfer. A typical production environment costs whatever the underlying resources cost—usually dominated by EC2 and RDS charges.