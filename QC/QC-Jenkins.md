## Unit

# Jenkins

## Links

* [Required Questions](#required-questions)
* [Preferred Questions](#preferred-questions)
* [Stretch Questions](#stretch-questions)

## Required Questions

[Back to top](#unit)

* **What is Jenkins?**
    * Keywords, concepts, or topics that should be in the response:
        * Open-source automation server for CI/CD
        * Automates building, testing, and deployment
        * Supports DevOps practices
        * Written in Java with plugin extensibility
        * Integrates with tools like Git, Docker, Kubernetes
        * Web-based UI and distributed build support
    * Possible follow-up questions:
        * **What are the key features of Jenkins?**
            * Keywords, concepts, or topics that should be in the response:
                * Open-source and community-supported
                * Plugin-based extensibility
                * Cross-platform compatibility
                * Distributed build capabilities
                * Web-based user interface
        * **Why is Jenkins important in DevOps?**
            * Keywords, concepts, or topics that should be in the response:
                * Automates repetitive tasks in CI/CD pipelines
                * Increases development speed and reliability
                * Facilitates collaboration between development and operations
                * Reduces human error in deployment processes
                * Enables faster feedback and continuous improvement
* **What are Jenkins Jobs?**
    * Keywords, concepts, or topics that should be in the response:
        * Define what Jenkins should do (e.g., pull code, compile, test, deploy)
        * Central unit of configuration in Jenkins
        * Can be triggered manually or automatically
    * Possible follow-up questions:
        * **What are the different types of Jenkins Jobs?**
            * Keywords, concepts, or topics that should be in the response:
                * Freestyle Project: basic, flexible job type
                * Pipeline: script-based job for complex workflows
                * Multibranch Pipeline: auto-creates jobs for each branch
                * Folder: organizes jobs hierarchically
                * Matrix Project: runs jobs across multiple configurations
        * **How do Jenkins Jobs support DevOps workflows?**
            * Keywords, concepts, or topics that should be in the response:
                * Automate CI/CD tasks
                * Integrate with tools like Git, Docker, Kubernetes
                * Enable repeatable, reliable deployments
                * Facilitate collaboration between teams
* **What are Jenkins Builds?**
    * Keywords, concepts, or topics that should be in the response:
        * A single execution of a Jenkins job
        * Has a unique build number, status, logs, and artifacts
        * Can be triggered by various events
    * Possible follow-up questions:
        * **How are Jenkins Builds triggered?**
            * Keywords, concepts, or topics that should be in the response:
                * Source code changes (e.g., Git push)
                * Scheduled times using CRON syntax
                * Manual triggers by users
                * Upstream/downstream job completions
                * External systems via webhooks or API
        * **What happens during a Jenkins Build?**
            * Keywords, concepts, or topics that should be in the response:
                * Jenkins prepares the environment and agents
                * Executes defined steps (e.g., compile, test, deploy)
                * Generates logs and artifacts
                * Sends notifications or triggers other jobs
* **What are Build Triggers in Jenkins?**
    * Keywords, concepts, or topics that should be in the response:
        * Mechanisms that start a Jenkins build automatically or manually
        * Can be based on events, schedules, or external systems
        * Help automate CI/CD workflows
    * Possible follow-up questions:
        * **What are the different types of Jenkins Build Triggers?**
            * Keywords, concepts, or topics that should be in the response:
                * Source code changes (e.g., Git commits)
                * Scheduled builds using CRON syntax
                * Manual triggers by users
                * Upstream/downstream job completions
                * Remote triggers via API or webhooks
* **What are GitHub Webhooks in Jenkins?**
    * Keywords, concepts, or topics that should be in the response:
        * Webhooks notify Jenkins of events in a GitHub repository
        * Commonly used to trigger builds on push or pull request
        * Enable real-time CI/CD automation
        * Configured in GitHub and linked to Jenkins job URLs
* **What are Build Steps in Jenkins?**
    * Keywords, concepts, or topics that should be in the response:
        * Actions Jenkins performs during a build
        * Includes compiling code, running tests, packaging, deploying
        * Defined in job configuration or pipeline scripts
    * Possible follow-up questions:
        * **What are common types of Build Steps?**
            * Keywords, concepts, or topics that should be in the response:
                * Shell scripts or batch commands
                * Build tools like Maven, Gradle, Ant
                * Test runners and deployment scripts
* **How does Jenkins use Source Control Management in a pipeline?**
    * Keywords, concepts, or topics that should be in the response:
        * Pulls code from repositories as the first step
        * Can be configured in the pipeline script or UI
        * Supports credentials and branch filtering
* **What is Credential Management in Jenkins?**
    * Keywords, concepts, or topics that should be in the response:
        * Securely stores sensitive information (e.g., passwords, tokens, SSH keys)
        * Used to authenticate with external systems (e.g., Git, Docker, cloud services)
        * Prevents hardcoding secrets in job configurations or scripts
        * Managed through the Jenkins Credentials plugin
    * Possible follow-up questions:
        * **What types of credentials can Jenkins store?**
            * Keywords, concepts, or topics that should be in the response:
                * Username and password
                * SSH keys
                * Secret text (e.g., API tokens)
                * Certificates and files
                * AWS credentials and other cloud provider secrets
* **What are Build Artifacts in Jenkins?**
    * Keywords, concepts, or topics that should be in the response:
        * Files generated as a result of a build (e.g., JARs, WARs, ZIPs)
        * Represent compiled code, packaged applications, or test results
        * Can be archived, downloaded, or passed to other jobs
        * Useful for deployment, testing, or distribution

## Preferred Questions

[Back to top](#unit)

* **What are Freestyle Jobs in Jenkins?**
    * Keywords, concepts, or topics that should be in the response:
        * UI-based configuration
        * Suitable for simple, quick tasks
        * Limited support for complex workflows
        * Not easily version-controlled
        * Basic scripting capabilities
    * Possible follow-up questions:
        * **When should you use a Freestyle Job in Jenkins?**
            * Keywords, concepts, or topics that should be in the response:
                * Best for small, straightforward tasks
                * Quick setup without scripting
                * Ideal for beginners or one-off jobs
        * **What are the limitations of Freestyle Jobs?**
            * Keywords, concepts, or topics that should be in the response:
                * Difficult to manage complex workflows
                * Configuration not stored in source control
                * Cannot resume after Jenkins restarts
* **What are Pipeline Jobs in Jenkins?**
    * Keywords, concepts, or topics that should be in the response:
        * Defined using code (Jenkinsfile)
        * Supports complex, multi-stage workflows
        * Stored in version control with the application code
        * Full scripting with Groovy
        * Can resume from checkpoints after restarts
        * Easily scalable with shared libraries
    * Possible follow-up questions:
        * **What are the advantages of Pipeline Jobs over Freestyle Jobs?**
            * Keywords, concepts, or topics that should be in the response:
                * Better suited for robust CI/CD pipelines
                * Enables version-controlled configuration
                * Supports advanced logic and parallel execution
                * More durable and scalable
        * **How are Jenkins Pipelines defined and managed?**
            * Keywords, concepts, or topics that should be in the response:
                * Written in Groovy using a Jenkinsfile
                * Stored in the same repository as the source code
                * Managed through code review and version control
* **What is a Jenkinsfile?**
    * Keywords, concepts, or topics that should be in the response:
        * A text file that defines a Jenkins Pipeline
        * Written in Groovy using declarative or scripted syntax
        * Enables version-controlled CI/CD configuration
        * Typically stored in the root of the project repository
    * Possible follow-up questions:
        * **How do you use a Jenkinsfile in a Jenkins job?**
            * Keywords, concepts, or topics that should be in the response:
                * Create a Pipeline job in Jenkins
                * Select "Pipeline script from SCM"
                * Configure repository and branch
                * Jenkins automatically detects and runs the Jenkinsfile
        * **Why store a Jenkinsfile in version control?**
            * Keywords, concepts, or topics that should be in the response:
                * Enables traceability and collaboration
                * Keeps pipeline logic in sync with code
                * Supports code review and rollback
* **What is the basic structure of a Jenkinsfile?**
    * Keywords, concepts, or topics that should be in the response:
        * Uses `pipeline {}` as the root block
        * Contains `agent`, `stages`, and `steps` blocks
        * Defines a sequence of stages like Build, Test, Deploy
        * Each stage contains steps to execute commands
* **What are Environment Variables in Jenkins?**
    * Keywords, concepts, or topics that should be in the response:
        * Provide dynamic values used throughout the build process
        * Improve portability and configurability of jobs
        * Can be built-in, custom, or injected
        * Accessible in shell scripts and pipeline scripts
    * Possible follow-up questions:
        * **What are the types of environment variables in Jenkins?**
            * Keywords, concepts, or topics that should be in the response:
                * Built-in: Provided by Jenkins (e.g., BUILD_NUMBER, JOB_NAME)
                * Custom: Defined by users in job or pipeline configuration
                * Injected: Supplied by plugins or external sources (e.g., credentials)
* **What are common third-party integrations with Jenkins for Java development?**
    * Keywords, concepts, or topics that should be in the response:
        * Git and GitHub for source control and webhooks
        * Maven and Gradle for Java build automation
        * JUnit for unit testing and test reporting
        * SonarQube for static code analysis and quality gates
        * Nexus or Artifactory for artifact storage and dependency management
        * Docker for containerizing Java applications
        * Slack, Teams, or email for build notifications
* **What is the role of Controller and Agent Nodes in Jenkins?**
    * Keywords, concepts, or topics that should be in the response:
        * Follows a controller-agent (formerly master-agent) architecture
        * Controller manages UI, job scheduling, and plugin configuration
        * Agents execute build jobs on separate machines or environments
        * Enables distributed builds and parallel execution
    * Possible follow-up questions:
        * **What does the Jenkins Controller do?**
            * Keywords, concepts, or topics that should be in the response:
                * Hosts the web UI and manages job configurations
                * Schedules builds and assigns them to agents
                * Monitors agents and records build results
                * Can run lightweight jobs (though not recommended)
        * **What is the purpose of Jenkins Agent Nodes?**
            * Keywords, concepts, or topics that should be in the response:
                * Execute build jobs assigned by the controller
                * Run on various platforms (Linux, Windows, macOS, containers)
                * Help distribute workloads and improve scalability
        * **How do Jenkins Controllers and Agents communicate?**
            * Keywords, concepts, or topics that should be in the response:
                * Secure communication over SSH or JNLP
                * SSH for Unix-based agents
                * JNLP for agents behind firewalls or on Windows

## Stretch Questions

[Back to top](#unit)

* **How does Jenkins integrate with cloud platforms?**
    * Keywords, concepts, or topics that should be in the response:
        * Supports integration with major cloud providers (AWS, Azure, GCP)
        * Enables dynamic provisioning of build agents
        * Can deploy applications to cloud environments
        * Uses plugins and APIs for seamless connectivity
    * Possible follow-up questions:
        * **What are common use cases for Jenkins in the cloud?**
            * Keywords, concepts, or topics that should be in the response:
                * Running CI/CD pipelines on cloud infrastructure
                * Deploying applications to cloud services (e.g., EC2, App Engine, AKS)
                * Scaling build agents using cloud auto-scaling
                * Storing artifacts in cloud storage (e.g., S3, Azure Blob)
* **How can Jenkins endpoints be secured in a cloud-based setup?**
    * Keywords, concepts, or topics that should be in the response:
        * Use HTTPS to encrypt traffic
        * Restrict access using firewalls, security groups, or IP whitelisting
        * Enable authentication and authorization controls
        * Regularly update Jenkins and plugins
        * Use secrets management for credentials
