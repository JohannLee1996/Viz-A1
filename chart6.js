var svg = d3.select("body")
    .append("svg")
    .attr("width","480")
    .attr("height","260")
    .style("display","block");

var pieGenerator = d3.pie();
var data = [4.0,43.8,18.4,33.7];
var arcData = pieGenerator(data);

var color = ['red','black','#e8e8e8','#d3d3d3'];

var arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(80);

svg.append('g')
    .attr('id','pie3')
    .attr("transform", "translate(" + 100 + "," + 100 + ")")
    .selectAll('path')
    .data(arcData)
    .enter()
    .append('path')
    .attr('d', arcGenerator)
    .attr('fill',function(d,i){
        return color[i];
    });

d3.select('#pie3')
    .selectAll('text')
    .data(arcData)
    .enter()
    .append('text')
    .each(function(d) {
        var centroid = arcGenerator.centroid(d);
        d3.select(this)
            .attr('x', centroid[0])
            .attr('y', centroid[1])
            .attr('dy', '0.33em')
            .text(d.data)
            .attr('fill','white');
    });