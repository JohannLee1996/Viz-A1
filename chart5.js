var svg = d3.select("body")
    .append("svg")
    .attr("width","480")
    .attr("height","260")
    .style("display","block");

var pieGenerator = d3.pie();
var data = [42,25,33];
var data2 = [47,12,41];
var arcData = pieGenerator(data);
var arcData2 = pieGenerator(data2);

var color = ['red','black','#e8e8e8'];

var arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(80);

svg.append('g')
    .attr('id','pie1')
    .attr("transform", "translate(" + 100 + "," + 100 + ")")
    .selectAll('path')
    .data(arcData)
    .enter()
    .append('path')
    .attr('d', arcGenerator)
    .attr('fill',function(d,i){
        return color[i];
    });

svg.append('g')
    .attr('id','pie2')
    .attr("transform", "translate(" + 330 + "," + 100 + ")")
    .selectAll('path')
    .data(arcData2)
    .enter()
    .append('path')
    .attr('d', arcGenerator)
    .attr('fill',function(d,i){
        return color[i];
    });

d3.select('#pie1')
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

d3.select('#pie2')
    .selectAll('text')
    .data(arcData2)
    .enter()
    .append('text')
    .each(function(d) {
        var centroid = arcGenerator.centroid(d);
        d3.select(this)
            .attr('x', centroid[0])
            .attr('y', centroid[1])
            .attr('dy', '0.33em');
    })
    .text(function(d){
        console.log(d)
        return d.data;
    })
    .attr('fill','white');