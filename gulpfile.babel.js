'use strict';

import gulp     from 'gulp';
import webpack  from 'webpack';
import path     from 'path';
import serve    from 'browser-sync';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

let root = 'client';

let resolveToApp = (glob = '') => {
    return path.join(root, 'app', glob);
};

let resolveToComponents = (glob = '') => {
    return path.join(root, 'app/components', glob);
};

// map of all paths
let paths = {
    js: resolveToComponents('**/*!(.spec.js).js'),
    scss: resolveToApp('**/*.scss'),
    html: [
        resolveToApp('**/*.html'),
        path.join(root, 'index.html')
    ],
    entry: [
        path.join(__dirname, root, 'app/app.js')
    ],
    output: root,
    blankTemplates: path.join(__dirname, 'generator', 'component/**/*.**'),
    dest: path.join(__dirname, 'dist')
};

gulp.task('serve', () => {
    const config = require('./webpack.dev.config');
    config.entry.app = [
        'webpack-hot-middleware/client?reload=true'
    ].concat(paths.entry);

    var compiler = webpack(config);

    serve({
        port: process.env.PORT || 3000,
        open: false,
        server: {baseDir: root},
        middleware: [
            webpackDevMiddleware(compiler, {
                stats: {
                    chunks: false,
                    modules: false
                },
                publicPath: config.output.publicPath
            }),
            webpackHotMiddleware(compiler)
        ]
    });
});

