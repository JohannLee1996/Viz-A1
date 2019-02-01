var svg = d3.select("body")
    .append("svg")
    .attr("width","480")
    .attr("height","270")
    .style('display', 'block');
margin = {top: 45, right: 45, bottom: 30, left: 45};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;

svg.append('path')
    .attr('d', star)
    .attr("transform", "translate(" + 240 + "," + 50 + ")")
    .attr("fill",'red');


svg.append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 110)
    .attr("y2", 0)
    .attr("stroke-width", 2)
    .attr("stroke", "black")
    .attr("transform", "translate(" + 250 + "," + 50 + ")");

svg.append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 110)
    .attr("y2", 0)
    .attr("stroke-width", 2)
    .attr("stroke", "black")
    .attr("transform", "translate(" + 120 + "," + 50 + ")");

svg.append("svg:image")
    .attr("x","30")
    .attr("y","80")
    .attr("width","200")
    .attr("xlink:href", "img/image12.jpg");

svg.append("text")
    .attr("x",250)
    .attr("y",95)
    .attr("font-size","12px")
    .text("SOURCES: ENTERTAINMENT SOFTWARE ASSOCIATION.");

svg.append("text")
    .attr("x",240)
    .attr("y",105)
    .attr("font-size","12px")
    .text("NPD GROUP. ROVIO. ACTIVATION BLIZZARD, EMARKETER");