# Event Driven Architecture

## What is Event Driven Architecture?

Event Driven Architecture (EDA) is a software design pattern where system components communicate by producing and consuming events. An event represents a significant change in state or an occurrence within the system.

Event Driven Architecture relies on asynchronous communication where components don't wait for responses, creating loose coupling between producers and consumers. This makes systems highly scalable since you can add new consumers without affecting producers, and enables real-time processing as events trigger immediate reactions.

**How it works:** A component detects a change (like a user placing an order) and publishes an event to an event bus or broker. Interested components subscribe to these events and react independently. Multiple consumers can process the same event without interfering with each other.

Common use cases include microservices communication, real-time data processing, IoT sensor data handling, user activity tracking, and system integration.

## Events and Infrastructure

### Events

An event is an immutable record of something that happened in the system. It represents a state change or occurrence at a specific point in time. Events contain the event type or name, a timestamp of when it occurred, a payload with data about what happened, and metadata for additional context. Once created, events cannot be modified - they're a permanent record of what took place.

### Event Bus and Broker

The event bus (or broker) is the central messaging infrastructure that sits between event producers and consumers. It receives events from any source and routes them to interested subscribers without the producers and consumers ever directly communicating. The bus manages delivery guarantees like at-least-once or exactly-once delivery, handles queuing when consumers are slow or offline, and enables multiple consumers to process the same event independently. Think of it like a post office - producers drop off messages, the bus sorts and routes them, and delivers to all subscribers interested in that event type.

**Event Sources** are the components or systems that generate and publish events. They're the producers that detect changes and send events to the bus.

**Pipes** are the connections or channels that transport events between components. They're the pathways through which events flow from producers to the event bus, or from the bus to consumers. In some platforms like AWS EventBridge, pipes can also filter and transform events as they pass through.

## Apache Kafka

Apache Kafka is a distributed streaming platform that serves as a high-performance event broker. It's designed for handling massive volumes of events with high throughput and fault tolerance, making it ideal for building real-time data pipelines and streaming applications.

Kafka organizes events into **topics**, which are categories or feeds of events. Producers publish events to topics, and consumers subscribe to the topics they care about. Each topic is partitioned across multiple servers for scalability and replicated for fault tolerance - if one server fails, the data is still available elsewhere.

**Kafka Event Streams** represent continuous flows of events stored in these topics. Unlike traditional messaging systems where messages are deleted after consumption, Kafka retains events for a configurable period (hours, days, or indefinitely). This means consumers can read at their own pace, replay old events if needed, or new consumers can catch up by reading historical events. Multiple consumer groups can independently process the same stream of events without interfering with each other.

Kafka excels at handling real-time data pipelines where you need guaranteed ordering within partitions, durable storage of events, and the ability to process millions of events per second across distributed systems.

## AWS EventBridge

AWS EventBridge is a serverless event bus service that makes it easy to connect applications using events within the AWS ecosystem and beyond. Unlike Kafka which you deploy and manage yourself, EventBridge is fully managed - you don't worry about servers, scaling, or infrastructure.

EventBridge connects to over 100 AWS services out of the box, plus SaaS applications like Salesforce, Shopify, and Zendesk. It can also receive custom events from your own applications. Events flow into EventBridge, where you define rules to filter and route them to various targets like Lambda functions, Step Functions, SQS queues, or other AWS services.

Key capabilities include a schema registry that automatically discovers and versions event schemas, content-based filtering to route events based on their payload, and built-in retry logic with dead-letter queues for handling failures. EventBridge Pipes specifically enables point-to-point integrations with optional filtering and transformation between a source and target.

EventBridge is ideal when you're building in AWS and want a serverless, pay-per-event model without operational overhead. For cross-account or cross-region event routing within AWS, it's particularly powerful. However, Kafka typically wins for extremely high-throughput scenarios or when you need the event replay and long-term retention capabilities that Kafka's log-based storage provides.