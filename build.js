const { build } = require('esbuild');
const { devDependencies } = require('./package.json');
const svgrPlugin = require('esbuild-plugin-svgr');

const entryFile = 'src/index.ts';
const shared = {
    bundle: true,
    entryPoints: [entryFile],
    // Treat all dependencies in package.json as externals to keep bundle size to a minimum
    external: Object.keys(devDependencies),
    logLevel: 'info',
    minify: true,
    sourcemap: true,
    plugins: [svgrPlugin()],
};

build({
    ...shared,
    format: 'esm',
    outfile: './dist/index.esm.js',
    target: ['esnext', 'node12.22.0'],
});

build({
    ...shared,
    format: 'cjs',
    outfile: './dist/index.cjs.js',
    target: ['esnext', 'node12.22.0'],
});
