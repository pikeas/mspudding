const config = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
}

const gulp 			= require('gulp')
const inline 		= require('gulp-inline')
const pug 			= require('gulp-pug')
const minifyCSS 	= require('gulp-minify-css')
const uglify 		= require('gulp-uglify')
const s3 			= require('gulp-s3-upload')(config)

gulp.task("upload", function() {
    return 	gulp.src("./Client/**")
		    .pipe(s3({
		        Bucket: process.env.AWS_S3_BUCKET_NAME,
		        ACL:    'public-read'
		    }, 
		    {
		        maxRetries: 5
		    }))
})



gulp.task('default', ['upload'])