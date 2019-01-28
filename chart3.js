var svg = d3.select("body")
    .append("svg")
    .attr("width","480")
    .attr("height","260")
    .style("display","block");
margin = {top: 60, right: 60, bottom: 60, left: 60};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;

svg.append("svg:image")
    .attr("x","32")
    .attr("y","180")
    .attr("width","40")
    .attr("height","40")
    .attr("xlink:href", "img/image5.jpg");

svg.append("svg:image")
    .attr("x","122")
    .attr("y","178")
    .attr("width","45")
    .attr("height","45")
    .attr("xlink:href", "img/image6.jpg");

svg.append("svg:image")
    .attr("x","212")
    .attr("y","178")
    .attr("width","45")
    .attr("height","45")
    .attr("xlink:href", "img/image7.jpg");

svg.append("svg:image")
    .attr("x","302")
    .attr("y","178")
    .attr("width","45")
    .attr("height","45")
    .attr("xlink:href", "img/image8.jpg");

svg.append("svg:image")
    .attr("x","382")
    .attr("y","175")
    .attr("width","45")
    .attr("height","45")
    .attr("xlink:href", "img/image9.jpg");


var arcGenerator = d3.arc()
    .innerRadius(25)
    .outerRadius(35);

var arcData1 = [
    {label: 'CONSLOE', startAngle: -Math.PI, endAngle: 0.7*(2*Math.PI)-Math.PI},
];
var arcData2 = [
    {label: 'PC', startAngle: -Math.PI, endAngle: 0.65*(2*Math.PI)-Math.PI},
];
var arcData3 = [
    {label: 'SMARTPHONES', startAngle: -Math.PI, endAngle: 0.38*(2*Math.PI)-Math.PI},
];
var arcData4 = [
    {label: 'DEDICATED HANDHELD SYSTEM', startAngle: -Math.PI, endAngle: 0.35*(2*Math.PI)-Math.PI},
];
var arcData5 = [
    {label: 'WIRELESS DEVICE', startAngle: -Math.PI, endAngle: 0.26*(2*Math.PI)-Math.PI},
];

// Create a path element and set its d attribute
svg.append("g")
    .attr("transform", "translate(" + 50 + "," + 200 + ")")
    .selectAll('path')
    .data(arcData1)
    .enter()
    .append('path')
    .attr('d', arcGenerator)
    .attr('fill','red');

svg.append("g")
    .attr("transform", "translate(" + 140 + "," + 200 + ")")
    .selectAll('path')
    .data(arcData2)
    .enter()
    .append('path')
    .attr('d', arcGenerator)
    .attr('fill','red');

svg.append("g")
    .attr("transform", "translate(" + 230 + "," + 200 + ")")
    .selectAll('path')
    .data(arcData3)
    .enter()
    .append('path')
    .attr('d', arcGenerator)
    .attr('fill','red');

svg.append("g")
    .attr("transform", "translate(" + 320 + "," + 200 + ")")
    .selectAll('path')
    .data(arcData4)
    .enter()
    .append('path')
    .attr('d', arcGenerator)
    .attr('fill','red');

svg.append("g")
    .attr("transform", "translate(" + 410 + "," + 200 + ")")
    .selectAll('path')
    .data(arcData5)
    .enter()
    .append('path')
    .attr('d', arcGenerator)
    .attr('fill','red');


