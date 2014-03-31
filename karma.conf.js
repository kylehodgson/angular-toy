// Karma configuration
// Generated on Sun Mar 30 2014 14:46:43 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],

    preprocessors: { },
    // list of files / patterns to load in the browser
    files: [
      'src/lib/q.js',
      'src/lib/jquery.js',
      'src/lib/angular.js',
      'src/lib/underscore.js',
      'src/lib/duck-angular.js',
      'src/app/services/*.js',
      'src/app/controllers/*.js',
      'src/app/app.js',
      'spec/**/*test.js',
      'src/lib/require.js',
      {pattern: 'src/lib/text.js', watched: true, included: false, served: true},
      {pattern: 'src/**/*.html', watched: true, included: false, served: true}
    ],


    // list of files to exclude
    exclude: [
      '**/*.swp'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
