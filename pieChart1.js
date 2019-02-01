var svg = d3.select("body")
    .append("svg")
    .attr("width","480")
    .attr("height","450")
    .style('display', 'block');
margin = {top: 155, right: 45, bottom: 90, left: 45};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;

var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var dataSet = [
    [
        {'label': 'PUZZLE, BOARD GAME, GAME SHOW, TRIVIA, CARD GAMES', 'value': 42, 'color': 'red'},
        {'label': 'ACTION, SPORTS, STRATEGY, ROLE-PLAYING', 'value': 25, 'color': 'black'},
        {'label': 'OTHER', 'value': 33, 'color': '#e0e0e0'},
    ],
    [
        {'label': 'PAZZLE, BOARD GAME, GAME SHOW, TRIVIA, CARD GAMES', 'value': 47, 'color': 'red'},
        {'label': 'ACTION, SPORTS, STRATEGY, ROLE-PLAYING', 'value': 12, 'color': 'black'},
        {'label': 'OTHER', 'value': 41, 'color': '#e0e0e0'},
    ]
];

var padding = width/(5*dataSet.length);

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
    .attr("transform", "translate("+ ((j*padding+j*width/dataSet.length)+(width/(3*dataSet.length))) +","+ height/3 +")")
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
                .attr('x', centroid[0]+((j*padding+j*width/dataSet.length)+(width/(3*dataSet.length))))
                .attr('y', centroid[1]+height/3)
                .attr('text-anchor','middle')
                .attr('dy', '0.33em');
        })
        .text(function (d) {
            return d.data.value;
        })
        .attr('fill', 'white')
        .style('font-size','20')
}

var textPadding = 25;

svg.selectAll('rect')
    .data(dataSet[0])
    .enter()
    .append('rect')
    .attr('x',margin.left+width/7)
    .attr('y',function (d,i) {
        return height+120+i*textPadding;
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
    .attr('x',margin.left+width/7+20)
    .attr('y',function (d,i) {
        return height+123+i*textPadding;
    })
    .text(function (d) {
        return d.label;
    })
    .style('font-size',10)
    .style('alignment-baseline','hanging')
    .style('font-weight','bold')

svg.append('text')
    .attr("x",30)
    .attr('y',55)
    .attr('fill','red')
    .text('CASUAL GAMERS ')
    .style('font-size',12)
    .style('font-weight','bold');

svg.append('text')
    .attr("x",140)
    .attr('y',55)
    .text('ARE SHIFTING TO LOW-COST ONLINE AND SMART-')
    .style('font-size',12)
    .style('font-weight','bold');

svg.append('text')
    .attr("x",30)
    .attr('y',70)
    .text('PHONE GAMES.')
    .style('font-size',12)
    .style('font-weight','bold');
//
svg.append('text')
    .attr("x",30)
    .attr('y',105)
    .text('TYPES OF ')
    .style('font-size',12)
    .style('font-weight','bold');

svg.append('text')
    .attr("x",95)
    .attr('y',105)
    .attr('fill','red')
    .text('ONLINE ')
    .style('font-size',12)
    .style('font-weight','bold');

svg.append('text')
    .attr("x",150)
    .attr('y',105)
    .text('GAMES')
    .style('font-size',12)
    .style('font-weight','bold');

svg.append('text')
    .attr("x",30)
    .attr('y',120)
    .text('PLAYED MOST OFTEN')
    .style('font-size',12)
    .style('font-weight','bold');

svg.append('text')
    .attr("x",30)
    .attr('y',135)
    .text('in %')
    .style('font-size',10)
    .style('font-weight','bold');

//
svg.append('text')
    .attr("x",325)
    .attr('y',105)
    .text('TYPES OF ')
    .style('font-size',12)
    .style('text-anchor','end')
    .style('font-weight','bold');

svg.append('text')
    .attr("x",380)
    .attr('y',105)
    .attr('fill','red')
    .text('MOBILE ')
    .style('font-size',12)
    .style('text-anchor','end')
    .style('font-weight','bold');

svg.append('text')
    .attr("x",430)
    .attr('y',105)
    .text('GAMES')
    .style('font-size',12)
    .style('text-anchor','end')
    .style('font-weight','bold');

svg.append('text')
    .attr("x",430)
    .attr('y',120)
    .text('PLAYED MOST OFTEN')
    .style('font-size',12)
    .style('text-anchor','end')
    .style('font-weight','bold');

svg.append('text')
    .attr("x",430)
    .attr('y',135)
    .text('in %')
    .style('font-size',10)
    .style('text-anchor','end')
    .style('font-weight','bold');