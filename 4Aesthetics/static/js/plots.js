//line chart ----reference week 15, day 1, activity 8
function buildLine() {
  var url = "http://localhost:5000/line";
  // use 'd3.json' to fetch the sample data for the line chart
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
        accident.push(d["AccidentRate"]);
        alzheimers.push(d["AlzheimersRate"]);
        clrd.push(d["CLRDRate"]);
        cancer.push(d["CancerRate"]);
        diabetes.push(d["DiabetesRate "]);
        heart.push(d["HeartRate"]);
        influenza.push(d["InfluenzaFate"]);
        kidney.push(d["KidneyRate"]);
        suicide.push(d["SuicideRate"]);
        stroke.push(d["StrokeRate"]);
        year.push(d["Year"]);
      })

      var trace1 = {
        x: year,
        y: alzheimers,
        mode: "markers",
        type: "scatter",
        name: "Alzheimer's Disease"
      };
      var trace2 = {
        x: year,
        y: clrd,
        mode: "markers",
        type: "scatter",
        name: "Chronic Lower Respiratory Disease"
      };
      var trace3 = {
        x: year,
        y: cancer,
        mode: "markers",
        type: "scatter",
        name: "Cancer"
      };
      var trace4 = {
        x: year,
        y: diabetes,
        mode: "markers",
        type: "scatter",
        name: "Diabetes"
      };
      var trace5 = {
        x: year,
        y: heart,
        mode: "markers",
        type: "scatter",
        name: "Heart Disease"
      };
      var trace6 = {
        x: year,
        y: influenza,
        mode: "markers",
        type: "scatter",
        name: "Influenza"
      };
      var trace7 = {
        x: year,
        y: kidney,
        mode: "markers",
        type: "scatter",
        name: "Kidney"
      };
      var trace8 = {
        x: year,
        y: stroke,
        mode: "markers",
        type: "scatter",
        name: "Stroke" 
      };
      var trace9 = {
        x: year,
        y: suicide,
        mode: "markers",
        type: "scatter",
        name: "Suicide" 
      };
      var trace10 = {
        x: year,
        y: accident,
        mode: "markers",
        type: "scatter",
        name: "Accident"
      };
      // Create the data array for the plot
      var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10];
      // Define the plot layout
      var layout = {
        title: "Change in Causes' Death Rates Over the Years", 
        xaxis: { title: "Year" },
        yaxis: { title: "Death Rate (per 100,000 people)" },
      };
      // Plot the chart to a div tag with id "plot"
      Plotly.newPlot("line", data, layout);
  });
}
buildLine();

// stacked bar chart ----using highlights js instead of plotly
function buildStacked() {
  var url = "http://localhost:5000/stackedBar";
  d3.json(url).then(function(response) {
    var accident = [];
    var alzheimers = [];
    var clrd = [];
    var cancer = [];
    var diabetes = [];
    var heart = [];
    var flu = [];
    var kidney = [];
    var stroke = [];
    var suicide = [];
    var year = [];
    response.forEach(d => {
      accident.push(d["AccidentPercent"]);
      alzheimers.push(d["AlzheimersPercent"]);
      clrd.push(d["CLRDPercent"]);
      cancer.push(d["CancerPercent"]);
      diabetes.push(d["DiabetesPercent"]);
      heart.push(d["HeartPercent"]);
      flu.push(d["InfluenzaPercent"]);
      kidney.push(d["KidneyPercent"]);
      stroke.push(d["StrokePercent"]);
      suicide.push(d["SuicidePercent"]);

      year.push(d["Year"]); 
    })
    function initStacked() {
      Highcharts.chart('stackedBar', {
        chart: {type: 'column'},
        title: {text: "Change in Causes' Percent of Total Deaths Over Time"},
        xAxis: {categories: year},
        yAxis: {min: 0, title: {text: 'Percent of Total Deaths'}},
        tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
          shared: true
        },
        plotOptions: {column: {stacking: 'percent'}},
        series: [
          {name: 'Accident', data: accident}, 
          {name: 'Alzheimers', data: alzheimers}, 
          {name: 'CLRD', data: clrd}, 
          {name: 'Cancer', data: cancer},
          {name: 'Diabetes', data: diabetes},
          {name: 'Heart Disease', data: heart},
          {name: 'Influenza', data: flu},
          {name: 'Kidney', data: kidney},
          {name: 'Stroke', data: stroke},
          {name: 'Suicide', data: suicide}]
      });
    }
    initStacked();
  }); // end url.then
} // end buildStacked
buildStacked();