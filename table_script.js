function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            table(data);
        }
    }
    xhttp.open("GET", "user_data.json", true);
    xhttp.send();
}
function table(data) {
    var heading = "<table><tr>";
    for (let elements in data[0]) {
        heading = heading + "<th>" + elements + "</th>";
    }
    heading = heading + "</tr>";
    display = "";
    for (let index in data) 
    {
        console.log(index);
        display = display+"<tr>";
        for (let property in data[index]) 
        {
            display = display + "<td>" + data[index][property] + "</td>";
        }
        display = display + "</tr>";
    }
    final = heading + display + "</table>";
    document.getElementById("table_id").innerHTML = final;
}

