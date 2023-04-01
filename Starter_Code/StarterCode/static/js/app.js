// Create variables that call the main 
// dictionary keys from samples.json

let item
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

d3.json(url).then(function(data) {
    console.log("inside")
    console.log(data);
    item = data
    console.log("inside")
  });

// 'names' : [list of ID numbers as strings]

// 'metadata' : [list of dictionaries,
//               'id', 'ethnicity',
//               'gender', 'age',
//               'location', 'bbtype',
//               'wfreq']


// 'samples' : [list of dictionaries,
//            'id', 'otu_ids', 'otu_labels']
console.log('outside');
console.log(item);

