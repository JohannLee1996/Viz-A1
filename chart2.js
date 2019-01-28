var svg = d3.select("body")
    .append("svg")
    .attr("width","480")
    .attr("height","260")
    .style("display","block");
margin = {top: 60, right: 60, bottom: 60, left: 60};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;
g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var dataset = [80,72,69];
var years = [2011,2010,2009];

var formatNumber = d3.format(",d");

var x = d3.scaleLinear()
    .domain([0,100])
    .range([0,width]);

var xAxis = d3.axisBottom(x);

var y = d3.scaleBand()
    .domain(years)
    .range([height, 0]);

var yAxis = d3.axisRight(y)
    .tickSize(width)
    .tickValues([2011,2010,2009])
    .tickFormat(function(d) {
        var s = formatNumber(d);
        return s;
    }).tickPadding(20);

g.append("g")
    .call(customXAxis)
    .selectAll('.tick')
    .attr('opacity',0);

g.append("g")
    .call(customYAxis)
    .selectAll("text")
    .attr("y", 0)
    .attr("x", -5)
    .style("text-anchor", "end");

var rectPadding = 18;

g.selectAll("rect")
    .data(dataset)
    .attr("class",'blackRect')
    .enter()
    .append('rect')
    .attr("x",0)
    .attr("y",function(d,i){
        //console.log(i);
        return (i+0.5)*rectPadding+(i)*((height-dataset.length*rectPadding)/dataset.length);
    })
    .attr("width",width)
    .attr("height",function(d,i){
        //console.log(i);
        return (height-dataset.length*rectPadding)/dataset.length;
    })
    .attr("fill","black");

g.selectAll(".blackRect")
    .data(dataset)
    .attr("class",'redRect')
    .enter()
    .append('rect')
    .attr("x",0)
    .attr("y",function(d,i){
        //console.log(i);
        return (i+0.5)*rectPadding+(i)*((height-dataset.length*rectPadding)/dataset.length);
    })
    .attr("width",function(d){return width*(d)/100;})
    .attr("height",function(d,i){
        //console.log(i);
        return (height-dataset.length*rectPadding)/dataset.length;
    })
    .attr("fill","red");

g.selectAll(".redRect")
    .data(dataset)
    .enter()
    .append('text')
    .attr('x',5)
    .attr('y',function(d,i){
        //console.log(i);
        return 18+(i+0.5)*rectPadding+(i)*((height-dataset.length*rectPadding)/dataset.length);
    })
    .text(function(d){
        return d;
    })
    .attr('fill','white')
    .style("text-anchor", "start");

g.selectAll(".blackRect")
    .data(dataset)
    .enter()
    .append('text')
    .attr('x',350)
    .attr('y',function(d,i){
        //console.log(i);
        return 18+(i+0.5)*rectPadding+(i)*((height-dataset.length*rectPadding)/dataset.length);
    })
    .text(function(d){
        return 100-d;
    })
    .attr('fill','white')
    .style("text-anchor", "end");

function customXAxis(g) {
    g.call(xAxis);
    g.select(".domain").remove();
}

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