module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("package.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author.name %>\n" +
				" *  Under <%= pkg.licenses %> License\n" +
				" */\n"
		},

		// Lint definitions
		coffeelint: {
			app: ["src/labelholder.coffee"]
		},

		less: {
			development: {
				files: {
					"dist/labelholder.css": "src/less/labelholder-standalone.less"
				}
			},
			dist: {
				files: {
					"dist/labelholder.min.css": "src/less/labelholder-standalone.less"
				},
				options: {
					compress: true,
					optimization: 2
				}
			}
		},

		autoprefixer: {
			override: {
				src: 'dist/*.css'
			}
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ["dist/labelholder.js"],
				dest: "dist/labelholder.min.js"
			}
		},

		// CoffeeScript compilation
		coffee: {
			compile: {
				files: {
					"dist/labelholder.js": "src/labelholder.coffee"
				}
			}
		},

		usebanner: {
	    setBanners: {
	      options: {
	        position: 'top',
	        banner: '<%= meta.banner %>',
	        linebreak: true
	      },
	      files: {
	        src: [ 'dist/*' ]
	      }
	    }
	  },

		// watch for changes to source
		// Better than calling grunt a million times
		// (call 'grunt watch')
		watch: {
		    files: ['src/*'],
		    tasks: ['default']
		}

	});

	grunt.loadNpmTasks("grunt-coffeelint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-coffee");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks('grunt-banner');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask("default", ["less", "autoprefixer", "coffeelint", "coffee", "uglify", "usebanner"]);
};
