pipeline {
  agent any
  stages {
    stage('Build') {
  		steps {
	        sh 'npm install'
	        sh 'npm build'
      	}
    }
    stage('Test') {
	      steps {
          echo 'running tests....'
          sh 'npm run test ./src/test'         
	      }
    }
    stage('Deploy') {
	      steps {
	        echo 'This is to deploy'
	      }
    }
  }
}
