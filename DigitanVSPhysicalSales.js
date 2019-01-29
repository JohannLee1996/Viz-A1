var svg = d3.select("body")
    .append("svg")
    .attr("width","480")
    .attr("height","260")
    .style("display","block");
margin = {top: 60, right: 60, bottom: 60, left: 60};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;
g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var dataSet = [
    {"year": 2009, "value": 80},
    {"year": 2010, "value": 72},
    {"year": 2011, "value": 69},
];

var rectPadding = height/(2*dataSet.length);

var x = d3.scaleLinear()
    .domain([0,100])
    .range([0,width]);

var y = d3.scaleTime()
    .domain([d3.min(d3.extent(dataSet, function (d) { return new Date(parseInt(d.year),0); }))
        ,d3.max(d3.extent(dataSet, function (d) { return new Date(parseInt(d.year),0); }))])
    .range([rectPadding, height-rectPadding]);

var yAxis = d3.axisLeft(y)
    .tickSize(0)
    .ticks(dataSet.length)
    .tickFormat(d3.timeFormat("%Y"));

g.append("g")
    .call(customYAxis)
    .selectAll("text")
    .attr("x", -5)
    .style("text-anchor", "end");

g.selectAll("rect")
    .data(dataSet)
    .attr("class",'blackRect')
    .enter()
    .append('rect')
    .attr("x",0)
    .attr("y",function(d,i){
        //console.log(i);
        return (i+0.5)*rectPadding+(i)*((height-dataSet.length*rectPadding)/dataSet.length);
    })
    .attr("width",width)
    .attr("height",function(d,i){
        //console.log(i);
        return (height-dataSet.length*rectPadding)/dataSet.length;
    })
    .attr("fill","black");

g.selectAll(".blackRect")
    .data(dataSet)
    .attr("class",'redRect')
    .enter()
    .append('rect')
    .attr("x",0)
    .attr("y",function(d,i){
        //console.log(i);
        return (i+0.5)*rectPadding+(i)*((height-dataSet.length*rectPadding)/dataSet.length);
    })
    .attr("width",function(d){return width*(d.value)/100;})
    .attr("height",function(d,i){
        //console.log(i);
        return (height-dataSet.length*rectPadding)/dataSet.length;
    })
    .attr("fill","red");

g.selectAll(".redRect")
    .data(dataSet)
    .enter()
    .append('text')
    .attr('x',5)
    .attr('y',function(d,i){
        //console.log(i);
        return 0.8*rectPadding+(i+0.5)*rectPadding+(i)*((height-dataSet.length*rectPadding)/dataSet.length);
    })
    .text(function(d){
        return d.value;
    })
    .attr('fill','white')
    .style("text-anchor", "start");

g.selectAll(".blackRect")
    .data(dataSet)
    .enter()
    .append('text')
    .attr('x',350)
    .attr('y',function(d,i){
        return 0.8*rectPadding+(i+0.5)*rectPadding+(i)*((height-dataSet.length*rectPadding)/dataSet.length);
    })
    .text(function(d){
        return 100-d.value;
    })
    .attr('fill','white')
    .style("text-anchor", "end");

function customYAxis(g) {
    g.call(yAxis);
    g.select(".domain").remove();
}

svg.append('text')
    .attr('x',30)
    .attr('y',30)
    .text('DIGITAL VS. PHYSICAL SALES')
    .attr('font-size',18);

svg.append('text')
    .attr('x',30)
    .attr('y',49)
    .text('in %')
    .attr('font-size',16);

svg.append('text')
    .attr('x',200)
    .attr('y',60)
    .text('Physical format')
    .attr('font-size',13);

svg.append('text')
    .attr('x',340)
    .attr('y',60)
    .text('Digital format*')
    .attr('font-size',13);

svg.append('rect')
    .attr('x',290)
    .attr('y',50)
    .attr('width',15)
    .attr('height',15)
    .attr('fill','red');

svg.append('rect')
    .attr('x',315)
    .attr('y',50)
    .attr('width',15)
    .attr('height',15)
    .attr('fill','black');

svg.append('text')
    .attr('x',30)
    .attr('y',220)
    .text('* includes subscriptions, digital full games, add-on content, mobile apps and social net')
    .attr('font-size',11);

svg.append('text')
    .attr('x',30)
    .attr('y',230)
    .text('work gaming')
    .attr('font-size',11);