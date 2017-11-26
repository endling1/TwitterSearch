const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const env = require('babel-preset-env');
const react = require('babel-preset-react');
const source = require('vinyl-source-stream');

const config = {
	paths: {
			'app': 'public/scripts/components/app.js',
			'scripts': 'public/scripts/*/*',
			'destination': 'public'
		}
}
gulp.task('js', () => {
	browserify(config.paths.app)
	.transform(babelify, {presets: [env, react]})
	.bundle()
	.on('error', console.error.bind(console))
	.pipe(source('index.js'))
	.pipe(gulp.dest('./public'))
});

gulp.task('watch', () => {
	gulp.watch(config.paths.scripts, ['js']);
});

gulp.task('default', ['js', 'watch']);