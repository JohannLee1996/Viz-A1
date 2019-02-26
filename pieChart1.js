//svg
var svg = d3.select("body")
    .append("svg")
    .attr("width", "480")
    .attr("height", "400")
    .style('display', 'block');
margin = {top: 155, right: 45, bottom: 90, left: 45};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;

var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//dataset define here
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

var padding = width / (15 * dataSet.length);
//arc define here
var segments = d3.arc()
    .innerRadius(0)
    .outerRadius(70)

var segments2 = d3.arc()
    .innerRadius(0)
    .outerRadius(80)
//arc data containers
var j;
var pieGenerator = new Array(dataSet.length);

//put data into data containers
for (j = 0; j < dataSet.length; j++) {
    pieGenerator[j] = d3.pie().sort(null).value(function (d) {
        return d.value;
    })(dataSet[j]);
}
//disable is used to prevent data contamination when mouse moves in and out
var disable = false;

for (j = 0; j < dataSet.length; j++) {
    g.append('g')
        .selectAll('path')
        .data(pieGenerator[j])
        .enter()
        .append('path')
        .attr("transform", "translate(" + ((j * padding + j * width / dataSet.length) + (width / (3 * dataSet.length))) + "," + (40 + (height / 3)) + ")")
        .attr('d', segments)
        .attr('fill', function (d, i) {
            return dataSet[j][i].color;
        })
        .attr('stroke', 'white')
        .attr('stroke-width', 1)
        .on('mouseover', function () {
            if (!disable) {
                disable = true;
                setTimeout(function () {
                    disable = false;
                }, 801);
                d3.select(this)
                    .transition()
                    .duration(800)
                    .attr('d', segments2);

                d3.select(this)
                    .transition()
                    .delay(1200)
                    .duration(800)
                    .attr('d', segments);
            }

        })
}
//append text
for (j = 0; j < dataSet.length; j++) {
    g.selectAll('text' + j)
        .data(pieGenerator[j])
        .enter()
        .append('text')
        .attr('class', 'text' + j)
        .attr('class','bree')
        .each(function (d) {
            var centroid = segments.centroid(d);
            d3.select(this)
                .attr('x', centroid[0] + ((j * padding + j * width / dataSet.length) + (width / (3 * dataSet.length))))
                .attr('y', 40 + centroid[1] + height / 3)
                .attr('text-anchor', 'middle')
                .attr('dy', '0.33em');
        })
        .text(function (d) {
            return d.data.value;
        })
        .attr('fill', 'white')
        .style('font-size', '20')
}

var textPadding = 15;
//legends
svg.selectAll('rect')
    .data(dataSet[0])
    .enter()
    .append('rect')
    .attr('x', margin.left + width / 7)
    .attr('y', function (d, i) {
        return height + 180 + i * textPadding;
    })
    .attr('width', 10)
    .attr('height', 10)
    .attr('fill', function (d) {
        return d.color;
    })

//append labels
svg.selectAll('.labels')
    .data(dataSet[0])
    .enter()
    .append('text')
    .attr('x', margin.left + width / 7 + 20)
    .attr('y', function (d, i) {
        return height + 180 + i * textPadding;
    })
    .text(function (d) {
        return d.label;
    })
    .style('font-size', 12)
    .style('alignment-baseline', 'hanging')

svg.append('text')
    .attr("x", 30)
    .attr('y', 55)
    .attr('fill', 'red')
    .text('CASUAL GAMERS ')
    .style('font-size', 20)

svg.append('text')
    .attr("x", 132)
    .attr('y', 55)
    .text('ARE SHIFTING TO LOW-COST ONLINE AND SMART-')
    .style('font-size', 20)

svg.append('text')
    .attr("x", 30)
    .attr('y', 75)
    .text('PHONE GAMES.')
    .style('font-size', 20)
//
svg.append('text')
    .attr("x", 30)
    .attr('y', 125)
    .text('TYPES OF ')
    .style('font-size', 20)

svg.append('text')
    .attr("x", 88)
    .attr('y', 125)
    .attr('fill', 'red')
    .text('ONLINE ')
    .style('font-size', 20)

svg.append('text')
    .attr("x", 135)
    .attr('y', 125)
    .text('GAMES')
    .style('font-size', 20)

svg.append('text')
    .attr("x", 30)
    .attr('y', 145)
    .text('PLAYED MOST OFTEN')
    .style('font-size', 20)

svg.append('text')
    .attr("x", 30)
    .attr('y', 160)
    .attr('class', 'bree')
    .text('in %')
    .style('font-size', 12)

//
svg.append('text')
    .attr("x", 338)
    .attr('y', 125)
    .text('TYPES OF ')
    .style('font-size', 20)
    .style('text-anchor', 'end')

svg.append('text')
    .attr("x", 385)
    .attr('y', 125)
    .attr('fill', 'red')
    .text('MOBILE ')
    .style('font-size', 20)
    .style('text-anchor', 'end')

svg.append('text')
    .attr("x", 430)
    .attr('y', 125)
    .text('GAMES')
    .style('font-size', 20)
    .style('text-anchor', 'end')

svg.append('text')
    .attr("x", 430)
    .attr('y', 145)
    .text('PLAYED MOST OFTEN')
    .style('font-size', 20)
    .style('text-anchor', 'end')

svg.append('text')
    .attr("x", 430)
    .attr('y', 160)
    .attr('class', 'bree')
    .text('in %')
    .style('font-size', 12)
    .style('text-anchor', 'end')
