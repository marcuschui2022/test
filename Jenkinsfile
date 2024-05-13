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
                    def app = docker.build("${env.DOCKER_IMAGE}:${env.BUILD_ID}")
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    def app = docker.image("${env.DOCKER_IMAGE}:${env.BUILD_ID}")
                    app.run('-d -p 8080:5000')
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
