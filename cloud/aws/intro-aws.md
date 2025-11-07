# AWS Introduction & Infrastructure

## What is AWS?

Amazon Web Services (AWS) is Amazon's cloud computing platform offering on-demand compute, storage, databases, networking, and other services. Pay only for what you use with no upfront costs.

**Key Benefits:**
- Scalability - scale up/down as needed
- Reliability - high availability and fault tolerance
- Cost efficiency - no hardware/datacenter costs
- Global reach - deploy worldwide in minutes
- Security - enterprise-grade infrastructure

## AWS Global Infrastructure

### Regions

A **Region** is a physical geographic location with multiple isolated data centers.

- Each Region is completely independent
- 30+ Regions globally (US East, EU West, Asia Pacific, etc.)
- Choose Regions based on:
  - Latency (proximity to users)
  - Compliance (data residency laws)
  - Service availability (not all services in all Regions)
  - Cost (pricing varies by Region)

**Examples:** us-east-1 (N. Virginia), eu-west-1 (Ireland), ap-southeast-1 (Singapore)

### Availability Zones (AZs)

An **Availability Zone** is one or more discrete data centers within a Region.

- Each Region has 2-6 AZs
- AZs are isolated from failures in other AZs
- Connected via high-bandwidth, low-latency networking
- Deploy across multiple AZs for high availability
- Named with Region code + letter (us-east-1a, us-east-1b)

**Why AZs matter:** If one AZ fails (power outage, natural disaster), your app stays running in other AZs.

### Edge Locations

- 400+ locations worldwide
- Used for CloudFront (CDN) and Route 53 (DNS)
- Cache content closer to end users for faster delivery

## Core Architecture Pattern

**Multi-AZ Deployment:**
```
Region: us-east-1
├── AZ: us-east-1a (Data Center 1)
│   └── Web Server 1, Database Primary
├── AZ: us-east-1b (Data Center 2)
│   └── Web Server 2, Database Standby
└── AZ: us-east-1c (Data Center 3)
    └── Web Server 3, Database Replica
```

This provides fault tolerance - if one AZ goes down, traffic automatically routes to healthy AZs.

## Common AWS Services

- **EC2 (Elastic Compute Cloud)** - Virtual servers in the cloud that you can configure and scale as needed.
- **S3 (Simple Storage Service)** - Object storage for files, backups, and static website hosting with unlimited scalability.
- **RDS (Relational Database Service)** - Managed relational databases (MySQL, PostgreSQL, etc.) with automated backups and scaling.
- **Lambda** - Run code without managing servers, paying only for compute time used (serverless functions).
- **Elastic Beanstalk** - Deploy and manage web apps automatically without worrying about infrastructure.
- **EKS (Elastic Kubernetes Service)** - Managed Kubernetes service for running containerized applications at scale.
- **EventBridge** - Serverless event bus that routes events between AWS services and applications.
- **CloudWatch** - Monitoring and logging service that tracks metrics, logs, and sets alarms for AWS resources.
- **CloudFormation** - Infrastructure as code service that provisions AWS resources using templates.

## Key Takeaways

- **Region** = geographic location with multiple data centers
- **AZ** = isolated data center(s) within a Region
- Deploy across multiple AZs for high availability
- Choose Regions based on latency, compliance, and cost
- AWS handles the physical infrastructure - you focus on your apps