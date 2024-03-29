//svg
var svg = d3.select("body")
    .append("svg")
    .attr("width", "480")
    .attr("height", "340")
    .style('display', 'block');
margin = {top: 130, right: 45, bottom: 40, left: 45};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;

svg.append("svg:image")
    .attr('id', 'doll')
    .attr("x", "328")
    .attr("y", "83")
    .attr("width", "50")
    .attr("height", "50")
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

var rectPadding = width / (2 * dataSet.length);

var formatNumber = d3.format(",d");

var yMax = Math.round(d3.max(dataSet, function (d) {
    return d.value
})) + 25;

var x = d3.scaleTime()
    .domain([d3.min(d3.extent(dataSet, function (d) {
        return new Date(parseInt(d.year), 0);
    }))
        , d3.max(d3.extent(dataSet, function (d) {
            return new Date(parseInt(d.year), 0);
        }))])
    .range([rectPadding, width - rectPadding]);

var y = d3.scaleLinear()
    .domain([0, yMax])
    .range([height, 0]);

var xAxis = d3.axisBottom(x)
    .tickSize(0)
    .tickFormat(d3.timeFormat("%Y"));

var yAxis = d3.axisRight(y)
    .tickSize(width)
    .ticks(yMax / 50 + 1)
    .tickFormat(function (d) {
        var s = formatNumber(d);
        return s;
    });

g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text")
    .attr('class', 'bree')
    .attr("y", 8)
    .style("text-anchor", "center")
    .style("font-size", "12px");

g.append("g")
    .call(customYAxis)
    .selectAll("text")
    .attr("y", 0)
    .attr("x", -6)
    .attr('class', 'bree')
    .style("text-anchor", "end")
    .style("font-size", "12px");

g.selectAll("rect")
    .data(dataSet)
    .enter()
    .append('rect')
    .attr("x", function (d, i) {
        return (i + 0.5) * rectPadding + (width / dataSet.length - rectPadding) * i;
    })
    .attr("y", function (d) {
        return height - height * (d.value / yMax);
    })
    .attr("width", width / dataSet.length - rectPadding)
    .attr("height", function (d) {
        return height * (d.value / yMax);
    })
    .attr("fill", "red")
    .on('mouseover', function () {
        d3.select(this).attr('fill', '#ff8484');
        var xPos = +d3.select(this).attr("x");
        var yPos = +d3.select(this).attr('y');
        var wid = +d3.select(this).attr("width");

        d3.select('#doll')
            .transition()
            .duration(500)
            .attr('x', xPos + 30)
            .attr('y', yPos + 80)

        d3.select(this).attr("x", xPos - 4).attr("width", wid + 8);
    })
    .on('mouseout', function () {
        d3.select(this).attr('fill', 'red');
        var xPos = +d3.select(this).attr("x");
        var yPos = +d3.select(this).attr('y');
        var wid = +d3.select(this).attr("width");
        d3.select(this).attr("x", xPos + 4).attr("width", wid - 8);
    });


function customYAxis(g) {
    g.call(yAxis);
    g.select(".domain").remove();
}

svg.append("text")
    .attr("x", "30")
    .attr("y", "338")
    .attr('class', 'bree')
    .attr('font-size', '10.5px')
    .text("*mobile phone users who play games on mobile phones at least once per month")

svg.append("text")
    .attr("x", "30")
    .attr("y", "90")
    .style('font-size', '20px')
    .text("U.S. MOBILE GAMERS*")

svg.append("text")
    .attr("x", "30")
    .attr("y", "105")
    .attr('class', 'bree')
    .style('font-size', '12px')
    .text("in millions")

svg.append('text')
    .attr("x", 30)
    .attr('y', 20)
    .text('BUT ')
    .style('font-size', 20)

svg.append('text')
    .attr("x", 58)
    .attr('y', 20)
    .attr('fill', 'red')
    .text('SMARTPHONE GAMING')
    .style('font-size', 20)

svg.append('text')
    .attr("x", 195)
    .attr('y', 20)
    .text(' IS EXPECTED TO GET BIGGER IN THE ')
    .style('font-size', 20)

svg.append('text')
    .attr("x", 30)
    .attr('y', 40)
    .text('NEXT FEW YEARS.')
    .style('font-size', 20)

