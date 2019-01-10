//line chart ---------------------------------------------
// reference:  week 15, day 1, activity 8
// Create the Traces
var trace1 = {
  x: data.Year,
  y: data.Alzheimers,
  mode: "markers",
  type: "scatter",
  name: "Alzheimer's Disease",
  marker: {color: "#2077b4", symbol: "hexagram"
  }
};
var trace2 = {
  x: data.Year,
  y: data.CLRD,
  mode: "markers",
  type: "scatter",
  name: "Chronic Lower Respiratory Disease",
  marker: {
    color: "orange",
    symbol: "diamond-x"
  }
};
var trace3 = {
  x: data.Year,
  y: data.Cancer,
  mode: "markers",
  type: "scatter",
  name: "Cancer",
  marker: {
    color: "rgba(156, 165, 196, 1.0)",
    symbol: "cross"
  }
};
var trace4 = {
  x: data.Year,
  y: data.Diabetes,
  mode: "markers",
  type: "scatter",
  name: "Diabetes",
  marker: {
    color: "red",
    symbol: "cross"
  }
};
var trace5 = {
  x: data.Year,
  y: data.Heart,
  mode: "markers",
  type: "scatter",
  name: "Heart Disease",
  marker: {
    color: "blue",
    symbol: "cross"
  }
};
var trace6 = {
  x: data.Year,
  y: data.Influenza,
  mode: "markers",
  type: "scatter",
  name: "Influenza",
  marker: {
    color: "green",
    symbol: "cross"
  }
};
var trace7 = {
  x: data.Year,
  y: data.Kidney,
  mode: "markers",
  type: "scatter",
  name: "Kidney",
  marker: {
    color: "purple",
    symbol: "cross"
  }
};
var trace8 = {
  x: data.Year,
  y: data.Stroke,
  mode: "markers",
  type: "scatter",
  name: "Stroke",
  marker: {
    color: "aqua",
    symbol: "cross"
  }
};
var trace9 = {
  x: data.Year,
  y: data.Suicide,
  mode: "markers",
  type: "scatter",
  name: "Suicide",
  marker: {
    color: "gold",
    symbol: "cross"
  }
};
var trace10 = {
  x: data.Year,
  y: data.Unintentional,
  mode: "markers",
  type: "scatter",
  name: "Accident",
  marker: {
    color: "tomato",
    symbol: "cross"
  }
};
// Create the data array for the plot
var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10];
// Define the plot layout
var layout = {
  xaxis: { title: "Year" },
  yaxis: { title: "Cause of Death" }
};
// Plot the chart to a div tag with id "plot"
Plotly.newPlot("line", data, layout);
// -----------------------------------------------------


// bar chart -------------------------------------------
// reference: https://plot.ly/javascript/bar-charts/
// class bar chart: Week 15, Day 1, Activity 5
function init2() {
  var barData = [{x: data2.Cause, y: data2.Rates2016, type: 'bar'}];
  var layout = {height: 400, width: 500};
  Plotly.plot('bar', barData, layout);
}
//define update plot function
function updatePlotly(newdata) {
  var BAR = document.getElementById("bar");
  Plotly.restyle(BAR, "values", [newdata]);
}
// define get data function
function getData2(dataset2) {
  var data = [];
  switch (dataset2) {
  case "dataset4": data = data2.Rates2016; break;
  case "dataset5": data = data2.Rates2008; break;
  case "dataset6": data = data2.Rates1999; break;
  default: data = data2.Rates2016; 
  }
  updatePlotly(data);
}
init2();
// ------------------------------------------------------


// pie chart --------------------------------------------
// reference: https://plot.ly/javascript/pie-charts
// dropdown reference: activity 15:2:2 
function init() {
  var data = [{
    values: data4.Percents2016,
    labels: data4.Cause,
    type: 'pie'
  }];
  var layout = {
    height: 400,
    width: 500
  };
  Plotly.plot('pie', data, layout);
}
  //define update plot function
  function updatePlotly(newdata) {
    var PIE = document.getElementById("pie");
    Plotly.restyle(PIE, "values", [newdata]);
  }
  // define get data function
  function getData(dataset) {
    var data = [];
    switch (dataset) {
    case "dataset1": data = data4.Percents2016; break;
    case "dataset2": data = data4.Percents2008; break;
    case "dataset3": data = data4.Percents1999; break;
    default: data = data4.Percents2016; 
    }
    updatePlotly(data);
  }
init();