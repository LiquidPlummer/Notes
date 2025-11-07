# AWS Lambda

## What is Lambda?

Lambda is AWS's serverless compute service that runs your code without provisioning or managing servers. You upload your code, and Lambda handles everything else—capacity, scaling, patching, and monitoring. You only pay for the compute time your code actually uses, measured in milliseconds.

Lambda is event-driven. Your code runs in response to triggers like HTTP requests, file uploads to S3, database changes, or scheduled events. Lambda automatically scales from zero to thousands of concurrent executions based on demand.

## How Lambda Works

You package your code into a **function**—a single unit of execution with a handler method that processes events. When an event triggers your function, Lambda provisions an execution environment, loads your code, and runs your handler. The environment stays warm for subsequent invocations to reduce latency.

Lambda supports multiple runtimes including Python, Node.js, Java, Go, Ruby, .NET, and custom runtimes. You specify the runtime, handler method, memory allocation, and timeout when creating a function.

## Invocation Models

Lambda supports three invocation models based on how events trigger your function.

**Synchronous invocation** waits for your function to process the event and return a response. API Gateway and direct SDK calls use this model. The caller receives success or failure immediately.

**Asynchronous invocation** queues the event and returns immediately without waiting for your function to complete. S3 and SNS use this model. Lambda retries failed invocations automatically and can send failed events to a dead-letter queue.

**Stream-based invocation** processes records from streams like DynamoDB Streams or Kinesis. Lambda polls the stream, retrieves batches of records, and invokes your function with each batch.

## Memory and CPU

You configure memory allocation from 128 MB to 10,240 MB in 1 MB increments. CPU power scales proportionally with memory—more memory means more CPU. A function with 1,792 MB gets one full vCPU, and allocations above that get multiple vCPUs.

Choose memory based on your workload. CPU-intensive functions benefit from higher memory allocations even if they don't need the RAM. Monitor execution duration and optimize memory to balance performance and cost.

## Timeout and Limits

Functions have a maximum execution timeout of 15 minutes. Choose shorter timeouts for quick operations to avoid paying for hung executions. The default timeout is 3 seconds.

Other limits include 512 MB of temporary disk space in /tmp, 6 MB maximum for synchronous response payloads, and 250 MB for deployment package size (10 GB when using container images). Concurrent executions have soft limits of 1,000 per Region that can be increased.

## Environment Variables

Environment variables configure function behavior without changing code. Use them for configuration values, feature flags, or non-sensitive settings. Lambda encrypts environment variables at rest using AWS KMS.

Never store sensitive data like database passwords directly in environment variables. Use AWS Secrets Manager or Parameter Store and retrieve values at runtime.

## Layers

Lambda layers let you share code, libraries, and dependencies across multiple functions. Package common dependencies into a layer, then attach it to functions that need it. This reduces deployment package size and promotes code reuse.

A function can use up to five layers. AWS provides public layers for common libraries, or you can create custom layers for your organization.

## IAM Roles and Permissions

Every Lambda function has an **execution role**—an IAM role that grants permissions to access AWS services. Your function code uses this role to read from S3, write to DynamoDB, publish to SNS, or call other AWS APIs.

Create least-privilege execution roles that grant only necessary permissions. Lambda automatically includes permissions to write logs to CloudWatch.

**Resource-based policies** control what can invoke your Lambda function. When API Gateway needs to trigger your function, you add a resource policy allowing API Gateway to invoke it.

## VPC Integration

By default, Lambda functions run in an AWS-managed VPC with internet access but no access to your private VPC resources. To access resources in your VPC (like RDS databases in private subnets), configure VPC integration.

Specify the subnets and security groups for your function. Lambda creates elastic network interfaces in your subnets, allowing functions to reach VPC resources. VPC-enabled functions can't access the internet unless your VPC has a NAT gateway.

VPC integration adds cold start latency but is necessary for accessing private resources securely.

## Cold Starts vs Warm Starts

When Lambda invokes your function, it either reuses an existing execution environment (warm start) or creates a new one (cold start). Cold starts include initialization time—loading your code, connecting to databases, importing libraries—which adds latency.

Warm starts skip initialization and execute your handler immediately. Lambda keeps environments warm between invocations, but there's no guarantee. Low-traffic functions experience more cold starts.

Minimize cold starts by reducing deployment package size, using provisioned concurrency for critical functions, and keeping initialization code fast. Languages like Python and Node.js generally have faster cold starts than Java or .NET.

## Provisioned Concurrency

Provisioned concurrency keeps a specified number of execution environments initialized and ready to respond instantly. This eliminates cold starts for latency-sensitive applications but increases costs since you pay for provisioned capacity even when unused.

Use provisioned concurrency sparingly for endpoints with strict latency requirements during peak traffic periods.

## Monitoring and Logging

Lambda automatically logs all function invocations to CloudWatch Logs. Your function can write additional logs using standard output. Lambda also publishes metrics like invocation count, duration, errors, and throttles to CloudWatch.

Use CloudWatch metrics to monitor function health and set alarms for error rates or duration thresholds. X-Ray integration provides distributed tracing for debugging complex workflows.

## Pricing

Lambda pricing has three components. You pay for **requests** (invocations), **duration** (compute time in GB-seconds), and **provisioned concurrency** if enabled.

The free tier includes 1 million requests and 400,000 GB-seconds per month. After that, requests cost $0.20 per million and duration costs vary by memory allocation. A 128 MB function costs less per millisecond than a 1,024 MB function.

Duration is rounded up to the nearest millisecond. Optimizing function speed directly reduces costs.

## Common Use Cases

Lambda excels at event processing, API backends, data transformation, scheduled tasks, and real-time stream processing. Use it for microservices, ETL jobs, image processing, chatbots, and automation tasks.

Lambda isn't ideal for long-running processes (over 15 minutes), applications requiring persistent connections, or workloads with predictable high utilization where EC2 might be more cost-effective.