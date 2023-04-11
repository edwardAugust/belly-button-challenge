// dropdown menu
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"
let dropDown = d3.select("#selDataset")  
// lets get the graphs loaded

function optionChanged(name){
  console.log(name);
  setup(name);
}

d3.json(url).then((data) => {
  
  let  names = data.names; // as seen below this is a list object containing patient 'names'
  // console.log(names) \
  // there might be a simpler way; \
  // however, I'm going to use a loop to append them into the html dropdown element
  for (let n of names){
    dropDown.append('option').text(n).property('value', n);
 }
 setup(940);
})
function barGraph(sampleValues, otuIds){
  let barData = [{
    type: 'bar',
    x : sampleValues,
    y: otuIds.toString(),
    orientation: 'h'
  }];
  Plotly.newPlot('bar', barData);
}
// function bubbleGraph()
function setup(name){
  d3.json(url).then((data) => {
    // need to find a way for the graphs to load before choosing a patient
    let samples = data.samples;
    let filteredData = samples.filter(keyValue => keyValue.id === name)[0];
    let otuIds = filteredData.otu_ids ;//console.log(otuIds)
    let sampleValues = filteredData.sample_values;
    let outLabels = filteredData.otu_labels;


    let trace1 = {
    x : sampleValues,
    y: otuIds,
    mode: 'markers',
    marker: {
      size: sampleValues
    }
  };
  
    let bubbleData = [trace1];
  
    let layout = {
    title: 'Marker Size',
    showlegend: false,
    height: 600,
    width: 600
  };
  
    Plotly.newPlot('bubble', bubbleData, layout);

  }
)}


// bar chart set up

// bubble chart set up



// assign variable lists


let samplesList = []
let sample_values = [] // 
let otu_ids = [] // convert to string each elements
let otu_labels =[]

// Create variables that call the main 
// dictionary keys from samples.json
// const map1 = array1.map(x => "OTU " + x.toString());


// for loop
    // map within
d3.json(url).then((data) => {
  let  samples = data.names;
// d3.json(url).then(function(data) {
    // console.log("inside");
    samples = data.samples.otu_ids;
    //console.log(samples);
    
    //let sample_values = samples.sample_values
    //let otu_ids = [] // convert to string each elements
    //let otu_labels =[]




    //console.log(samples.sample_values);





    //for (let i = 0; i < samples.length; i++) {
      //row = samples[i];
      // console.log("howdy")
      //samplesList.push(row);
      // console.log(data.samples);}

  });

// 'names' : [list of ID numbers as strings]

// 'metadata' : [list of dictionaries,
//               'id', 'ethnicity',
//               'gender', 'age',
//               'location', 'bbtype',
//               'wfreq']


// 'samples' : [list of dictionaries,
//            'id', 'otu_ids', 'otu_labels']
