var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.json());
app.use(cors());

app.get('/:date', function(req, res){
    var datein = req.params.date;
  if(datein == parseInt(datein)){
    var unixDate = datein;
    var ts = datein * 1000;
        var d = new Date(ts);
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var year = d.getUTCFullYear();
      var month = d.getUTCMonth();
      var day = d.getUTCDate();
      month = months[month];
      var naturalDate = month + " " + day + ", " + year;
    } 
    else if(isNaN(datein)){
        var d = new Date(datein);
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      var year = d.getFullYear();
      var month = d.getMonth();
      var day = d.getDate();
      month = months[month-1];
      var naturalDate = month + " " + day + ", " + year;
        var unixDate = d.getTime() / 1000;
    } 
  
  if(!unixDate){
    res.json({unix: null, natural: null});
  }

    res.json({unix: unixDate, natural: naturalDate})
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
