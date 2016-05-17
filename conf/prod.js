import path from 'path';
import webpack from 'webpack';
import baseConfig from './base';

export default baseConfig({
    output: { path: path.join(__dirname, '../build/extension') },
    globals: {
        'process.env': {
            NODE_ENV: '"production"'
        }
    }
});