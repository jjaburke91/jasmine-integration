module.exports = function(grunt) {
	grunt.initConfig({
		jasmine : {
			// Your project's source files
			src : 'src/*.js',

			// Your Jasmine spec files
			specs : 'src/*spec.js',
			options: {
				keepRunner: true
			}
		}
	});

	// Register tasks.
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	// Default task.
	grunt.registerTask('default', 'jasmine');
};
