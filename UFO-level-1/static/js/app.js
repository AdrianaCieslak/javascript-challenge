// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => row.append("td").text(value));
});

var button = d3.select("#filter-btn");

button.on("click", function() {
    d3.select("tbody").html("");
    d3.event.preventDefault();

var date = d3.select("#datetime").property("value");
console.log(date);

var newData = tableData.filter(x => x.datetime === date);
console.log(date);

date.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => row.append("td").text(value));

});

});