function sortTable(columnIndex) {
    var table, rows, switching, i, x, y, shouldSwitch, direction, switchcount = 0;
    table = document.getElementById("books-table");
    switching = true;
    direction = "asc"; // Default sort direction
  
    while (switching) {
      switching = false;
      rows = table.rows;
  
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[columnIndex];
        y = rows[i + 1].getElementsByTagName("TD")[columnIndex];
  
        if (direction == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (direction == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
  
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount == 0 && direction == "asc") {
          direction = "desc";
          switching = true;
        }
      }
    }
  
    var headers = table.getElementsByTagName("th");
    for (i = 0; i < headers.length; i++) {
      headers[i].classList.remove("sorted-asc", "sorted-desc");
    }
    headers[columnIndex].classList.add(direction == "asc" ? "sorted-asc" : "sorted-desc");
  }
  