//line chart ---------------------------------------------
// reference week 15, day 1, activity 8
// -----------------------------------------------------
// console.log("HEY IM RUNNING IN FLASK!")


function buildPlot1() {
  var url = "/line";
  // use 'd3.json' to etch the sample data for the plots
    d3.json(url).then(function(response) {
      // console.log(response);
      var accident = []
      var alzheimers = []
      var clrd = []
      var cancer = []
      var diabetes = []
      var heart = []
      var influenza = []
      var kidney = []
      var suicide = []
      var stroke = []
      var year = []      

      response.forEach(d => {
        accident.push(d["Accident"])
        alzheimers.push(d["Alzheimer's Disease"])
        clrd.push(d["CLRD"])
        cancer.push(d["Cancer"])
        diabetes.push(d["Diabetics "])
        heart.push(d["Heart"])
        influenza.push(d["Influenza"])
        kidney.push(d["Kidney"])
        suicide.push(d["Suicide"])
        stroke.push(d["Stroke"])
        year.push(d["Year"])
      })

      var trace1 = {
        x: year,
        y: alzheimers,
        mode: "markers",
        type: "scatter",
        name: "Alzheimer's Disease",
        marker: {color: "#2077b4", symbol: "hexagram"}
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
      // // Create the data array for the plot
      var data = [trace1, trace2, trace3];
      // // Define the plot layout
      var layout = {
        title: "Change in Casues of Death Over the Years",
        xaxis: { title: "Year" },
        yaxis: { title: "Cause of Death" }
      };
      // // Plot the chart to a div tag with id "plot"
      Plotly.newPlot("line", lineData, layout);
  });
}
buildPlot1();

// bar chart -------------------------------------------
// reference: https://plot.ly/javascript/bar-charts/
// also look into Week 15, Day 1, Activity 
// Activity 16:2:3 - Bar Chart from csv
var url = "/bar";
function buildPlot2() {
  d3.json(url).then(function(response) {
    console.log(response); 
    var cause = []
    var rate1999 = []
    var rate2008 = []
    var rate2016 = []
      response.forEach(d => {
        cause.push(d["Cause"])
        rate1999.push(d["Rates1999"])
        rate2008.push(d["Rates2008"])
        rate2016.push(d["Rates2016"])
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
   Plotly.newPlot('bar', barData);
  });
}
buildPlot2();
// ------------------------------------------------------
 
// pie chart --------------------------------------------
// reference: https://plot.ly/javascript/pie-charts/ 
// make interactive with dropdown events: look at week 15, day 2, activity 2
var url = "/pie";
function buildPlot3() {
  d3.json(url).then(function(response) {
    console.log(response); 

    function initPie() {
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
    initPie();

    Plotly.newPlot('pie', pieData, layout);
  });
}
buildPlot3();
// ---------- --------------------------------------------