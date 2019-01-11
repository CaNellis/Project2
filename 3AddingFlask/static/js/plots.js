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

// bar chart ------ reference: Activity 16:2:3 - Bar Chart from csv
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

// pie chart --- make interactive with dropdown events: Activity 15:2:2
function buildPie() {
  var url = "http://localhost:5000/pie";
  d3.json(url).then(function(response) { 
    // define variables to hold data
    var pie1999 = [];
    var pie2000 = [];
    var pie2001 = [];
    var pie2002 = [];
    var pie2003 = [];
    var pie2004 = [];
    var pie2005 = [];
    var pie2006 = [];
    var pie2007 = [];
    var pie2008 = [];
    var pie2009 = [];
    var pie2010 = [];
    var pie2011 = [];
    var pie2012 = [];
    var pie2013 = [];
    var pie2014 = [];
    var pie2015 = [];
    var pie2016 = [];
    var pieCause = [];
    response.forEach(d => {
      pie1999.push(d["1999"]);
      pie2000.push(d["2000"]);
      pie2001.push(d["2001"]);
      pie2002.push(d["2002"]);
      pie2003.push(d["2003"]);
      pie2004.push(d["2004"]);
      pie2005.push(d["2005"]);
      pie2006.push(d["2006"]);
      pie2007.push(d["2007"]);
      pie2008.push(d["2008"]);
      pie2009.push(d["2009"]);
      pie2010.push(d["2010"]);
      pie2011.push(d["2011"]);
      pie2012.push(d["2012"]);
      pie2013.push(d["2013"]);
      pie2014.push(d["2014"]);
      pie2015.push(d["2015"]);
      pie2016.push(d["2016"]);
      pieCause.push(d["Cause"]); 
    })
    //define function to draw pie
    function initPie() {
      var pieTrace = [{
        values: pie1999, 
        labels: pieCause, 
        type: 'pie'}];
      var layout = {height: 400, width: 500};
      Plotly.plot('pie', pieTrace, layout);
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
      case "dataset1": data = pie1999; break;
      case "dataset2": data = pie2000; break;
      case "dataset3": data = pie2001; break;
        // case "dataset4": data = pie2002; break;
        // case "dataset5": data = pie2003; break;
        // case "dataset6": data = pie2004; break;
        // case "dataset7": data = pie2005; break;
        // case "dataset8": data = pie2006; break;
        // case "dataset9": data = pie2007; break;
        // case "dataset10": data = pie2008; break;
        // case "dataset11": data = pie2009; break;
        // case "dataset12": data = pie2010; break;
        // case "dataset13": data = pie2011; break;
        // case "dataset14": data = pie2012; break;
        // case "dataset15": data = pie2013; break;
        // case "dataset16": data = pie2014; break;
        // case "dataset17": data = pie2015; break;
        // case "dataset18": data = pie2016; break;
      default: data = pie1999; 
      }
      updatePlotly(data);
      } // end getData
    initPie();
  }); // end url.then
} // end buildPie
buildPie();

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