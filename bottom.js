//svg
var svg = d3.select("body")
    .append("svg")
    .attr("width", "480")
    .attr("height", "320")
    .style('display', 'block');
margin = {top: 0, right: 45, bottom: 30, left: 20};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;

var text0 = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
//images here
text0.append('svg:image')
    .attr('x', 315)
    .attr('y', 0)
    .attr('width', 55)
    .attr('xlink:href', 'img/image11.jpg')
//text here
text0.append('text')
    .attr('x', 0)
    .attr('y', 20)
    .text('SMARTPHONE GAMES SUCH AS ')
    .style('font-size', 20)

text0.append('text')
    .attr('x', 185)
    .attr('y', 20)
    .attr('fill', 'red')
    .text('ANGRY BIRDS CAN ')
    .style('font-size', 20)

text0.append('text')
    .attr('x', 0)
    .attr('y', 40)
    .attr('fill', 'red')
    .text('BE EXTREMELY POPULAR')
    .style('font-size', 20)

text0.append('text')
    .attr('x', 145)
    .attr('y', 40)
    .text(', BUT ')
    .style('font-size', 20)

text0.append('text')
    .attr('x', 180)
    .attr('y', 40)
    .attr('fill', 'red')
    .text('THE BIG MONEY ')
    .style('font-size', 20)

text0.append('text')
    .attr('x', 275)
    .attr('y', 40)
    .text('IS ')
    .style('font-size', 20)

text0.append('text')
    .attr('x', 0)
    .attr('y', 60)
    .text('STILL IN ')
    .style('font-size', 20)

text0.append('text')
    .attr('x', 50)
    .attr('y', 60)
    .attr('fill', 'red')
    .text('TRADITIONAL GAMES: ')
    .style('font-size', 20)

text0.append('text')
    .attr('x', 0)
    .attr('y', 90)
    .text('RAVIO: MAKER OF THE ANGRY BIRDS FRANCHISE, POSTED ')
    .style('font-size', 20)

text0.append('text')
    .attr('x', 0)
    .attr('y', 110)
    .attr('fill', 'red')
    .text('$ 106.3 MILLION ')
    .style('font-size', 20)

text0.append('text')
    .attr('x', 100)
    .attr('y', 110)
    .text('REVENUE IN 2011. ')
    .style('font-size', 20)

text0.append('text')
    .attr('x', 0)
    .attr('y', 140)
    .text('CALL OF DUTY: MODERN WARFARE 3, THE BEST-SELLING VIDEO ')
    .style('font-size', 20)

text0.append('text')
    .attr('x', 0)
    .attr('y', 160)
    .text('GAME OF 2011, REACHED  ')
    .style('font-size', 20)

text0.append('text')
    .attr('x', 152)
    .attr('y', 160)
    .attr('fill', 'red')
    .text('$1 BILLION ')
    .style('font-size', 20)

text0.append('text')
    .attr('x', 220)
    .attr('y', 160)
    .text('IN SALES AFTER 16 DAYS.')
    .style('font-size', 20)

//bottom elements
var g = svg.append('g').attr('transform', 'translate(' + 0 + ',' + ((margin.top) + 120) + ')')
//star
var star = d3.symbol()
    .type(d3.symbolStar)
    .size(30);

g.append('path')
    .attr('d', star)
    .attr("transform", "translate(" + 240 + "," + 65 + ")")
    .attr("fill", 'red');

//lines
g.append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 110)
    .attr("y2", 0)
    .attr("stroke-width", 2)
    .attr("stroke", "black")
    .attr("transform", "translate(" + 250 + "," + 65 + ")");

g.append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 110)
    .attr("y2", 0)
    .attr("stroke-width", 2)
    .attr("stroke", "black")
    .attr("transform", "translate(" + 120 + "," + 65 + ")");

g.append("svg:image")
    .attr("x", "40")
    .attr("y", "80")
    .attr("width", "180")
    .attr("xlink:href", "img/image12.jpg");
//automatic line-break
var str = "SOURCES: ENTERTAINMENT SOFTWARE ASSOCIATION. /NPD GROUP. ROVIO. ACTIVATION BLIZZARD, EMARKETER";
var strs = str.split('/');

var text = g.append("text")
    .attr("x", 3 * svg.attr('width') / 4 - 15)
    .attr("y", 85)
    .attr("font-size", "12px")
    .style('text-anchor', 'middle');

text.selectAll("tspan")
    .data(strs)
    .enter()
    .append("tspan")
    .attr("x", text.attr("x"))
    .attr("dy", "1em")
    .text(function (d) {
        return d
    });