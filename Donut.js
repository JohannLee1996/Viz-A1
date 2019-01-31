var svg = d3.select("body")
    .append("svg")
    .attr("width","480")
    .attr("height","260")
    .style("display","block");
margin = {top: 60, right: 60, bottom: 60, left: 60};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;

var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");


var dataSet = [
    {"name": "CONSOLE", "value": 70, "image_name": "image5.jpg"},
    {"name": "PC", "value": 65, "image_name": "image6.jpg"},
    {"name": "SMARTPHONES", "value": 28, "image_name": "image7.jpg"},
    {"name": "DEDICATED HANDHELD SYSTEM", "value": 35, "image_name": "image8.jpg"},
    {"name": "WIRELESS DEVICE", "value": 26, "image_name": "image9.jpg"},
];

var padding = width/(5*dataSet.length);

g.selectAll("image")
    .data(dataSet)
    .enter()
    .append("svg:image")
    .attr("x", function(d,i){
        return i*padding+i*width/dataSet.length;
    })
    .attr("y", height/2)
    .attr("width", width/(1.5*dataSet.length))
    .attr("height", width/(1.5*dataSet.length))
    .attr("xlink:href",function(d){
        return "img/"+d.image_name;
    })

var arcGenerator = d3.arc()
    .innerRadius(1.2*width/(3*dataSet.length))
    .outerRadius(1.2*width/(3*dataSet.length)+10);

var j;
var arcData = new Array(dataSet.length);

for(j=0;j<dataSet.length;j++){
    arcData[j]=[{label: dataSet[j].name, startAngle: -Math.PI, endAngle: (dataSet[j].value/100)*(2*Math.PI)-Math.PI}];
}

console.log(arcData[0]);


// Create a path element and set its d attribute
var k;
for(k=0;k<dataSet.length;k++){
    g.append('path')
        .data(arcData[k])
        .attr("transform", "translate("+ ((k*padding+k*width/dataSet.length)+(width/(3*dataSet.length))) +","+ ((height/2)+(width/(3*dataSet.length))) +")")
        .attr('d', arcGenerator)
        .attr('fill','red');
}
   

