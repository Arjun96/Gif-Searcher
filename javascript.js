var express = require ('express');
var request = require('request');
var app = express();

app.get('/', function(req,res) {
  res.send('hello world! to look for a gif in the hyperlink by /gif?search=dogs      (anything can replace dog and you will find funny gifs!)');
}); // function is variable


app.get('/gifs', function(req,res){
  var search = req.query.search;
  request('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q='  + search, function(err,requ,body){
  var json = JSON.parse(body);
  var  gif = json.data[0].images.fixed_height.url;
  res.send('<img src="' + gif + '"/>');
})
});

app.listen(3000);