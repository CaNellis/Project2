//line chart ---------------------------------------------
// reference week 15, day 1, activity 8
// -----------------------------------------------------
// console.log("HEY IM RUNNING IN FLASK!")

function buildLine() {
  var url = "http://localhost:5000/line";
  // use 'd3.json' to etch the sample data for the plots
  d3.json(url).then(function(response) {
      var accident = [];
      var alzheimers = [];
      var clrd = [];
      var cancer = [];
      var diabetes = [];
      var heart = [];
      var influenza = [];
      var kidney = [];
      var suicide = [];
      var stroke = [];
      var year = [];   

      response.forEach(d => {
        accident.push(d["Accident"]);
        alzheimers.push(d["Alzheimer's Disease"]);
        clrd.push(d["CLRD"]);
        cancer.push(d["Cancer"]);
        diabetes.push(d["Diabetics "]);
        heart.push(d["Heart"]);
        influenza.push(d["Influenza"]);
        kidney.push(d["Kidney"]);
        suicide.push(d["Suicide"]);
        stroke.push(d["Stroke"]);
        year.push(d["Year"]);
      })

      var trace1 = {
        x: year,
        y: alzheimers,
        mode: "markers",
        type: "scatter",
        name: "Alzheimer's Disease",
        marker: {
          color: "#2077b4", 
          symbol: "hexagram"
        }
      };
      var trace2 = {
        x: year,
        y: clrd,
        mode: "markers",
        type: "scatter",
        name: "Chronic Lower Respiratory Disease",
        marker: {
          color: "orange",
          symbol: "diamond-x"
        }
      };
      var trace3 = {
        x: year,
        y: cancer,
        mode: "markers",
        type: "scatter",
        name: "Cancer",
        marker: {
          color: "rgba(156, 165, 196, 1.0)",
          symbol: "cross"
        }
      };
      var trace4 = {
        x: year,
        y: diabetes,
        mode: "markers",
        type: "scatter",
        name: "Diabetes",
        marker: {
          color: "red",
          symbol: "cross"
        }
      };
      var trace5 = {
        x: year,
        y: heart,
        mode: "markers",
        type: "scatter",
        name: "Heart Disease",
        marker: {
          color: "blue",
          symbol: "cross"
        }
      };
      var trace6 = {
        x: year,
        y: influenza,
        mode: "markers",
        type: "scatter",
        name: "Influenza",
        marker: {
          color: "green",
          symbol: "cross"
        }
      };
      var trace7 = {
        x: year,
        y: kidney,
        mode: "markers",
        type: "scatter",
        name: "Kidney",
        marker: {
          color: "purple",
          symbol: "cross"
        }
      };
      var trace8 = {
        x: year,
        y: stroke,
        mode: "markers",
        type: "scatter",
        name: "Stroke",
        marker: {
          color: "aqua",
          symbol: "cross"
        }
      };
      var trace9 = {
        x: year,
        y: suicide,
        mode: "markers",
        type: "scatter",
        name: "Suicide",
        marker: {
          color: "gold",
          symbol: "cross"
        }
      };
      var trace10 = {
        x: year,
        y: accident,
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
        yaxis: { title: "Death Rate (per 100,000 people)" }
      };
      // Plot the chart to a div tag with id "plot"
      Plotly.newPlot("line", data, layout);
  });
}
buildLine();


// bar chart -------------------------------------------
// reference: https://plot.ly/javascript/bar-charts/
// also look into Week 15, Day 1, Activity 
// Activity 16:2:3 - Bar Chart from csv
function buildBar() {
  var url = "http://localhost:5000/bar";
  d3.json(url).then(function(response) {
    var cause = [];
    var rates1999 = [];
    var rates2008 = [];
    var rates2016 = [];
    response.forEach(d => {
      cause.push(d["Cause"]);
      rates1999.push(d["Rates1999"]);
      rates2008.push(d["Rates2008"]);
      rates2016.push(d["Rates2016"]);
    })
    function initBar() {
      var barData = [{x: cause, y: rates2016, type: 'bar'}];
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
      case "dataset4": data = rates2016; break;
      case "dataset5": data = rates2008; break;
      case "dataset6": data = rates1999; break;
      default: data = rates2016; 
      }
      updatePlotly(data);
    }
    initBar();
  });
}
buildBar();

// ------------------------------------------------------

// pie chart --------------------------------------------
// reference: https://plot.ly/javascript/pie-charts/ 
// make interactive with dropdown events: look at week 15, day 2, activity 2
function buildPie() {
  var url = "http://localhost:5000/pie";
  d3.json(url).then(function(response) { 
    var cause = [];
    var percents1999 = [];
    var percents2008 = [];
    var percents2016 = [];
    response.forEach(d => {
      cause.push(d["Cause"]);
      percents1999.push(d["Percents1999"]);
      percents2008.push(d["Percents2008"]);
      percents2016.push(d["Percents2016"]);
    })
    function initPie() {
      var data = [{values: percents2016, labels: cause, type: 'pie'}];
      var layout = {height: 400, width: 500};
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
        case "dataset1": data = percents2016; break;
        case "dataset2": data = percents2008; break;
        case "dataset3": data = percents1999; break;
        default: data = percents2016; 
        }
        updatePlotly(data);
      }
    initPie();
    Plotly.newPlot('pie', data, layout);
  });
}
buildPie();
// ---------- --------------------------------------------