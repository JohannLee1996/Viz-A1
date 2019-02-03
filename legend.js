var svg = d3.select("body")
    .append("svg")
    .attr("width","480")
    .attr("height","450")
    .style('display', 'block');
margin = {top: 155, right: 45, bottom: 90, left: 45};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;

var quantize = d3.scaleQuantize()
    .domain([ 0, 0.15 ])
    .range(d3.range(9).map(function(i) { return "q" + i + "-9"; }));


svg.append("g")
    .attr("class", "legendQuant")
    .attr("transform", "translate(20,20)");

var legend = d3.legendColor()
    .labelFormat(d3.format(".2f"))
    .useClass(true)
    .title("A really really really really really long title")
    .titleWidth(100)
    .scale(quantize);

svg.select(".legendQuant")
    .call(legend);