pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('1ede0dfb-20f1-46cb-9599-1dd484d9b50e')
    }
    stages {
        // stage('Git Checkout') {
        //     steps {
        //         checkout([$class: 'GitSCM', branches: [[name: '*/master']], userRemoteConfigs: [[url: 'https://github.com/GeraldAkenji/Guessing-Game.git']]])
        //     }
        // }
        stage('Docker Build') {
            steps {
                script {
                    sh "docker build -t geraldakenji/guessing-game ."
                }
            }
        }
        stage('Docker Push') {
            steps {
                script {
                    sh "echo ${DOCKERHUB_CREDENTIALS_PSW} | docker login -u ${DOCKERHUB_CREDENTIALS_USR} --password-stdin"
                    sh "docker push geraldakenji/guessing-game"
                }
            }
        }
    }
}