const path = require('path');
module.exports = {
    entry : "./javascript/index.js",
    mode : 'development',
    output : {
        path : path.resolve(__dirname, 'gao'),
        filename : 'gaoooo.js'
    }
}