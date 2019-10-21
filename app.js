const express = require("express");
const bodyParser = require("body-parser");
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const config = require('./webpack.config');
const compiler = webpack(config);
const path = require('path')
const port = process.env.PORT || 8080;
const app = express();

app.use(middleware(compiler, { 
  publicPath: config.output.publicPath
 }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname, ''));

//routes 
const email_route = require('./routes/emails');

app.listen(port, ()=> console.log(`app on port  ${port}!`))

app.use('/contact',email_route);
app.get('/', function(req, res){
  res.sendFile('index.html')
})

//ping server to stay awake
setInterval(() => {
  app.get('http://www.aarontempleton.com');
}, 300000);