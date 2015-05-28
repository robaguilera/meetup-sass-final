module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Sass to CSS
    sass: {
      app: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: 'css',
          ext: '.css'
        }]
      },
      options: {
        sourceMap: true,
        outputStyle: 'nested',
        imagePath: "../",
      }
    },
    connect: {
	    all: {
		    options: {
			    port: 3000,
		    }
	    }
    },
    watch: {
      sass: {
        files: ['scss/{,*/}*.{scss,sass}'],
        tasks: ['sass'],
	options: {
		livereload: false,
	}
      },
      livereload: {
        files: ['css/styles.css'],
	options: {
		livereload: true,
	}
      }
    },
  });

  // Loads Grunt Tasks
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'watch']);
  grunt.registerTask('server', ['connect', 'sass', 'watch']);
};
