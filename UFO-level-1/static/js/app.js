// from data.js
var tableData = data;

// YOUR CODE HERE!

// List data
var tbody = d3.select("tbody");

function tablebuild(tableData) {
    tableData.forEach(function(ufoSighting){
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(function([key,value]){
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
tablebuild(tableData);

// Filter table event
var button = d3.select("#filter-btn");

button.on("click", function(event) {
    var tbody = d3.selectAll('tbody');
    tbody.selectAll("*").remove();
    var filteredData = tableData;
    var inputId = document.getElementsByClassName("form-control");
  
    for (var i = 0; i < inputId.length; i++) {
        var idName = inputId[i].id;
        var field = d3.select("#" + idName).property("value");
    
        if (field !== "") {
            var filteredData = filteredData.filter(ufoSighting => ufoSighting[idName] === field);
        };
    };
    console.log(filteredData);
    tablebuild(filteredData);
});