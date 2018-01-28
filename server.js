const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');
const app = new(require('express'))();

const port = 3000;

var http = require('http');
var static = require('node-static');
var file = new static.Server('.');

/*http.createServer(function(req, res) {
  file.serve(req, res);
}).listen(8080); 
console.log('Server running on port 8080');
*/

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  }
}); 

const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

