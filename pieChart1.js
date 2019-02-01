var svg = d3.select("body")
    .append("svg")
    .attr("width","480")
    .attr("height","340")
    .style('display', 'block');
margin = {top: 45, right: 45, bottom: 90, left: 45};
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
        return height+10+i*textPadding;
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
        return height+13+i*textPadding;
    })
    .text(function (d) {
        return d.label;
    })
    .style('font-size',10)
    .style('alignment-baseline','hanging')
    .style('font-weight','bold')

