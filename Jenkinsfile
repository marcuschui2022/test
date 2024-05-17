pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'first-react-app'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/marcuschui2022/test'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${env.DOCKER_IMAGE}:${env.BUILD_ID} ."
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker run -d -p 8080:5000 ${env.DOCKER_IMAGE}:${env.BUILD_ID}"
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
