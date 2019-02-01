var svg = d3.select("body")
    .append("svg")
    .attr("width","480")
    .attr("height","100")
    .style("display","block");
margin = {top: 30, right: 30, bottom: 30, left: 30};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;
var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

g.append('text')
.attr("x",0)
.attr('y',0)
.attr('fill','red')
.text('PHYSICAL SALES')
.style('font-weight','bold');

g.append('text')
.attr("x",110)
.attr('y',0)
.text(' STILL MAKE UP ')
.style('font-weight','bold');

g.append('text')
    .attr("x",210)
    .attr('y',0)
    .attr('fill','red')
    .text('THE LION"S SHARE ')
    .style('font-weight','bold');

g.append('text')
    .attr("x",330)
    .attr('y',0)
    .text('OF GAMING ')
    .style('font-weight','bold');

g.append('text')
    .attr("x",0)
    .attr('y',20)
    .text('SOFTWARE REVENUE, BUT ')
    .style('font-weight','bold');

g.append('text')
    .attr("x",165)
    .attr('y',20)
    .attr('fill','red')
    .text('DIGITAL DELIVARY ')
    .style('font-weight','bold');

g.append('text')
    .attr("x",285)
    .attr('y',20)
    .text('IS BECOMING ')
    .style('font-weight','bold');

g.append('text')
    .attr("x",0)
    .attr('y',40)
    .attr('fill','red')
    .text('INCREASINGLY IMPORTANT.')
    .style('font-weight','bold');

g.selectAll('text')
.style('font-size',12);