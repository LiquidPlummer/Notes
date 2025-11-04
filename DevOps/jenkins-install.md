# Jenkins Installation on Ubuntu EC2

## 1. Launch EC2 Instance
- Choose **Ubuntu 22.04 LTS**
- Instance type: **t2.medium** or larger (Jenkins needs resources)
- Security group rules:
  - Port 22 (SSH)
  - Port 8080 (Jenkins web interface)

## 2. Connect via SSH
```bash
ssh -i your-key.pem ubuntu@your-instance-ip
```

## 3. Install Java 17
```bash
sudo apt update
sudo apt install openjdk-17-jdk -y
```

Verify installation:
```bash
java -version
```

## 4. Install Jenkins
```bash
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null

echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list

sudo apt update
sudo apt install jenkins -y
```

## 5. Start Jenkins
```bash
sudo systemctl start jenkins
sudo systemctl enable jenkins
```

Check status:
```bash
sudo systemctl status jenkins
```

## 6. Get Initial Admin Password
```bash
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

Copy this password - you'll need it in the next step.

## 7. Access Jenkins Web Interface
1. Open browser and navigate to: `http://your-instance-ip:8080`
2. Paste the initial admin password
3. Click "Install suggested plugins"
4. Create your admin user account
5. Set Jenkins URL (or keep default)

## Done!
Jenkins is now running and ready to use.

---

# Installing Docker for Jenkins

## 1. Install Docker
```bash
sudo apt update
sudo apt install docker.io -y
```

Start and enable Docker:
```bash
sudo systemctl start docker
sudo systemctl enable docker
```

## 2. Add Jenkins User to Docker Group
This allows Jenkins to run Docker commands without sudo:
```bash
sudo usermod -aG docker jenkins
```

## 3. Restart Jenkins
For the group change to take effect:
```bash
sudo systemctl restart jenkins
```

## 4. Verify Docker Access
Check that Docker is working:
```bash
sudo -u jenkins docker ps
```

You should see an empty list of containers (not a permission error).

## 5. Install Docker Pipeline Plugin in Jenkins
1. Go to Jenkins web interface
2. Navigate to: **Manage Jenkins** → **Plugins** → **Available plugins**
3. Search for "Docker Pipeline"
4. Install the plugin
5. Restart Jenkins if prompted

## Done!
Jenkins can now run Docker commands and deploy to containers.

---

# Installing Node.js for Jenkins

## 1. Install Node.js and npm
Install Node.js 20 LTS:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs -y
```

Verify installation:
```bash
node -v
npm -v
```

## 2. Use in Pipeline
Jenkins will use the system Node installation:
```groovy
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
    }
}
```

## Done!
Jenkins can now build and deploy React apps.

---

# Installing AWS CLI for Jenkins

## 1. Install AWS CLI
```bash
sudo apt install awscli -y
```

Verify installation:
```bash
aws --version
```

## 2. Configure AWS Credentials
Run as jenkins user:
```bash
sudo -u jenkins aws configure
```

Enter:
- AWS Access Key ID
- AWS Secret Access Key
- Default region (e.g., us-east-1)
- Output format: json

## Done!
Jenkins can now deploy to AWS services like S3.

---

# Installing Maven for Jenkins

## 1. Install Maven
```bash
sudo apt install maven -y
```

Verify installation:
```bash
mvn --version
```

## Done!
Jenkins can now build Java/Spring Boot applications.