'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    env: {
	dev: {
		NODE_ENV: 'development'		
	     }
	, prod:
		{	 

		NODE_ENV: 'production'

		}
	},

	run: {
		commands: {
			exec: 'npm start' , 
		}  
	}
	
     
  });
   

  grunt.loadNpmTasks('grunt-run'); 
  grunt.loadNpmTasks('grunt-contrib-uglify'); //minifies files 
  grunt.loadNpmTasks('grunt-reload'); //reloads browser if files changes 
//create dev task
  grunt.registerTask('default', ['install', 'run']) 
  grunt.registerTask('install', 'install the backend and frontend dependencies', function() {
    var exec = require('child_process').exec;
    var cb = this.async();
    exec('npm install', {cwd: '.'}, function(err, stdout, stderr) {
      console.log(stdout);
      cb();
    });
   exec('bower install', {cwd: '.'}, function(err, stdout, stderr){
	console.log(stdout); 
	});
  });
};
