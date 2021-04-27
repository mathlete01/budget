var w = 300;
var h = 100;
var padding = 2;
var dataset = [5, 10, 14, 20, 25];
var max = dataset.reduce(function (a, b) {
  return Math.max(a, b);
});
var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
var heightFactor = h / max;
var colorFactor = 255 / max;

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr({
    x: function (d, i) {
      console.log(`x: (i * w)/dataset.length = `, (i * w) / dataset.length);
      return (i * w) / dataset.length;
    },
    y: function (d) {
      console.log(`y: h - d * heightFactor = `, h - d * heightFactor);
      return h - d * heightFactor;
    },
    width: w / dataset.length - padding,
    height: function (d) {
      console.log(
        `width: w / dataset.length - padding = `,
        w / dataset.length - padding
      );
      console.log(`height: d*heightFactor = `, d * heightFactor);
      return d * heightFactor;
    },
    fill: function (d) {
      console.log(`d*10 = `, d * colorFactor);
      return "rgb(0,0," + d * colorFactor + ")";
    },
  });
console.log("hello1");
