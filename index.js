var width = 100;
var height = 100;
var padding = 2;
var dataset = [5, 10, 15, 20, 25];
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", function (d, i) {
    return (i * width) / dataset.length;
  })
  .attr("y", function (d) {
    return height - d * 4;
  })
  .attr("width", width / dataset.length - padding)
  .attr("height", function (d) {
    return d * 4;
  });
