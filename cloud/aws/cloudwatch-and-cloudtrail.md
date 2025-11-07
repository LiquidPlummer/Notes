# CloudWatch & CloudTrail

## CloudWatch

CloudWatch is AWS's monitoring and observability service that collects metrics, logs, and events from AWS resources and applications.

### Metrics

Metrics are time-series data points representing resource performance. AWS services automatically publish metrics—EC2 sends CPU utilization, ELB sends request counts, RDS sends database connections. You can also publish custom metrics from your applications.

Metrics are organized by namespace and identified by dimensions (like instance ID or database name). You can view metrics in graphs, create dashboards, and analyze trends.

### Logs

CloudWatch Logs collects and stores log files from AWS services and applications. Lambda automatically sends function logs, EC2 instances can send application logs using the CloudWatch agent, and VPC Flow Logs capture network traffic.

Logs are organized into **log groups** (typically one per application) containing **log streams** (typically one per instance or function invocation). You can search logs, filter patterns, and export to S3 for long-term storage.

**Log Insights** lets you query logs using a SQL-like language to analyze patterns, troubleshoot issues, and generate reports.

### Alarms

Alarms monitor metrics and trigger actions when thresholds are breached. Set an alarm to notify you when CPU exceeds 80%, disk space drops below 10%, or error rates spike.

Alarms have three states: OK, ALARM, and INSUFFICIENT_DATA. When an alarm enters ALARM state, it can trigger SNS notifications, Auto Scaling actions, or EC2 actions like stopping an instance.

### Dashboards

Dashboards provide customizable views of metrics and logs across multiple resources. Create operational dashboards showing key metrics for your infrastructure or application-specific views tracking business KPIs.

### Pricing

You pay for metrics, log ingestion and storage, dashboards, and alarms. AWS provides free metrics for most services at 5-minute intervals (detailed 1-minute intervals cost extra). Custom metrics, log storage beyond retention, and alarms have per-unit pricing.

## CloudTrail

CloudTrail records AWS API calls and events for auditing, compliance, and security analysis. Every action in AWS—console clicks, CLI commands, SDK calls—generates a CloudTrail event.

### How CloudTrail Works

CloudTrail logs who made requests (IAM user or role), when they occurred, what action was taken, which resources were affected, and the source IP address. Events include management actions (creating EC2 instances, modifying security groups) and data actions (S3 object access, Lambda function invocations).

Logs are delivered to S3 buckets you specify, typically within 15 minutes. You can also send events to CloudWatch Logs for real-time monitoring or EventBridge for automated responses.

### Trails

A **trail** defines which events to log and where to store them. You can create trails for specific regions or for all regions. A multi-region trail captures events across your entire AWS account.

Trails can log management events (control plane operations) and optionally data events (S3 object-level operations, Lambda executions), though data events increase costs.

### Event History

CloudTrail automatically maintains 90 days of management event history in the console at no cost. For longer retention or data events, create a trail that delivers logs to S3.

### Use Cases

CloudTrail is essential for security investigations (who deleted this resource?), compliance auditing (prove no one accessed sensitive data), troubleshooting (what changed before the outage?), and detecting unusual activity.

Integrate CloudTrail with CloudWatch Alarms to detect suspicious actions like unauthorized API calls, root account usage, or security group modifications.

### Pricing

The first trail per region is free for management events. Additional trails, data events, and CloudTrail Insights (anomaly detection) have per-event pricing. S3 storage and data transfer costs apply for stored logs.

## CloudWatch vs CloudTrail

**CloudWatch** answers "How is my system performing?" It monitors resource health, application metrics, and operational issues. Use it for performance monitoring, troubleshooting outages, and tracking application behavior.

**CloudTrail** answers "Who did what and when?" It tracks user activity, API calls, and configuration changes. Use it for security auditing, compliance, and investigating incidents.

They're complementary—CloudWatch shows your application crashed, CloudTrail shows someone deleted a critical resource five minutes earlier.