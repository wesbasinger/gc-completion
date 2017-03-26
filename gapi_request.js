var request = require("superagent");
//var _async = require("async");
//var _ = require("lodash");

var weekNum = process.argv[2];

function getWeek(weekNum, callback) {
  request
    .get('https://script.google.com/macros/s/AKfycbw5B3muIjmeht1J45kgUc06jz66MmFvzxL4fHV5zKqEGEo6-g/exec?')
    .query({week : weekNum})
    .end(function(err, res) {
      callback(err, res.body);
    });
}

getWeek(weekNum, function(err, result) {
  console.log(JSON.stringify(result));
})

/*
_async.map([2, 3, 4, 5, 6, 7, 8, 9, 10], getWeek, function(err, results) {
  console.log(results);
})
*/
