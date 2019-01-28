var svg = d3.select("body")
        .append("svg")
        .attr("width","480")
        .attr("height","250")
        .style('display', 'block');
    margin = {top: 50, right: 45, bottom: 20, left: 45};
    width = +svg.attr("width") - margin.left - margin.right;
    height = +svg.attr("height") - margin.top - margin.bottom;
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var dataset = [6,7,7,7.5,7,7.5,9.5,11.5,10.5,10.2,9.2];
var years = [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011];

var formatNumber = d3.format(",d");

var x = d3.scaleBand()
    .domain(years)
    .range([0, width]);

var y = d3.scaleLinear()
    .domain([0, 12])
    .range([height, 0]);

var xAxis = d3.axisBottom(x)
    .tickSize(0);

var yAxis = d3.axisRight(y)
    .tickSize(width)
    .tickValues([0,2,4,6,8,10,12])
    .tickFormat(function(d) {
        var s = formatNumber(d);
        return s;
    }).tickPadding(20);

g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(customXAxis)
    .selectAll("text")
    .attr("y", 6)
    .style("text-anchor", "center")
    .style("font-size","10px");

g.append("g")
    .call(customYAxis)
    .selectAll("text")
    .attr("y", 6)
    .attr("x", -6)
    .style("text-anchor", "end")
    .style("font-size","10px");

var rectPadding = 19;

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

