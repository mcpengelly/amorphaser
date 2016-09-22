module.exports = function (grunt) {
	grunt.initConfig({
		ts: {
			dev: {
				src: ['src/scripts/**/*.ts'],
				dest: 'public/js',
				options: {
					module: 'amd', //or commonjs
					target: 'es5', //or es3
					sourceMap: true, //enable sourcemaps so browser throws errors for .ts code, not .js
					declaration: false
				}
			}
		},
		tslint: {
			options: {
				// can be a configuration object or a filepath to tslint.json
				configuration: "tslint.json",
				// If set to true, tslint errors will be reported, but not fail the task
				// If set to false, tslint errors will be reported, and the task will fail
				force: false
			},
			files: {
				src: [
					'src/scripts/**/*.ts'
				]
			}
		},
		copy: {
			dev: {
				files: [
					{
						expand: true,
						cwd: 'src',
						src: [
								'assets/**'
						],
						dest: 'public/'
					},
					{
						src: 'src/index.html',
						dest: 'public/index.html'
					},
					{
						src: 'bower_components/phaser/build/custom/phaser-arcade-physics.js',
						dest: 'public/vendor/phaser/phaser.js'
					}
				]
			}
		},

		clean: {
			dev: ['public/**/*']
		},

		watch: {
			scripts: {
				files: ['src/**/*'],
				tasks: ['dev'],
				options: {
					spawn: false,
					debounceDelay: 250
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('dev', [
		'clean:dev',
		'ts:dev',
		'copy:dev'
	]);
};
