var svg = d3.select("body")
    .append("svg")
    .attr("width", "480")
    .attr("height", "100")
    .style("display", "block");
margin = {top: 40, right: 30, bottom: 30, left: 30};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;
var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

g.append('text')
    .attr("x", 0)
    .attr('y', 0)
    .attr('fill', 'red')
    .text('PHYSICAL SALES')

g.append('text')
    .attr("x", 102)
    .attr('y', 0)
    .text(' STILL MAKE UP ')

g.append('text')
    .attr("x", 195)
    .attr('y', 0)
    .attr('fill', 'red')
    .text('THE LION"S SHARE ')

g.append('text')
    .attr("x", 310)
    .attr('y', 0)
    .text('OF GAMING ')

g.append('text')
    .attr("x", 0)
    .attr('y', 20)
    .text('SOFTWARE REVENUE, BUT ')

g.append('text')
    .attr("x", 155)
    .attr('y', 20)
    .attr('fill', 'red')
    .text('DIGITAL DELIVARY ')

g.append('text')
    .attr("x", 265)
    .attr('y', 20)
    .text('IS BECOMING ')

g.append('text')
    .attr("x", 0)
    .attr('y', 40)
    .attr('fill', 'red')
    .text('INCREASINGLY IMPORTANT.')

g.selectAll('text')
    .style('font-size', 20);