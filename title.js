var svg = d3.select("body")
    .append("svg")
    .attr("width","480")
    .attr("height","130")
    .style('display', 'block');

svg.append("svg:image")
    .attr("x","20")
    .attr("y","20")
    .attr("width","60")
    .attr("height","60")
    .attr("xlink:href", "img/image1.jpg");

svg.append("svg:image")
    .attr("x","70")
    .attr("y","65")
    .attr("width","30")
    .attr("height","30")
    .attr("xlink:href", "img/image2.jpg");

svg.append("svg:image")
    .attr("x","380")
    .attr("y","40")
    .attr("width","60")
    .attr("height","60")
    .attr("xlink:href", "img/image3.jpg");

svg.append("text")
    .attr("x",70)
    .attr("y",50)
    .attr("font-size","15px")
    .text("VIDEO GAMES: AN INDUSTRY IN TRANSITION");

var star = d3.symbol()
    .type(d3.symbolStar)
    .size(50);

//var pathData = symbolGenerator();

svg.append('path')
    .attr('d', star)
    .attr("transform", "translate(" + 240 + "," + 70 + ")")
    .attr("fill",'red');


svg.append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 110)
    .attr("y2", 0)
    .attr("stroke-width", 2)
    .attr("stroke", "black")
    .attr("transform", "translate(" + 250 + "," + 70 + ")");

svg.append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 110)
    .attr("y2", 0)
    .attr("stroke-width", 2)
    .attr("stroke", "black")
    .attr("transform", "translate(" + 120 + "," + 70 + ")");

svg.append("text")
    .attr("x",30)
    .attr("y",110)
    .attr("font-size","12px")
    .text("PHYSICAL RETAIL SALES")
    .attr('fill','red');

svg.append("text")
    .attr("x",180)
    .attr("y",110)
    .attr("font-size","12px")
    .text(" OF COMPUTER AND VIDEO GAMES ARE");

svg.append("text")
    .attr("x",165)
    .attr("y",125)
    .attr("font-size","12px")
    .text("LOWEST LEVEL")
    .attr('fill','red');

svg.append("text")
    .attr("x",30)
    .attr("y",125)
    .attr("font-size","12px")
    .text("CURRENTLY ON THEIR");

svg.append("text")
    .attr("x",260)
    .attr("y",125)
    .attr("font-size","12px")
    .text("SINCE 2006.");


