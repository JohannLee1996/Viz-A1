var svg = d3.select("body")
    .append("svg")
    .attr("width", "480")
    .attr("height", "300")
    .attr('xmlns', "http://www.w3.org/2000/svg")
    .style("display", "block");
margin = {top: 80, right: 50, bottom: 60, left: 50};
width = +svg.attr("width") - margin.left - margin.right;
height = +svg.attr("height") - margin.top - margin.bottom;

var g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");


var dataSet = [
    {"name": "CONSOLE", "value": 70, "image_name": "image5.jpg"},
    {"name": "PC", "value": 65, "image_name": "image6.jpg"},
    {"name": "SMARTPHONES", "value": 28, "image_name": "image7.jpg"},
    {"name": "DEDICATED HANDHELD SYSTEM", "value": 35, "image_name": "image8.jpg"},
    {"name": "WIRELESS DEVICE", "value": 26, "image_name": "image9.jpg"},
];

var padding = width / (5 * dataSet.length);

g.selectAll("image")
    .data(dataSet)
    .enter()
    .append("svg:image")
    .attr('id', function (d, i) {
        return 'img' + i;
    })
    .attr("x", function (d, i) {
        return i * padding + i * width / dataSet.length;
    })
    .attr("y", height / 2)
    .attr("width", width / (1.5 * dataSet.length))
    .attr("height", width / (1.5 * dataSet.length))
    .attr("xlink:href", function (d) {
        return "img/" + d.image_name;
    })

var arcGenerator = d3.arc()
    .innerRadius(1.2 * width / (3 * dataSet.length))
    .outerRadius(1.2 * width / (3 * dataSet.length) + 10);

var j;
var arcData = new Array(dataSet.length);

for (j = 0; j < dataSet.length; j++) {
    arcData[j] = [{
        label: dataSet[j].name,
        startAngle: -Math.PI,
        endAngle: (dataSet[j].value / 100) * (2 * Math.PI) - Math.PI
    }];
}

var k;
var disable = false;

for (k = 0; k < dataSet.length; k++) {
    g.append('path')
        .data(arcData[k])
        .attr("transform", "translate(" + ((k * padding + k * width / dataSet.length) + (width / (3 * dataSet.length))) + "," + ((height / 2) + (width / (3 * dataSet.length))) + ")")
        .attr('d', arcGenerator)
        .attr('fill', 'red')
        .on('mouseover', function () {
            if (!disable) {
                disable = true;
                setTimeout(function () {
                    disable = false;
                }, 1001);
                d3.select(this)
                    .transition()
                    .duration(1000)
                    .attrTween('d', function (d) {
                        var i = d3.interpolate(d.startAngle + 0.1, d.endAngle);
                        return function (t) {
                            d.endAngle = i(t);
                            return arcGenerator(d)
                        }
                    })
            }

        });
}


var text = g.selectAll(".text1")
    .data(dataSet)
    .enter().append("g");

text.append("text")
    .attr('class', 'text1')
    .each(function (d, j) {
        var arr = d.name.split(" ");
        if (arr != undefined) {
            for (i = 0; i < arr.length; i++) {
                d3.select(this).append("tspan")
                    .text(arr[i])
                    .attr("dy", i ? 1.0 * i + "em" : 0)
                    // .attr("transform", "translate("+ ((j*padding+j*width/dataSet.length)+(width/(3*dataSet.length))) +","+ ((height/2)+(width/(dataSet.length))) +")";)
                    .attr("x", ((j * padding + j * width / dataSet.length) + (width / (3 * dataSet.length))))
                    .attr("y", 10 + ((height / 2) + (width / (dataSet.length))))
                    .attr("text-anchor", "middle")
                    .style('font-size', '12')
                    .attr("class", "tspan" + i);
            }
        }
    });


g.selectAll(".text2")
    .data(dataSet)
    .enter()
    .append('text')
    .attr("class", "text2")
    .attr("x", function (d, i) {
        return 2 + ((i * padding + i * width / dataSet.length) + (width / (3 * dataSet.length)));
    })
    .attr("y", ((height / 2) + (width / (dataSet.length))) - 10)
    .text(function (d) {
        return d.value;
    })
    .style('font-size', '12px')
    .attr("text-anchor", "start");

svg.append('text')
    .attr('x', 30)
    .attr('y', 102)
    .text('U.S HOUSEHOLDS THAT OWN AT LEAST ONE OF THE FOLLOWING')
    .style('font-size', 20);

svg.append('text')
    .attr('x', 30)
    .attr('y', 122)
    .text('DEVICES PLAY GAMES ON THEIR...')
    .style('font-size', 20);

svg.append('text')
    .attr('x', 30)
    .attr('y', 135)
    .attr('class', 'bree')
    .text('in %')
    .style('font-size', 12);

svg.append('text')
    .attr("x", 30)
    .attr('y', 30)
    .text('FOR NOW, ')
    .style('font-size', 20)

svg.append('text')
    .attr("x", 90)
    .attr('y', 30)
    .attr('fill', 'red')
    .text('CONSOLE REMAINS THE MOST POPULAR ')
    .style('font-size', 20)

svg.append('text')
    .attr("x", 325)
    .attr('y', 30)
    .text('GAMING')
    .style('font-size', 20)

svg.append('text')
    .attr("x", 30)
    .attr('y', 50)
    .text('DEVICES IN THE U.S.')
    .style('font-size', 20)



