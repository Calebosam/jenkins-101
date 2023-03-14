pipeline {
  agent any
  stages {
    stage('Hello') {
      steps {
        echo 'Hello World'
      }
    }

    stage('echo build no.') {
      steps {
        sh 'echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"'
      }
    }

  }
}