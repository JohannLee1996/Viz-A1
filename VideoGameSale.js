var svg = d3.select("body")
    .append("svg")
    .attr("width","480")
    .attr("height","250")
    .style('display', 'block');
margin = {top: 50, right: 45, bottom: 20, left: 45};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;
var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var dataSet = [
    {"year": 2001, "value": 6.0},
    {"year": 2002, "value": 6.4},
    {"year": 2003, "value": 6.5},
    {"year": 2004, "value": 6.6},
    {"year": 2005, "value": 6.3},
    {"year": 2006, "value": 9.2},
    {"year": 2007, "value": 9.5},
    {"year": 2008, "value": 11.7},
    {"year": 2009, "value": 10.6},
    {"year": 2010, "value": 10.1},
    {"year": 2011, "value": 8.9},
    ];

var rectPadding = width/(2*dataSet.length);

var formatNumber = d3.format(",d");

var yMax = Math.round(d3.max(dataSet, function(d){return d.value}))

var x = d3.scaleTime()
    .domain([d3.min(d3.extent(dataSet, function (d) { return new Date(parseInt(d.year),0); }))
        ,d3.max(d3.extent(dataSet, function (d) { return new Date(parseInt(d.year),0); }))])
    .range([rectPadding, width-rectPadding]);

var y = d3.scaleLinear()
    .domain([0, yMax])
    .range([height, 0]);

var xAxis = d3.axisBottom(x)
    .tickSize(0)
    .tickFormat(d3.timeFormat("%Y"));

var yAxis = d3.axisRight(y)
    .tickSize(width)
    .ticks(yMax/2)
    .tickFormat(function(d) {
        var s = formatNumber(d);
        return s;
    });

g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text")
    .attr("y", 6)
    .style("text-anchor", "center")
    .style("font-size","10px");

g.append("g")
    .call(customYAxis)
    .selectAll("text")
    .attr("y", 0)
    .attr("x", -6)
    .style("text-anchor", "end")
    .style("font-size","10px");


g.selectAll("rect")
    .data(dataSet)
    .enter()
    .append('rect')
    .attr("x",function(d,i){
        return (i+0.5)*rectPadding+(width/dataSet.length-rectPadding)*i;
    })
    .attr("y",function(d){
        return height-height*(d.value/yMax);
    })
    .attr("width", width/dataSet.length-rectPadding)
    .attr("height",function(d){
        return height*(d.value/yMax);
    })
    .attr("fill","red");

function customYAxis(g) {
    g.call(yAxis);
    g.select(".domain").remove();
}

svg.append("svg:image")
    .attr("x","390")
    .attr("y","20")
    .attr("width","60")
    .attr("height","60")
    .attr("xlink:href", "img/image4.jpg")

svg.append("text")
    .attr("x",30)
    .attr("y",30)
    .text("U.S. COMPUTER AND VIDEO GAME SALES(PHYSICAL RETAIL)")
    .style("font-size","15px");

svg.append("text")
    .attr("x",30)
    .attr("y",40)
    .text("in billion U.S. dollars")
    .style("font-size","12px");

