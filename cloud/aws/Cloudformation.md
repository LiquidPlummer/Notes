# AWS CloudFormation

## Overview

AWS CloudFormation is Amazon's infrastructure as code (IaC) service that lets you define and provision AWS resources using code instead of manually clicking through the console. You write templates describing the infrastructure you want, and CloudFormation automatically creates and configures all those resources in the correct order with proper dependencies.

Instead of manually spinning up EC2 instances, configuring security groups, setting up load balancers, and connecting databases through the AWS console, you write a single template file that defines everything. CloudFormation reads that template and builds your entire infrastructure automatically, repeatedly, and consistently.

## How It Works

**Templates** are JSON or YAML files that describe your infrastructure. They specify what resources you want (EC2 instances, S3 buckets, RDS databases, etc.), how they're configured, and how they relate to each other. Templates are version-controlled like code, giving you a complete history of infrastructure changes.

**Stacks** are the running instances of your templates. When you deploy a template, CloudFormation creates a stack - a collection of AWS resources managed as a single unit. You can create multiple stacks from the same template, like separate stacks for development, staging, and production environments.

CloudFormation handles the complexity of resource dependencies and ordering. If your application needs a database before the application servers can start, CloudFormation ensures the database is created first. If resource creation fails, CloudFormation automatically rolls back changes to prevent partial deployments that leave your infrastructure in a broken state.

## Key Benefits

**Consistency and repeatability** - The same template produces identical infrastructure every time. No more "it works on my machine" problems or configuration drift between environments.

**Version control** - Templates are text files that live in Git alongside your code. You can track changes, review infrastructure modifications through pull requests, and roll back to previous versions if needed.

**Automation and speed** - Spinning up complete environments that might take hours of manual work happens in minutes with a single command. This is especially valuable for creating temporary testing environments or disaster recovery.

**Safety** - CloudFormation's rollback capabilities mean failed deployments automatically clean up, preventing half-configured resources. Change sets let you preview what will change before applying updates, reducing the risk of unexpected modifications.

## Use Cases

CloudFormation is essential for managing production infrastructure reliably. Teams define their entire AWS environment in templates, ensuring every deployment is identical and tested. When issues occur, infrastructure can be rebuilt from templates rather than trying to manually recreate configurations.

For multi-environment setups, a single template with parameters can create development, staging, and production environments with appropriate sizing and configuration differences. This ensures all environments remain structurally identical while allowing for necessary variations.

CloudFormation also enables disaster recovery by maintaining infrastructure definitions that can quickly recreate your entire environment in a different region if needed.

## CloudFormation vs Terraform

CloudFormation is AWS-specific and only works with AWS resources, while Terraform is cloud-agnostic and supports AWS, Azure, Google Cloud, and hundreds of other providers. This makes Terraform the choice for multi-cloud infrastructure.

CloudFormation uses JSON or YAML templates, while Terraform uses HCL (HashiCorp Configuration Language) which is generally more concise and readable. CloudFormation automatically manages state on AWS's servers, whereas Terraform requires you to manage state files yourself, typically stored in S3 with DynamoDB locking.

Terraform offers better modularity and a more mature module ecosystem, plus richer CLI tooling with superior planning and diff capabilities. CloudFormation provides tighter integration with AWS services and requires no external state management.

Use CloudFormation if you're staying within AWS and want native integration. Use Terraform for multi-cloud environments or if you prefer its tooling and modules.