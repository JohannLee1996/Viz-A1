//svg
var svg = d3.select("body")
    .append("svg")
    .attr("width", "480")
    .attr("height", "170")
    .style('display', 'block');
//images here
svg.append("svg:image")
    .attr("x", "65")
    .attr("y", "80")
    .attr("width", "45")
    .attr("xlink:href", "img/image2.jpg");

svg.append("svg:image")
    .attr("x", "15")
    .attr("y", "15")
    .attr("width", "50")
    .attr("xlink:href", "img/image1.jpg");

svg.append("svg:image")
    .attr("x", "375")
    .attr("y", "45")
    .attr("width", "55")
    .attr("xlink:href", "img/image3.jpg");
//text here
svg.append("text")
    .attr("x", 70)
    .attr("y", 50)
    .attr("font-size", "25px")
    .text("VIDEO GAMES: AN INDUSTRY IN TRANSITION");
//star
var star = d3.symbol()
    .type(d3.symbolStar)
    .size(30);

svg.append('path')
    .attr('d', star)
    .attr("transform", "translate(" + 240 + "," + 70 + ")")
    .attr("fill", 'red');

//lines
svg.append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 120)
    .attr("y2", 0)
    .attr("stroke-width", 2)
    .attr("stroke", "black")
    .attr("transform", "translate(" + 250 + "," + 70 + ")");

svg.append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr("x2", 120)
    .attr("y2", 0)
    .attr("stroke-width", 2)
    .attr("stroke", "black")
    .attr("transform", "translate(" + 110 + "," + 70 + ")");
//text here
svg.append("text")
    .attr("x", 30)
    .attr("y", 130)
    .attr("font-size", "20px")
    .text("PHYSICAL RETAIL SALES")
    .attr('fill', 'red');

svg.append("text")
    .attr("x", 175)
    .attr("y", 130)
    .attr("font-size", "20px")
    .text(" OF COMPUTER AND VIDEO GAMES ARE");

svg.append("text")
    .attr("x", 160)
    .attr("y", 150)
    .attr("font-size", "20px")
    .text("LOWEST LEVEL")
    .attr('fill', 'red');

svg.append("text")
    .attr("x", 30)
    .attr("y", 150)
    .attr("font-size", "20px")
    .text("CURRENTLY ON THEIR");

svg.append("text")
    .attr("x", 250)
    .attr("y", 150)
    .attr("font-size", "20px")
    .text("SINCE 2006.");


