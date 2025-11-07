# EventBridge & SQS

## EventBridge

EventBridge is a serverless event bus that routes events between AWS services, custom applications, and SaaS providers. It enables event-driven architectures where systems react to changes automatically rather than polling for updates.

### How EventBridge Works

Events are JSON messages describing state changes (e.g., "EC2 instance stopped" or "new file uploaded to S3"). EventBridge receives these events and routes them to targets based on rules you define.

An **event bus** receives events from sources. AWS provides a default event bus for AWS service events, and you can create custom buses for your applications or third-party integrations.

**Rules** match events using patterns and route them to targets. A rule might say "when an S3 object is created in this bucket, send the event to this Lambda function." You can filter events by specific attributes—only process image files, only from production accounts, etc.

**Targets** receive matched events. EventBridge supports 20+ target types including Lambda, SQS, SNS, Step Functions, API Gateway, and more. A single rule can send to multiple targets.

### Event Patterns

Event patterns use JSON to match specific events. You can filter on event source, detail type, or any field in the event payload. This allows precise routing without writing code.

For example, match only EC2 instances transitioning to "running" state in a specific region, or S3 PUT events for .jpg files in a particular prefix.

### Use Cases

EventBridge excels at decoupling microservices, building reactive workflows, integrating SaaS applications, and creating event-driven architectures. Use it when multiple systems need to react to the same event, or when you need complex routing logic.

Common patterns include triggering Lambda functions on S3 uploads, processing CloudWatch alarms, syncing data between systems, or orchestrating workflows across services.

### Pricing

You pay per event published to the bus and per event delivered to targets. Schema discovery and archive/replay features have separate pricing. The first million custom events per month are free.

## SQS (Simple Queue Service)

SQS is a fully managed message queue service for decoupling components in distributed systems. Producers send messages to a queue, and consumers retrieve and process them asynchronously.

### How SQS Works

A **queue** holds messages until a consumer retrieves them. Messages persist in the queue until explicitly deleted by the consumer after processing. This ensures messages aren't lost if a consumer fails.

Producers send messages to the queue using the SQS API. Consumers poll the queue for messages, process them, then delete them from the queue. Multiple consumers can process messages from the same queue in parallel.

### Queue Types

**Standard queues** provide maximum throughput with at-least-once delivery. Messages are delivered in approximately the same order they're sent but ordering isn't guaranteed. A message might occasionally be delivered more than once, so consumers should be idempotent.

**FIFO queues** guarantee exactly-once processing and strict ordering. Messages are processed in the exact order sent with no duplicates. Throughput is lower (3,000 messages/second with batching) but predictable ordering and deduplication.

### Message Visibility Timeout

When a consumer retrieves a message, it becomes invisible to other consumers for a configurable timeout period (default 30 seconds). This prevents multiple consumers from processing the same message simultaneously.

If the consumer doesn't delete the message before the timeout expires, it becomes visible again for another consumer to process. If processing takes longer than expected, consumers can extend the visibility timeout.

### Dead Letter Queues

A dead letter queue (DLQ) receives messages that fail processing repeatedly. After a message exceeds the maximum receive count (configured per queue), SQS moves it to the DLQ for investigation.

DLQs prevent poison messages from blocking the queue and provide visibility into systematic failures.

### Long Polling

SQS supports short polling (returns immediately) and long polling (waits up to 20 seconds for messages). Long polling reduces empty responses and costs, making it more efficient for most use cases.

### Use Cases

SQS is ideal for buffering work between services, implementing work queues with multiple workers, decoupling microservices, and managing batch processing. Use it when you need reliable message delivery and don't need complex routing.

Common patterns include order processing systems, image processing pipelines, log aggregation, and background job processing.

### Pricing

You pay per request (send, receive, delete) with no minimum fee. The first 1 million requests per month are free. FIFO queues cost slightly more than standard queues.

## EventBridge vs SQS

Use **EventBridge** when you need event routing to multiple targets, filtering logic, integration with AWS services or SaaS, or fan-out patterns. EventBridge excels at reacting to state changes and building loosely coupled systems.

Use **SQS** when you need reliable point-to-point message delivery, work queues, buffering, or guaranteed ordering (FIFO). SQS excels at decoupling producers and consumers with different processing rates.

Often you'll use both: EventBridge routes events to multiple targets including SQS queues, where consumers process messages at their own pace.