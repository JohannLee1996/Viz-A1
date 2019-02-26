var svg = d3.select("body")
    .append("svg")
    .attr("width", "480")
    .attr("height", "220")
    .style("display", "block");
margin = {top: 60, right: 60, bottom: 60, left: 60};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;
g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var dataSet = [
    {"year": 2009, "value": 80},
    {"year": 2010, "value": 72},
    {"year": 2011, "value": 69},
];

var rectPadding = height / (2 * dataSet.length);

var x = d3.scaleLinear()
    .domain([0, 100])
    .range([0, width]);

var y = d3.scaleTime()
    .domain([d3.min(d3.extent(dataSet, function (d) {
        return new Date(parseInt(d.year), 0);
    }))
        , d3.max(d3.extent(dataSet, function (d) {
            return new Date(parseInt(d.year), 0);
        }))])
    .range([rectPadding, height - rectPadding]);

var yAxis = d3.axisLeft(y)
    .tickSize(0)
    .ticks(dataSet.length)
    .tickFormat(d3.timeFormat("%Y"));

g.append("g")
    .call(customYAxis)
    .selectAll("text")
    .attr('class', 'bree')
    .style('font-size', 12)
    .attr("x", -5)
    .style("text-anchor", "end");

g.selectAll("rect")
    .data(dataSet)
    .attr("class", 'blackRect')
    .enter()
    .append('rect')
    .attr("x", 0)
    .attr("y", function (d, i) {
        return (i + 0.5) * rectPadding + (i) * ((height - dataSet.length * rectPadding) / dataSet.length) - 2;
    })
    .attr("width", width)
    .attr("height", 4 + (height - dataSet.length * rectPadding) / dataSet.length)
    .attr("fill", "black");

g.selectAll(".blackRect")
    .data(dataSet)
    .attr("class", 'redRect')
    .enter()
    .append('rect')
    .attr("x", 0)
    .attr("y", function (d, i) {
        //console.log(i);
        return (i + 0.5) * rectPadding + (i) * ((height - dataSet.length * rectPadding) / dataSet.length) - 2;
    })
    .attr("width", function (d) {
        return width * (d.value) / 100;
    })
    .attr("height", 4 + (height - dataSet.length * rectPadding) / dataSet.length)
    .attr("fill", "red")
    .on('mouseover', function () {
        d3.select(this).attr('fill', '#ff8484');
        var yPos = +d3.select(this).attr('y');
        var rectHeight = +d3.select(this).attr("height");
        d3.select(this).attr("y", yPos - 4).attr("height", rectHeight + 8);
    })
    .on('mouseout', function () {
        d3.select(this).attr('fill', 'red');
        var yPos = +d3.select(this).attr('y');
        var rectHeight = +d3.select(this).attr("height");
        d3.select(this).attr("y", yPos + 4).attr("height", rectHeight - 8);
    });

g.selectAll(".redRect")
    .data(dataSet)
    .enter()
    .append('text')
    .attr('x', 5)
    .attr('y', function (d, i) {
        //console.log(i);
        return (i + 1) * rectPadding + (i) * ((height - dataSet.length * rectPadding) / dataSet.length);
    })
    .text(function (d) {
        return d.value;
    })
    .attr('fill', 'white')
    .style("text-anchor", "start")
    .attr('class', 'bree')
    .style('font-size', 15)
    .style("alignment-baseline", "central");

g.selectAll(".blackRect")
    .data(dataSet)
    .enter()
    .append('text')
    .attr('x', 350)
    .attr('y', function (d, i) {
        return (i + 1) * rectPadding + (i) * ((height - dataSet.length * rectPadding) / dataSet.length);
    })
    .text(function (d) {
        return 100 - d.value;
    })
    .attr('fill', 'white')
    .style("text-anchor", "end")
    .attr('class', 'bree')
    .style('font-size', 15)
    .style("alignment-baseline", "central");

function customYAxis(g) {
    g.call(yAxis);
    g.select(".domain").remove();
}

svg.append('text')
    .attr('x', 30)
    .attr('y', 30)
    .text('DIGITAL VS. PHYSICAL SALES')
    .attr('font-size', 20);

svg.append('text')
    .attr('x', 30)
    .attr('y', 45)
    .attr('class', 'bree')
    .text('in %')
    .attr('font-size', 13);

svg.append('text')
    .attr('x', 213)
    .attr('y', 55)
    .attr('class', 'bree')
    .text('Physical Format')
    .attr('font-size', 12);

svg.append('text')
    .attr('x', 335)
    .attr('y', 55)
    .attr('class', 'bree')
    .text('Digital Format*')
    .attr('font-size', 12);

svg.append('rect')
    .attr('x', 306)
    .attr('y', 45)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', 'red');

svg.append('rect')
    .attr('x', 320)
    .attr('y', 45)
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', 'black');

svg.append('text')
    .attr('x', 30)
    .attr('y', 190)
    .attr('class', 'bree')
    .text('* includes subscriptions, digital full games, add-on content, mobile apps and social net')
    .attr('font-size', 10);

svg.append('text')
    .attr('x', 36)
    .attr('y', 200)
    .attr('class', 'bree')
    .text('work gaming')
    .attr('font-size', 10);