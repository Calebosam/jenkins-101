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
        echo '${env.BUILD_ID}'
      }
    }

  }
}