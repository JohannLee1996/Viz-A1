var svg = d3.select("body")
    .append("svg")
    .attr("width","480")
    .attr("height","260")
    .style("display","block");
margin = {top: 60, right: 50, bottom: 60, left: 50};
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

g.selectAll(".text1")
    .data(dataSet)
    .enter()
    .append('g')
    .attr("transform", function(d,i){
        return "translate("+ ((i*padding+i*width/dataSet.length)+(width/(3*dataSet.length))) +","+ ((height/2)+(width/(dataSet.length))) +")";
})
    .attr('width',width/(dataSet.length))
    .append('text')
    .attr("class","text1")
    .text(function(d){ return d.name;})
    .style('font-size','8px')
    .style('font-weight','bold')
    .attr("text-anchor","middle");

g.selectAll(".text2")
    .data(dataSet)
    .enter()
    .append('text')
    .attr("class","text2")
    .attr("x",function (d,i) {
        return 2+((i*padding+i*width/dataSet.length)+(width/(3*dataSet.length)));
    })
    .attr("y",((height/2)+(width/(dataSet.length)))-10)
    .text(function(d){ return d.value;})
    .style('font-size','10px')
    .style('font-weight','bold')
    .attr("text-anchor","start");

svg.append('text')
    .attr('x',30)
    .attr('y',70)
    .text('U.S HOUSEHOLDS THAT OWN AT LEAST ONE OF THE FOLLOWING')
    .style('font-weight','bold')
    .style('font-size',13);

svg.append('text')
    .attr('x',30)
    .attr('y',85)
    .text('DEVICES PLAY GAMES ON THEIR...')
    .style('font-weight','bold')
    .style('font-size',13);

svg.append('text')
    .attr('x',30)
    .attr('y',100)
    .text('in %')
    .style('font-weight','bold')
    .style('font-size',10);

svg.append('text')
    .attr("x",30)
    .attr('y',20)
    .text('FOR NOW, ')
    .style('font-size',13)
    .style('font-weight','bold');

svg.append('text')
    .attr("x",100)
    .attr('y',20)
    .attr('fill','red')
    .text('CONSOLE REMAINS THE MOST POPULAR ')
    .style('font-size',13)
    .style('font-weight','bold');

svg.append('text')
    .attr("x",370)
    .attr('y',20)
    .text('GAMING')
    .style('font-size',13)
    .style('font-weight','bold');

svg.append('text')
    .attr("x",30)
    .attr('y',40)
    .text('DEVICES IN THE U. S.')
    .style('font-size',13)
    .style('font-weight','bold');



