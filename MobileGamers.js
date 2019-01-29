var svg = d3.select("body")
    .append("svg")
    .attr("width","480")
    .attr("height","270")
    .style('display', 'block');
margin = {top: 45, right: 45, bottom: 30, left: 45};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;

svg.append("svg:image")
    .attr("x","320")
    .attr("y","0")
    .attr("width","50")
    .attr("height","50")
    .attr("xlink:href", "img/image10.jpg")

g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var dataSet = [
    {"year": 2011, "value": 80},
    {"year": 2012, "value": 102},
    {"year": 2013, "value": 123},
    {"year": 2014, "value": 145},
    {"year": 2015, "value": 156},
    {"year": 2016, "value": 175},
];

var rectPadding = width/(2*dataSet.length);

var formatNumber = d3.format(",d");

var yMax = Math.round(d3.max(dataSet, function(d){return d.value}))+25;

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
    .ticks(yMax/50+1)
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
    .attr("width",width/dataSet.length-rectPadding)
    .attr("height",function(d){
        return height*(d.value/yMax);
    })
    .attr("fill","red");


function customYAxis(g) {
    g.call(yAxis);
    g.select(".domain").remove();
}

svg.append("text")
    .attr("x","30")
    .attr("y","270")
    .attr('font-size','11px')
    .text("*mobile phone users who play games on mobile phones at least once per month");

svg.append("text")
    .attr("x","30")
    .attr("y","24")
    .style('font-size','15px')
    .text("U.S. MOBILE GAMERS*");

svg.append("text")
    .attr("x","30")
    .attr("y","36")
    .style('font-size','12px')
    .text("in million");

