var _ = require("lodash");
var Plotly = require("plotly.js");

var data = require("./data");

var weeks = _.range(2, 37);

var alg2Results = [];
var engResults = [];

weeks.forEach(function(weekInt) {
  for(var i=0; i<data.length; i++) {
    if(data[i].weekNumber == weekInt) {
      alg2Results.push(data[i].alg2Rate);
      engResults.push(data[i].engRate);
      break;
    }
  }
});

var trace1 = {
  x: weeks.slice(0,alg2Results.length),
  y: alg2Results,
  type: 'line',
  name: "Algebra 2 Rates"
};

var trace2 = {
  x: weeks.slice(0,engResults.length),
  y: engResults,
  type: 'line',
  name: "Engineering Rates"
};

var data = [trace1, trace2];

var layout = {
  title: 'Assignment Completion Rates',
  xaxis: {
    title: 'Week Number'
  },
  yaxis: {
    title: 'Percentage'
  }
};

Plotly.newPlot('plot-results', data, layout);
