## Unit

# DevOps Concepts

## Links

* [Required Questions](#required-questions)
* [Preferred Questions](#preferred-questions)
* [Stretch Questions](#stretch-questions)

## Required Questions

[Back to top](#unit)

* **What is DevOps? What is the goal of various DevOps processes, and how do they support the SDLC?**
  * Keywords, concepts, or topics that should be in the response:
    * Combining developers with operations team; culture of shared responsibility + ownership over quality of code + build
    * Goal is to standardize, automate (remove human error), streamline, and speed up software deployment process
    * Get rapid feedback on code, use pipeline to know as soon as build is broken

* **Explain CI/CD. What is the difference between Continuous Deployment and Continuous Delivery?**
  * Keywords, concepts, or topics that should be in the response:
    * Continuous integration - developers push changes to a shared branch on a central repository; unit tests are initiated and run each time
    * Continuous delivery - CI + packaging & deploying to a testing / staging environment. Deploy at any time w/ click of btn
    * Continuous deployment - CD + automated deployment to production env. Only a failing test will stop deployment

* **What is a "build"? What is the end result of a build?**
  * Keywords, concepts, or topics that should be in the response:
    * A build is the process of compiling and packaging source code
    * The output of a build is an artifact (e.g. a .jar or .war file for Java project; .dll or .exe for .NET project)
    * Maven and Gradle are two build tools for Java, the .NET sdk includes a build tool for .NET projects

* **What is SonarQube / SonarCloud? Explain some of the features of it**
  * Keywords, concepts, or topics that should be in the response:
    * A code inspection / sniffing tool. Can detect code smells through static analysis of the code. Helpful for getting feedback on your code
    * Gives a report on code quality, technical debt, and code smells with severity ratings
    * It can be incorporated into your DevOps pipeline to give you code quality insights

* **What is a "code smell"?**
  * Keywords, concepts, or topics that should be in the response:
    * A bad practice that should be avoided - examples: too complex, possible null reference, repeated code, security vulnerability
    * Code smells are certain patterns in the code that may violate fundamental design principles and impact the design quality of our application
    * If we do not take care of code smells now it may contribute to technical debt
    * Possible follow-up questions:
      * **Would you say that code smells are bugs? Why or why not?**
        * They are not bugs
        * They are not technically incorrect and do not prevent the program from functioning but can increase the risk of bugs or failures in the future

* **How does static code analysis help with code smells?**
  * Keywords, concepts, or topics that should be in the response:
    * Static code analysis can help us ensure that the code we are creating adheres to industry standards

## Preferred Questions

[Back to top](#unit)

* **Why is monitoring and logging important for DevOps?**
  * Keywords, concepts, or topics that should be in the response:
    * `Monitoring`:
      * It is important to monitor our pipelines and various services for any downtime and other unexpected service disruptions that may happen
    * `Logging`:
      * Logging is important because we can trace back and look through the log file to figure out where went wrong and at what time for better traceability

* **What tools have you used to achieve CI/CD? Explain how you’ve setup and used them**
  * Keywords, concepts, or topics that should be in the response:
    * git - source code storage and version control
    * Jenkins/Github Actions - automation server; configure a Job to execute whenever a change is pushed via a webhook
    * SonarCloud - code inspection tool
    * Docker/Podman - containerization and deployment
    * AWS/Azure/GCP - Cloud application hosting and deployment

* **What is a DevOps pipeline? Explain the steps to setting one up**
  * Keywords, concepts, or topics that should be in the response:
    * Series of steps the code goes through: compiling, testing, building, code inspection, notifications, deployment, etc.

* **What are the stages of the DevOps lifecycel?**
  * Keywords, concepts, or topics that should be in the response:
    * Continuous Development - This stage involves planning, coding, and collaboratively managing the development process, often using version control systems.
    * Continuous Integration - Code changes are frequently integrated into a shared repository, and automated tests are run to ensure stability and prevent integration issues.
    * Continuous Testing - Automated and manual testing is performed throughout the development and integration process to identify and fix defects early on.
    * Continuous Deployment - The application is deployed to various environments, including staging and production, often through automated processes.
    * Continuous Monitoring - The application is continuously monitored for performance, errors, and other issues to ensure its stability and availability.
    * Continuous Feedback - Feedback from users, operations, and testing is collected and used to identify areas for improvement and enhance the development process.
    * Continuous Operations - This stage focuses on maintaining the deployed application, including managing infrastructure, resolving incidents, and providing ongoing support.

## Stratch Questions

[Back to top](#unit)

* **What is log aggregation, and how does it support an applications DevOps?**
  * Keywords, concepts, or topics that should be in the response:
    * Log aggregation is the gathering of logs from distributed services into one centralized location.
    * Log aggregation allows for the monitoring and alerting of many systems to be presented at once.
