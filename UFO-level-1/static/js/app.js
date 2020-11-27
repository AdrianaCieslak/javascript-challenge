// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

var tbody = d3.select("tbody");

tableData.forEach(function(ufo) {
    console.log(ufo);
    var row = tbody.append("tr");
    
    Object.entries(ufo).forEach(function([key, value]) {
    console.log(key, value);
    var cell = row.append("td");
    cell.text(value);
    });
});
    
var button = d3.select("#filter-btn");
button.on("click", function() {
    d3.select("tbody").html("");
    d3.event.preventDefault();
    
    var inputElement = d3.select("#datetime"); 
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);
  
    var filteredData = tableData.filter(criteria => criteria.datetime === inputValue);
  
    console.log(filteredData);

    filteredData.forEach(function(ufo) {
        console.log(ufo);
        var row = tbody.append("tr");
        
        Object.entries(ufo).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
        });
    });     
});

