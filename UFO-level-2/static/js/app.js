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

    var inputElemen = d3.select("#city");
    var inputCity = inputElemen.property("value");

    var inputEleme = d3.select("#state");
    var inputState = inputEleme.property("value");
  
    var inputElem = d3.select("#country");
    var inputCountry = inputElem.property("value");

    var inputEle = d3.select("#shape");
    var inputShape = inputEle.property("value");
    
    //console.log(inputValue);
    //console.log(tableData);
  
    var filteredData = tableData.filter(criteria => criteria.datetime === inputValue);
    var filteredData = tableData.filter(criteria => criteria.city === inputCity);
    var filteredData = tableData.filter(criteria => criteria.state === inputState);
    var filteredData = tableData.filter(criteria => criteria.country === inputCountry);
    var filteredData = tableData.filter(criteria => criteria.shape === inputShape);
    
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
