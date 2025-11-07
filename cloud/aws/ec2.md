# EC2 (Elastic Compute Cloud)

## What is EC2?

EC2 provides resizable virtual machines (instances) in the cloud. You choose the OS, compute power, memory, and storage, then pay only for what you use. Launch in minutes and scale up or down on demand.

## Instance Types

EC2 instances are organized by **family** and **size**, with each family optimized for different workloads.

- **General Purpose (T, M)** - Balanced compute, memory, and networking for web servers and small databases
- **Compute Optimized (C)** - High-performance processors for batch processing, gaming servers, and scientific modeling
- **Memory Optimized (R, X)** - Fast access to large datasets in memory for databases, caching, and real-time analytics
- **Storage Optimized (I, D)** - High sequential read/write to local storage for data warehouses and distributed file systems
- **Accelerated Computing (P, G, F)** - Hardware accelerators like GPUs and FPGAs for machine learning and graphics rendering

### Instance Sizes

Each family comes in multiple sizes that scale resources proportionally:

- **Nano, Micro, Small** - Entry-level (1-2 vCPUs, 0.5-2 GB RAM)
- **Medium, Large** - Mid-tier (2-4 vCPUs, 4-8 GB RAM)
- **XLarge, 2XLarge, 4XLarge...** - Scale up to 448 vCPUs and 24 TB RAM

Instance names follow a pattern: `t3.medium` indicates T family (general purpose), generation 3, medium size.

T instances have burstable performance, meaning they have a baseline CPU performance level but can burst above it when needed. The instance earns CPU credits when running below baseline and spends credits when bursting above it. If you run out of credits, performance drops back to baseline until more credits accumulate.

## AMIs (Amazon Machine Images)

An AMI is a template containing the OS, software, and configuration needed to launch an instance. AWS provides free AMIs for Amazon Linux, Ubuntu, and Windows Server. The Marketplace offers pre-configured software from vendors, which may include licensing costs. Community AMIs are shared by other users, and you can create custom AMIs from your configured instances. AMIs are Region-specific but can be copied across Regions.

## Storage Options

### EBS (Elastic Block Store)

EBS provides network-attached persistent storage that survives independently of the instance lifecycle. There are four main volume types. General Purpose SSD (gp3/gp2) offers balanced price and performance for most workloads including boot volumes and dev/test environments. Provisioned IOPS SSD (io2/io1) delivers high performance for databases requiring low latency and high throughput. Throughput Optimized HDD (st1) provides low-cost storage for frequently accessed, throughput-intensive workloads like big data and logs. Cold HDD (sc1) is the lowest-cost option for infrequently accessed data.

EBS volumes support snapshots for backups (stored in S3), can be attached and detached from instances, and are available within a single AZ where they're replicated for durability.

### Instance Store

Instance Store provides temporary storage physically attached to the host machine. The data is ephemeral and lost when the instance stops or terminates, but it offers very high I/O performance at no additional cost. Use it for caches, buffers, and temporary data.

### Root Volume

The root volume is the boot disk containing your OS. It can be either EBS or Instance Store. EBS root volumes can persist after termination if configured to do so, while Instance Store root volumes are always ephemeral.

## Pricing

You're charged for EC2 based on several factors. **Compute charges** are based on instance type and how long it runs, typically billed per second with a one-minute minimum. **Storage charges** apply for any EBS volumes attached to your instance, charged per GB-month. **Data transfer** is charged for outbound data leaving AWS to the internet, while data transfer between instances in the same AZ is free. **Additional resources** like Elastic IPs (when not attached to a running instance) and snapshots also incur charges.

Instances are billed only while in the running state. Stopped instances don't incur compute charges but you still pay for attached EBS storage.

## Auto Scaling

Auto Scaling automatically adjusts the number of EC2 instances based on demand. You define a **launch template** (which AMI, instance type, security groups to use) and **scaling policies** (when to add or remove instances). Scaling can be triggered by metrics like CPU utilization, network traffic, or custom CloudWatch metrics. For example, you might scale up when average CPU exceeds 70% and scale down when it drops below 30%.

Auto Scaling Groups (ASG) maintain a minimum, maximum, and desired number of instances. They automatically replace unhealthy instances and can distribute instances across multiple AZs for high availability. Combined with a load balancer, this creates a resilient architecture that handles traffic spikes while minimizing costs during low usage.