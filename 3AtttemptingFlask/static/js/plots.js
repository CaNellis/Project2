//line chart ---------------------------------------------
// reference week 15, day 1, activity 8
// -----------------------------------------------------

// console.log("HEY IM RUNNING IN FLASK!")

var url = "/line";
function buildPlot() {
  d3.json(url).then(function(response) {
    console.log(response);
     // Create the Traces
      var trace1 = {
        x: lineData.Year,
        y: lineData.Alzheimers,
        mode: "markers",
        type: "scatter",
        name: "Alzheimer's Disease",
        marker: {color: "#2077b4", symbol: "hexagram"
        }
      };
      var trace2 = {
        x: lineData.Year,
        y: lineData.CLRD,
        mode: "markers",
        type: "scatter",
        name: "Chronic Lower Respiratory Disease",
        marker: {
          color: "orange",
          symbol: "diamond-x"
        }
      };
      var trace3 = {
        x: lineData.Year,
        y: lineData.Cancer,
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
        title: "Change in Casues of Death Over the Years",
        xaxis: { title: "Year" },
        yaxis: { title: "Cause of Death" }
      };
      // Plot the chart to a div tag with id "plot"
      Plotly.newPlot("line",lineData, layout);
  });
}
buildPlot();

// bar chart -------------------------------------------
// reference: https://plot.ly/javascript/bar-charts/
// also look into Week 15, Day 1, Activity 5
var url = "/bar";
function buildPlot() {
  d3.json(url).then(function(response) {
    console.log(response); 
    var barData = [
      {
        x: data2.Cause,
        y: data2.Rate,
        type: 'bar'
      }
    ];
   Plotly.newPlot('bar', barData);
  });
}
buildPlot();
// ------------------------------------------------------
 
// pie chart --------------------------------------------
// reference: https://plot.ly/javascript/pie-charts/ 
// make interactive with dropdown events: look at week 15, day 2, activity 2
var url = "/pie";
function buildPlot() {
  d3.json(url).then(function(response) {
    console.log(response); 
    var pieData = [{
      values: data4.Percents2016,
      labels: data4.Cause2016,
      type: 'pie'
    }];
    var layout = {
      height: 400,
      width: 500,
      title: "U.S. Leading Casues of Death in 2016"
    };
    Plotly.newPlot('pie', pieData, layout);
  });
}
buildPlot();
// ---------- --------------------------------------------