var svg = d3.select("body")
    .append("svg")
    .attr("width","480")
    .attr("height","320")
    .style('display', 'block');
margin = {top: 95, right: 45, bottom: 30, left: 45};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;

var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");



var dataSet = [
    [
        {'label': 'CASUAL GAMES', 'value': 4.0, 'color': 'red'},
        {'label': 'ACTION, SPORTS, STRATEGY, ROLE-PLAYING', 'value': 43.8, 'color': 'black'},
        {'label': 'SHOOTER', 'value': 18.4, 'color': '#a0a0a0'},
        {'label': 'OTHER', 'value': 33.7, 'color': '#e0e0e0'},
    ]
];


var segments = d3.arc()
    .innerRadius(0)
    .outerRadius(80)

var j;
var pieGenerator = new Array(dataSet.length);


for(j=0;j<dataSet.length;j++){
    pieGenerator[j] = d3.pie().sort(null).value(function (d) {
        return d.value;
    })(dataSet[j]);
}

console.log(pieGenerator);


for(j=0;j<dataSet.length;j++){
    g.append('g')
        .selectAll('path')
        .data(pieGenerator[j])
        .enter()
        .append('path')
        .attr("transform", "translate("+ ((width/(5*dataSet.length))) +","+ height/2 +")")
        .attr('d', segments)
        .attr('fill', function (d,i) {
            return dataSet[j][i].color;
        })
        .attr('stroke','white')
        .attr('stroke-width',1)
}

for(j=0;j<dataSet.length;j++){
    g.selectAll('text'+j)
        .data(pieGenerator[j])
        .enter()
        .append('text')
        .attr('class','text'+j)
        .each(function(d) {
            var centroid = segments.centroid(d);
            d3.select(this)
                .attr('x', centroid[0]+((width/(5*dataSet.length))))
                .attr('y', centroid[1]+height/2)
                .attr('text-anchor','middle')
                .attr('dy', '0.33em');
        })
        .text(function (d) {
            return d.data.value;
        })
        .attr('fill', 'white')
        .style('font-size','20')
}

svg.selectAll('rect')
    .data(dataSet[0])
    .enter()
    .append('rect')
    .attr('x',margin.left+width/2)
    .attr('y',function (d,i) {
        return height/2+i*textPadding+50;
    })
    .attr('width',15)
    .attr('height',15)
    .attr('fill', function (d) {
        return d.color;
    })


svg.selectAll('.labels')
    .data(dataSet[0])
    .enter()
    .append('text')
    .attr('x',margin.left+width/2+20)
    .attr('y',function (d,i) {
        return height/2+3+i*textPadding+50;
    })
    .text(function (d) {
        return d.label;
    })
    .style('font-size',10)
    .style('alignment-baseline','hanging')
    .style('font-weight','bold');

svg.append('text')
    .attr('x',30)
    .attr('y',85)
    .text('VIDEO GAME SALES 2011, BY GENRE')
    .style('font-weight','bold')
    .style('font-size',14)

svg.append('text')
    .attr('x',30)
    .attr('y',100)
    .text('in %')
    .style('font-weight','bold')
    .style('font-size',10)


svg.append('text')
    .attr('x',30)
    .attr('y',35)
    .text('BUT VIDEO GAME SALES ARE STILL DRIVEN BY ')
    .style('font-weight','bold')
    .style('font-size',14)

svg.append('text')
    .attr('x',365)
    .attr('y',35)
    .attr('fill','red')
    .text('CORE GAMERS')
    .style('font-weight','bold')
    .style('font-size',14)



