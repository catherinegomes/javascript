const input = d3.select("input")
const button = d3.select("button")
const table = d3.select("body").append("table")


const handler = function(){

  let filterCond = input.property("value")

  table.html("")
  
  const headerRow = table.append("thead").append("tr")
  headerRow.append("th").text("Date/Time")
  headerRow.append("th").text("City")
  headerRow.append("th").text("State")
  headerRow.append("th").text("Country")
  headerRow.append("th").text("Shape")
  headerRow.append("th").text("Duration")
  headerRow.append("th").text("Comments")

  const tbody = table.append("tbody")

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

  data.filter(dataRow => dataRow.city === filterCond).forEach(dataRow => {
    let row = tbody.append("tr")
    row.append("td").text(dataRow.datetime)
    row.append("td").text(dataRow.city)
    row.append("td").text(dataRow.state)
    row.append("td").text(dataRow.country)
    row.append("td").text(dataRow.shape)
    row.append("td").text(dataRow.durationMinutes)
    row.append("td").text(dataRow.comments)
  })

  data.filter(dataRow => dataRow.state === filterCond).forEach(dataRow => {
    let row = tbody.append("tr")
    row.append("td").text(dataRow.datetime)
    row.append("td").text(dataRow.city)
    row.append("td").text(dataRow.state)
    row.append("td").text(dataRow.country)
    row.append("td").text(dataRow.shape)
    row.append("td").text(dataRow.durationMinutes)
    row.append("td").text(dataRow.comments)
  })

  data.filter(dataRow => dataRow.country === filterCond).forEach(dataRow => {
    let row = tbody.append("tr")
    row.append("td").text(dataRow.datetime)
    row.append("td").text(dataRow.city)
    row.append("td").text(dataRow.state)
    row.append("td").text(dataRow.country)
    row.append("td").text(dataRow.shape)
    row.append("td").text(dataRow.durationMinutes)
    row.append("td").text(dataRow.comments)
  })

  data.filter(dataRow => dataRow.shape === filterCond).forEach(dataRow => {
    let row = tbody.append("tr")
    row.append("td").text(dataRow.datetime)
    row.append("td").text(dataRow.city)
    row.append("td").text(dataRow.state)
    row.append("td").text(dataRow.country)
    row.append("td").text(dataRow.shape)
    row.append("td").text(dataRow.durationMinutes)
    row.append("td").text(dataRow.comments)
  })

  data.filter(dataRow => dataRow.durationMinutes === filterCond).forEach(dataRow => {
    let row = tbody.append("tr")
    row.append("td").text(dataRow.datetime)
    row.append("td").text(dataRow.city)
    row.append("td").text(dataRow.state)
    row.append("td").text(dataRow.country)
    row.append("td").text(dataRow.shape)
    row.append("td").text(dataRow.durationMinutes)
    row.append("td").text(dataRow.comments)
  })

  data.filter(dataRow => dataRow.comments === filterCond).forEach(dataRow => {
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



input.on("change", handler)
button.on("click", handler)
