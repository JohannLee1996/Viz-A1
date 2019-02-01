var svg = d3.select("body")
    .append("svg")
    .attr("width","480")
    .attr("height","320")
    .style('display', 'block');
margin = {top: 0, right: 45, bottom: 30, left: 20};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;

var text0 = svg.append('g').attr('transform','translate('+margin.left+','+margin.top+')')

text0.append('svg:image')
    .attr('x',370)
    .attr('y',0)
    .attr('width',50)
    .attr('xlink:href', 'img/image11.jpg')

text0.append('text')
    .attr('x',0)
    .attr('y',20)
    .text('SMARTPHONE GAMES SUCH AS ')
    .style('font-weight','bold')
    .style('font-size',13)

text0.append('text')
    .attr('x',210)
    .attr('y',20)
    .attr('fill','red')
    .text('ANGRY BIRDS CAN ')
    .style('font-weight','bold')
    .style('font-size',13)

text0.append('text')
    .attr('x',0)
    .attr('y',35)
    .attr('fill','red')
    .text('BE EXTREMELY POPULAR')
    .style('font-weight','bold')
    .style('font-size',13)

text0.append('text')
    .attr('x',170)
    .attr('y',35)
    .text(', BUT ')
    .style('font-weight','bold')
    .style('font-size',13)

text0.append('text')
    .attr('x',205)
    .attr('y',35)
    .attr('fill','red')
    .text('THE BIG MONEY ')
    .style('font-weight','bold')
    .style('font-size',13)

text0.append('text')
    .attr('x',315)
    .attr('y',35)
    .text('IS ')
    .style('font-weight','bold')
    .style('font-size',13)

text0.append('text')
    .attr('x',0)
    .attr('y',50)
    .text('STILL IN ')
    .style('font-weight','bold')
    .style('font-size',13)

text0.append('text')
    .attr('x',60)
    .attr('y',50)
    .attr('fill','red')
    .text('TRADITIONAL GAMES: ')
    .style('font-weight','bold')
    .style('font-size',13)

text0.append('text')
    .attr('x',0)
    .attr('y',80)
    .text('RAVIO: MAKER OF THE ANGRY BIRDS FRANCHISE, POSTED ')
    .style('font-weight','bold')
    .style('font-size',13)

text0.append('text')
    .attr('x',0)
    .attr('y',95)
    .attr('fill','red')
    .text('$ 106.3 MILLION ')
    .style('font-weight','bold')
    .style('font-size',13)

text0.append('text')
    .attr('x',105)
    .attr('y',95)
    .text('REVENUE IN 2011. ')
    .style('font-weight','bold')
    .style('font-size',13)

text0.append('text')
    .attr('x',0)
    .attr('y',125)
    .text('CALL OF DUTY: MODERN WARFARE 3, THE BEST-SELLING VIDEO ')
    .style('font-weight','bold')
    .style('font-size',13)

text0.append('text')
    .attr('x',0)
    .attr('y',140)
    .text('GAME OF 2011, REACHED  ')
    .style('font-weight','bold')
    .style('font-size',13)

text0.append('text')
    .attr('x',165)
    .attr('y',140)
    .attr('fill','red')
    .text('$ 1 BILLION ')
    .style('font-weight','bold')
    .style('font-size',13)

text0.append('text')
    .attr('x',245)
    .attr('y',140)
    .text('IN SALES AFTER 16 DAYS.')
    .style('font-weight','bold')
    .style('font-size',13)






var g = svg.append('g').attr('transform','translate('+0+','+((margin.top)+120)+')')

g.append('path')
    .attr('d', star)
    .attr("transform", "translate(" + 240 + "," + 50 + ")")
    .attr("fill",'red');


g.append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 110)
    .attr("y2", 0)
    .attr("stroke-width", 2)
    .attr("stroke", "black")
    .attr("transform", "translate(" + 250 + "," + 50 + ")");

g.append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 110)
    .attr("y2", 0)
    .attr("stroke-width", 2)
    .attr("stroke", "black")
    .attr("transform", "translate(" + 120 + "," + 50 + ")");

g.append("svg:image")
    .attr("x","20")
    .attr("y","80")
    .attr("width","200")
    .attr("xlink:href", "img/image12.jpg");

var str = "SOURCES: ENTERTAINMENT SOFTWARE ASSOCIATION. /NPD GROUP. ROVIO. ACTIVATION BLIZZARD, EMARKETER";
var strs = str.split('/');

var text = g.append("text")
    .attr("x",3*svg.attr('width')/4)
    .attr("y",85)
    .attr("font-size","9px")
    .style('text-anchor','middle');

text.selectAll("tspan")
    .data(strs)
    .enter()
    .append("tspan")
    .attr("x",text.attr("x"))
    .attr("dy","1em")
    .text(function(d){return d});