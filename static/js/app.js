// Grab the DOMs and save to variables
const input = d3.select("input")
const button = d3.select("button")
// Grab the table body and save to variable
const tbody = d3.select("tbody")

// Display the full table at home page
data.filter(dataRow => dataRow).forEach(dataRow => {
  let row = tbody.append("tr")
  row.append("td").text(dataRow.datetime)
  row.append("td").text(dataRow.city)
  row.append("td").text(dataRow.state)
  row.append("td").text(dataRow.country)
  row.append("td").text(dataRow.shape)
  row.append("td").text(dataRow.durationMinutes)
  row.append("td").text(dataRow.comments)
})

// Assign function to handler
const handler = function(){
  // Wipe the prior table
  tbody.html("")
  // Create a filter based on the inputted value
  let filterCond = input.property("value")
  // Build table from the desired filter
  data.filter(dataRow => dataRow.datetime === filterCond).forEach(dataRow => {
    let row = tbody.append("tr")
    row.append("td").text(dataRow.datetime)
    row.append("td").text(dataRow.city)
    row.append("td").text(dataRow.state)
    row.append("td").text(dataRow.country)
    row.append("td").text(dataRow.shape)
    row.append("td").text(dataRow.durationMinutes)
    row.append("td").text(dataRow.comments)
  })
}

// After user enters an input and hits Enter (return key), handler will apply filter and render data
input.on("change", handler)
// After user enters an input and clicks button, handler will apply filter and render data
button.on("click", handler)