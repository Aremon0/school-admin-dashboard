pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Aremon0/school-admin-dashboard.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t school-dashboard .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop school-dashboard || true
                docker rm school-dashboard || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 8081:80 --name school-dashboard school-dashboard'
            }
        }
    }
}
