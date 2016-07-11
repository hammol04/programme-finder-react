module.exports = function ( grunt ) {
    var path = require( "path" );

    grunt.initConfig( {
        staticPath: path.resolve() + "/assets",
        outputPath: path.resolve() + "/web",

        sass: {
            dev: {
                options: {
                    outputStyle: "expanded"
                },
                files: [ {
                    expand: true,
                    cwd: "<%=staticPath%>/scss",
                    src: [ "*.scss" ],
                    dest: "<%=outputPath%>",
                    ext: ".css"
                } ]
            },
            dist: {
                options: {
                    outputStyle: "compressed"
                },
                files: [ {
                    expand: true,
                    cwd: "<%=staticPath%>/scss",
                    src: [ "*.scss" ],
                    dest: "<%=outputPath%>",
                    ext: ".css"
                } ]
            }
        },
    } );

    grunt.loadNpmTasks( "grunt-sass" );

    grunt.registerTask( "server", [ "shell:server" ] );
    grunt.registerTask( "build", [ "sass:dist"] );
    grunt.registerTask( "default", [ "sass:dev"] );
};
