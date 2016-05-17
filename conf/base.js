import path from 'path';
import webpack from 'webpack';

const extpath = path.join(__dirname, '../src/extension/chrome/');

const baseConfig = (params) => ({
    entry: params.input || {
        background: [ `${extpath}background/index` ],
        devpanel: [ `${extpath}devpanel/index` ],
        devtools: [ `${extpath}devtools/index` ],
        content: [ `${extpath}content/index` ],
        inject: [ `${extpath}inject/index` ],
        ...params.inputExtra
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        ...params.output
    },
    plugins: [
        new webpack.DefinePlugin(params.globals),
        ...(params.plugins ? params.plugins :
            [
                new webpack.optimize.DedupePlugin()
            ])
    ],
    module: {
        loaders: [
            ...(params.loaders ? params.loaders : [{
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }]),
            {
                test: /\.css?$/,
                loaders: ['style', 'raw']
            }
        ]
    }
});

export default baseConfig;