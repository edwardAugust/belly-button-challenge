// fuctions
function myFunction(ls) {
  for (const x of [1,2,3,4,5]) {
    // code block to be executed
  }
  return ;
}

// bar chart set up
var barData = [{
  type: 'bar',
  x : [194, 178, 162, 92, 84, 40, 37, 28, 27, 24],
  y: [1167, 2859, 482, 2264, 41, 1189, 352, 189, 2318, 1977].toString(),
  orientation: 'h'
}];

Plotly.newPlot('bar', barData);
// bubble chart set up
var trace1 = {
  x : [194, 178, 162, 92, 84, 40, 37, 28, 27, 24],
  y: [1167, 2859, 482, 2264, 41, 1189, 352, 189, 2318, 1977],
  mode: 'markers',
  marker: {
    size: [194, 178, 162, 92, 84, 40, 37, 28, 27, 24]
  }
};

var bubbleData = [trace1];

var layout = {
  title: 'Marker Size',
  showlegend: false,
  height: 600,
  width: 600
};

Plotly.newPlot('bubble', bubbleData, layout);


// assign variable lists


let samplesList = []
let sample_values = [] // 
let otu_ids = [] // convert to string each elements
let otu_labels =[]

// Create variables that call the main 
// dictionary keys from samples.json

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// const map1 = array1.map(x => "OTU " + x.toString());
let samples

// for loop
    // map within
d3.json(url).then(function(data) {
    console.log("inside");
    samples = data.samples;
    console.log(samples);
    
    //let sample_values = samples.sample_values
    //let otu_ids = [] // convert to string each elements
    //let otu_labels =[]




    //console.log(samples.sample_values);





    for (let i = 0; i < samples.length; i++) {
      row = samples[i];
      // console.log("howdy")
      samplesList.push(row);
      // console.log(data.samples);
    }

  });

// 'names' : [list of ID numbers as strings]

// 'metadata' : [list of dictionaries,
//               'id', 'ethnicity',
//               'gender', 'age',
//               'location', 'bbtype',
//               'wfreq']


// 'samples' : [list of dictionaries,
//            'id', 'otu_ids', 'otu_labels']
