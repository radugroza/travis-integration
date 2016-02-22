module.exports = function (grunt) {
    // These will become a default configs for inherited gruntfiles
    grunt.initConfig({
        phpcs: {
            app: {
                src: ['src/*.php']
            },
            options: {
                standard: 'WordPress-Core'
            }
        }
    });
    // All tasks must be loaded relative to the module in node_modules
    // This should also be --save as they're now dependencies
    grunt.loadNpmTasks('grunt-phpcs');

    grunt.registerTask('default', 'phpcs');
};