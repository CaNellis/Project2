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


// choropleth map
function buildMap() {
  var url = "http://localhost:5000/map";

  // TODO: use own Data
  // Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2011_us_ag_exports.csv', function(err, rows){
  //       function unpack(rows, key) {
  //           return rows.map(function(row) { return row[key]; });
  //       }
    
  var data = [{
                type: 'choropleth',
                locationmode: 'USA-states',
                locations: unpack(rows, 'code'),
                z: unpack(rows, ''),
                text: unpack(rows, 'state'),
                zmin: 0,
                zmax: 17000,
                colorscale: [
                  [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
                  [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
                  [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
                ],
                colorbar: { title: 'Millions USD', thickness: 0.2},
                marker: {line:{color: 'rgb(255,255,255)', width: 2}}
            }];

  console.log(data.locations);
    var layout = {
            title: '2011 US Agriculture Exports by State',
            geo:{
              scope: 'usa',
              showlakes: true,
              lakecolor: 'rgb(255,255,255)'
            }
        };
        Plotly.plot(map, data, layout, {showLink: false});
    };

    /**
Vue.component('v-map', Vue2Leaflet.Map);
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer);
Vue.component('v-marker', Vue2Leaflet.Marker);

new Vue({
  el: '#app',
  data() {
    return {
      zoom: 4,
      center: [37.8, -96],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  }
});
*/

var mapData = [
  {regionName:'Alabama', regionId:1, population:4858979, density:95.9394224357},
  {regionName:'Alaska', regionId:2, population:738432, density:1.2940456423},
  {regionName:'Arizona', regionId:4, population:6828065, density:60.109916458},
  {regionName:'Arkansas', regionId:5, population:2978204, density:57.2349475563},
  {regionName:'California', regionId:6, population:39144818, density:251.2698486568},
  {regionName:'Colorado', regionId:8, population:5456574, density:52.6488982103},
  {regionName:'Connecticut', regionId:9, population:3590886, density:741.5098443342},
  {regionName:'Delaware', regionId:10, population:945934, density:485.4184026573},
  {regionName:'District of Columbia', regionId:11, population:672228, density:10993.9858125461},
  {regionName:'Florida', regionId:12, population:20271272, density:377.9735416283},
  {regionName:'Georgia', regionId:13, population:10214860, density:177.357428148},
  {regionName:'Hawaii', regionId:15, population:1431603, density:222.9051845114},
  {regionName:'Idaho', regionId:16, population:1654930, density:20.025192228},
  {regionName:'Illinois', regionId:17, population:12859995, density:231.6301487116},
  {regionName:'Indiana', regionId:18, population:6619680, density:184.7698287905},
  {regionName:'Iowa', regionId:19, population:3123899, density:55.927295007},
  {regionName:'Kansas', regionId:20, population:2911641, density:35.6128439566},
  {regionName:'Kentucky', regionId:21, population:4425092, density:112.0695717306},
  {regionName:'Louisiana', regionId:22, population:4670724, density:108.103404071},
  {regionName:'Maine', regionId:23, population:1329328, density:43.098330971},
  {regionName:'Maryland', regionId:24, population:6006401, density:618.6124865952},
  {regionName:'Massachusetts', regionId:25, population:6794422, density:870.9280133623},
  {regionName:'Michigan', regionId:26, population:9922576, density:175.4755339251},
  {regionName:'Minnesota', regionId:27, population:5489594, density:68.94028858},
  {regionName:'Mississippi', regionId:28, population:2992333, density:63.7701060181},
  {regionName:'Missouri', regionId:29, population:6083672, density:88.4942713391},
  {regionName:'Montana', regionId:30, population:1032949, density:7.0970172284},
  {regionName:'Nebraska', regionId:31, population:1896190, density:24.6823610253},
  {regionName:'Nevada', regionId:32, population:2890845, density:26.3327759637},
  {regionName:'New Hampshire', regionId:33, population:1330608, density:148.6223422663},
  {regionName:'New Jersey', regionId:34, population:8958013, density:1218.0309674403},
  {regionName:'New Mexico', regionId:35, population:2085109, density:17.1899120517},
  {regionName:'New York', regionId:36, population:19795791, density:420.0665451267},
  {regionName:'North Carolina', regionId:37, population:10042802, density:206.5686993899},
  {regionName:'North Dakota', regionId:38, population:756927, density:10.969783463},
  {regionName:'Ohio', regionId:39, population:11613423, density:284.2127374054},
  {regionName:'Oklahoma', regionId:40, population:3911338, density:57.0198411074},
  {regionName:'Oregon', regionId:41, population:4028977, density:41.9735864874},
  {regionName:'Pennsylvania', regionId:42, population:12802503, density:286.1350349737},
  {regionName:'Rhode Island', regionId:44, population:1056298, density:1021.6746608404},
  {regionName:'South Carolina', regionId:45, population:4896146, density:162.8722921385},
  {regionName:'South Dakota', regionId:46, population:858469, density:11.3238159796},
  {regionName:'Tennessee', regionId:47, population:6600299, density:160.0624165215},
  {regionName:'Texas', regionId:48, population:27469114, density:105.1449291912},
  {regionName:'Utah', regionId:49, population:2995919, density:36.4487578071},
  {regionName:'Vermont', regionId:50, population:626042, density:67.9216660843},
  {regionName:'Virginia', regionId:51, population:8382993, density:212.2723594284},
  {regionName:'Washington', regionId:53, population:7170351, density:107.895725701},
  {regionName:'West Virginia', regionId:54, population:1844128, density:76.7067915829},
  {regionName:'Wisconsin', regionId:55, population:5771337, density:106.5641159303},
  {regionName:'Wyoming', regionId:56, population:586107, density:6.0366645129},
  ];
  
  Vue.use(ChoroplethMap);
  
  var app = new Vue({
    el: "#app",
    data: {
      center: [37.8, -96],
      mapData,
      geoJson: null,
      colorScale: chroma.brewer.OrRd, //["e7d090", "e9ae7b", "de7062"],
      value: {
        key: "population",
        metric: "people"
      },
      extraValues: [{
        key: "density",
        metric: "p/mi²"
      }],
      mapOptions: {
        attributionControl: false
      }
    },
    
    mounted() {
      this.getGeoJson()
    },
    
    methods: {
      getGeoJson() {
         axios.get('https://censusd3.herokuapp.com/data/us-states-geo.json')
          .then(response => {
            // console.log('geoJson', response.data)
            this.geoJson = response.data
            // inject feature id into properties for vue-choropleth to work
            this.geoJson.features = this.geoJson.features.map(function (feature) {
              return {
                type: 'Feature',
                properties: {
                  id: feature.id,
                  stateName: feature.properties['name']
                },
                geometry: feature.geometry
              }
            })
            // console.log('loaded map geo json', this.geoJson.features)
           })
          .catch(err => {
            console.log('geoJson', err.response.data.error)
          })
      }    
    }
  });