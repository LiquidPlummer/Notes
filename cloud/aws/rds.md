# RDS (Relational Database Service)

## What is RDS?

RDS is AWS's managed relational database service that handles the operational overhead of running a database. AWS manages patching, backups, replication, and failover while you focus on your schema and queries. You still get full database access but don't manage the underlying infrastructure.

## Supported Database Engines

RDS supports six database engines:

- **Amazon Aurora** - AWS's cloud-native database, MySQL and PostgreSQL compatible with better performance
- **MySQL** - Popular open-source database
- **PostgreSQL** - Advanced open-source database with rich features
- **MariaDB** - MySQL fork with additional features
- **Oracle** - Enterprise database with licensing options
- **Microsoft SQL Server** - Microsoft's enterprise database

Each engine is available in multiple versions. Aurora is AWS-built and offers the best integration with AWS services.

## DB Instances

An RDS database runs on a DB instance, which is similar to an EC2 instance but optimized for database workloads. You choose an instance class that determines CPU, memory, and network performance.

**Instance classes** follow similar patterns to EC2: db.t3.micro for burstable workloads, db.m6g.large for general purpose, db.r6g.xlarge for memory-intensive workloads. Larger databases need more memory to cache data effectively.

DB instances run in your VPC within a subnet group. You specify which subnets across multiple AZs the instance can use.

## Storage

RDS uses EBS volumes for storage. You choose the storage type and size when creating the database.

**General Purpose SSD (gp3/gp2)** balances price and performance for most workloads. **Provisioned IOPS SSD (io1)** delivers consistent high performance for I/O intensive applications. **Magnetic storage** is available for backward compatibility but not recommended for new deployments.

Storage can scale automatically when you enable storage autoscaling. RDS monitors available space and increases volume size when it drops below your threshold, avoiding disruptions from running out of storage.

## Multi-AZ Deployments

Multi-AZ provides high availability by maintaining a synchronous standby replica in a different AZ. RDS automatically replicates data to the standby and handles failover if the primary instance fails.

In Multi-AZ mode, you have one endpoint that AWS manages. If the primary fails, AWS automatically redirects the endpoint to the standby, typically completing failover in 1-2 minutes. The standby isn't used for read traffic—it's purely for redundancy.

Multi-AZ doubles storage costs since data is replicated, but provides automatic failover without data loss. Use it for production databases that need high availability.

## Read Replicas

Read Replicas are asynchronously replicated copies of your database used to offload read traffic from the primary instance. Unlike Multi-AZ standby replicas, Read Replicas actively serve read queries.

You can create up to 15 Read Replicas per database. They can be in the same Region or cross-Region for disaster recovery or serving geographically distributed users. Each replica has its own endpoint that your application connects to for reads.

Replication is asynchronous, so replicas may lag slightly behind the primary (usually seconds). Read Replicas can be promoted to standalone databases if needed.

## Backups

RDS provides two backup types. **Automated backups** occur daily during your specified backup window and retain transaction logs throughout the day, allowing point-in-time recovery to any second within your retention period (1-35 days). **Manual snapshots** are user-initiated backups stored until you explicitly delete them.

Backups are stored in S3 and don't impact database performance (AWS handles this efficiently with Multi-AZ). You can restore a backup to create a new DB instance—you can't restore over an existing instance.

## Security

RDS security has multiple layers. **Network isolation** keeps databases in private subnets with Security Groups controlling access. **Encryption at rest** uses AWS KMS to encrypt storage volumes, backups, and snapshots. **Encryption in transit** uses SSL/TLS for connections between applications and the database.

**IAM database authentication** allows you to use IAM roles instead of database passwords for MySQL and PostgreSQL. This provides better security and integrates with AWS's identity management.

RDS doesn't allow direct OS access—you interact with databases through standard database protocols and AWS management tools.

## Parameter Groups and Option Groups

**Parameter Groups** control database engine configuration like max connections, buffer sizes, and query cache settings. You can't modify the default parameter group, so create custom parameter groups for your specific needs. Some parameter changes require a database restart.

**Option Groups** add additional features to your database engine. For example, Oracle Transparent Data Encryption or SQL Server audit features. Not all engines use option groups.

## Maintenance Windows

AWS performs required maintenance during a weekly maintenance window you specify. This includes patching, minor version upgrades, and system maintenance. Most maintenance completes without downtime in Multi-AZ deployments by updating the standby first, failing over, then updating the original primary.

You can enable automatic minor version upgrades to keep your database current with security patches.

## Pricing

You're charged for the DB instance runtime (per hour based on instance class), storage (per GB-month), backup storage beyond the free amount (equal to provisioned storage), and data transfer out of AWS. Multi-AZ deployments cost roughly double due to the standby replica. Read Replicas are billed as additional instances.