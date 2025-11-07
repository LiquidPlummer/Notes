# AWS Networking & Security

## VPC (Virtual Private Cloud)

A VPC is your isolated network in AWS where you launch resources like EC2 instances. Think of it as your own private data center in the cloud. Each VPC exists in a single Region but can span multiple AZs. You define the IP address range using CIDR notation (e.g., 10.0.0.0/16), which determines how many IP addresses are available.

VPCs are logically isolated from other VPCs and the public internet by default. You control what can enter and exit through internet gateways, NAT gateways, and routing tables.

## Subnets

Subnets divide your VPC into smaller network segments, each residing in a single AZ. You create subnets by carving out portions of your VPC's IP range. A subnet with 10.0.1.0/24 gives you 256 addresses (though AWS reserves 5 for internal use).

**Public subnets** have a route to an internet gateway, allowing resources inside to communicate directly with the internet. You'd place web servers here. **Private subnets** have no direct internet route, making them ideal for databases and application servers. Private subnet resources can access the internet through a NAT gateway in a public subnet, but the internet can't initiate connections to them.

## Internet Gateway & NAT Gateway

An **Internet Gateway** attaches to your VPC and enables communication between your VPC and the internet. Resources in public subnets use it to send and receive traffic directly.

A **NAT Gateway** sits in a public subnet and allows resources in private subnets to initiate outbound internet connections (for updates, API calls) while blocking inbound connections from the internet. This provides security while maintaining necessary internet access.

## Elastic Network Interfaces (ENIs)

An ENI is a virtual network card you can attach to an EC2 instance. Every instance has a primary ENI that you can't detach, but you can attach additional ENIs. Each ENI has its own private IP address, security groups, and MAC address.

ENIs are useful for creating management networks, low-budget high-availability solutions (detach from a failed instance and attach to a standby), or assigning multiple IP addresses to a single instance. They're bound to a specific AZ.

## Elastic IPs

An Elastic IP is a static public IPv4 address you can allocate to your AWS account. Normal public IPs change when you stop and start an instance, but Elastic IPs persist. You can quickly remap an Elastic IP from one instance to another, useful for failover scenarios.

You're charged for Elastic IPs when they're allocated but not associated with a running instance, encouraging efficient use.

## Security Groups

Security Groups are stateful virtual firewalls that control inbound and outbound traffic at the instance level. You specify allowed traffic using rules that define protocol, port, and source/destination.

Security Groups are **stateful**, meaning if you allow an inbound request, the response is automatically allowed regardless of outbound rules. Rules are permissive only—you can't create deny rules, everything not explicitly allowed is denied by default. You can reference other Security Groups in rules, making it easy to allow traffic between application tiers.

Changes to Security Groups take effect immediately. A single instance can have multiple Security Groups attached, and their rules are combined.

## Network ACLs (NACLs)

Network ACLs are stateless firewalls that control traffic at the subnet level. Unlike Security Groups, NACLs are **stateless**—you must explicitly allow both the request and the response with separate inbound and outbound rules.

NACLs support both allow and deny rules, processed in number order (lowest first). They provide an additional layer of security but are typically used for broad subnet-level controls while Security Groups handle granular instance-level rules.

Default NACLs allow all traffic, while custom NACLs deny all traffic until you add rules.

## Security Groups vs NACLs

**Security Groups:** Instance-level, stateful, allow rules only, applied to ENIs, evaluate all rules before deciding.

**NACLs:** Subnet-level, stateless, allow and deny rules, process rules in order, automatic assignment to instances in subnet.

Most security is handled with Security Groups. Use NACLs as an additional defense layer for subnet-wide controls or to explicitly block specific IPs.

## IAM Roles for EC2

IAM Roles define permissions that determine what AWS services and resources an instance can access. Instead of embedding AWS credentials in your application code (insecure), you attach an IAM Role to your EC2 instance.

When you attach a role, AWS provides temporary security credentials to the instance automatically, rotating them before expiration. Your application uses these credentials to make AWS API calls—for example, reading from S3, writing to DynamoDB, or publishing to SNS.

You create an IAM Role with specific policies (like S3 read-only access), then attach it to instances at launch or afterward. The instance assumes the role and inherits its permissions. This is the secure, recommended way to grant AWS permissions to applications running on EC2.

## Route Tables

Route tables contain rules that determine where network traffic is directed. Every subnet must be associated with a route table. The table includes a local route for VPC-internal traffic and additional routes for external destinations.

A public subnet's route table sends internet-bound traffic (0.0.0.0/0) to the internet gateway. A private subnet sends internet traffic to a NAT gateway. You can have multiple route tables in a VPC to implement different routing patterns for different subnets.