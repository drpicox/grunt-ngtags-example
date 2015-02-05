'use strict';

module.exports = function(grunt) {

	// Project tasks configurations
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// (C) Tasks configurations here
		connect: {
			options: {
				hostname: '0.0.0.0', // allow remote conn.
				port: 9865,
				livereload: 19865,
			},
			livereload: {
				options: {
					base: [ 'src','.tmp','.' ],
				},				
			},
		},

		ngtags: {
			options: {
				module: 'myApp',
				excludeStyle: true,
			},
			build: {
				src: 'src/{components,pages}/*.ngtag',
				dest: '.tmp/ngtags.js',
			},
			style: {
				src: 'src/{components,pages}/*.ngtag',
				dest: '.tmp/ngtags.css',
				options: {
					generateStyle: true,
				},
			},
		},

		watch: {
			ngtags: {
				files: ['src/{components,pages}/*.ngtag'],
				tasks: ['ngtags']
			},
			livereload: {
				options: {
					livereload: 19865, //'<%= connect.options.livereload %>',
				},
				files: [
					'{src,.tmp}/**/*.{html,js,css}',
				],
			}
		}		
	});

	// (L) Load here grunt plugins with tasks
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-ngtags');

	// (T) Add here your task(s) 
	grunt.registerTask('default', ['serve']);
	grunt.registerTask('serve', ['ngtags','connect:livereload','watch']);

};