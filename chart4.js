var svg = d3.select("body")
    .append("svg")
    .attr("width","480")
    .attr("height","270")
    .style('display', 'block');
margin = {top: 70, right: 45, bottom: 40, left: 45};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;

svg.append("svg:image")
    .attr("x","320")
    .attr("y","0")
    .attr("width","50")
    .attr("height","50")
    .attr("xlink:href", "img/image10.jpg")

g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var dataset = [80,102,123,145,156,175];
var years = [2011,2012,2013,2014,2015,2016];

var formatNumber = d3.format(",d");

var x = d3.scaleBand()
    .domain(years)
    .range([0, width]);

var y = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([height, 0]);

var xAxis = d3.axisBottom(x)
    .tickSize(0);

var yAxis = d3.axisRight(y)
    .tickSize(width)
    .tickValues([0,50,100,150,200])
    .tickFormat(function(d) {
        var s = formatNumber(d);
        return s;
    }).tickPadding(20);

g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(customXAxis)
    .selectAll("text")
    .attr("y", 6)
    .style("text-anchor", "center");

g.append("g")
    .call(customYAxis)
    .selectAll("text")
    .attr("y", 6)
    .attr("x", -6)
    .style("text-anchor", "end");

var rectPadding = 30;

g.selectAll("rect")
    .data(dataset)
    .enter()
    .append('rect')
    .attr("x",function(d,i){
        //console.log(d);
        return x(years[i])+rectPadding/2;
    })
    .attr("y",function(d){
        return y(d);
    })
    .attr("width",x.bandwidth()-rectPadding)
    .attr("height",function(d){
        return height-y(d);
    })
    .attr("fill","red");
// gs.append("rect")

svg.selectAll("text")
    .style("font-size","10px");

function customXAxis(g) {
    g.call(xAxis);
    g.select(".domain").remove();
}

function customYAxis(g) {
    g.call(yAxis);
    g.select(".domain").remove();
    g.selectAll(".tick:not(:first-of-type) line").attr("stroke", "#777").attr("stroke-array", "2,2");
    g.selectAll(".tick text").attr("x", 4).attr("dy", -4);
}

svg.append("text")
    .attr("x","30")
    .attr("y","260")
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

