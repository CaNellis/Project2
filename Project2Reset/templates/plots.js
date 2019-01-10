

//line chart
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

// Create the data array for the plot
var data = [trace1, trace2, trace3];

// Define the plot layout
var layout = {
  title: "U.S. Leading Casues of Death Over the Years",
  xaxis: { title: "Year" },
  yaxis: { title: "Cause of Death" }
};

// Plot the chart to a div tag with id "plot"
Plotly.newPlot("line", data, layout);


