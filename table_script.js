employee=[  {
    "FirstName": "Haritha",
    "LastName": "Vasanthula",
    "Email": "vrharitha1998@gmail.com",
    "Password": "asdfgh",
    "Dob": "12-05-1998",
    "Gender": "female",
    "Hobbies": ["Story Writing", "Singing"],
    "Country": "India",
    "State": "Andhra Pradesh",
    "Address": "Vizag 530046"
}]


function loadDoc() {
    console.log("LoadDoc()");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
             data = JSON.parse(this.responseText);
            table(data);

        }
    }
    xhttp.open("GET", "user_data.json", true);
    xhttp.send();

}

function table(data) {
    console.log("table(data)");
    var heading = "<table><tr>";
    for (let elements in data[0]) {
        heading = heading + "<th>" + elements + "</th>";
    }
    heading = heading + "</tr>";
    display = "";
    for (let index in data) 
    {
        display = display+"<tr>";
        for (let property in data[index]) 
        {
            display = display + "<td>" + data[index][property] + "</td>";
        }
        display = display + "</tr>";
    }
    final = heading + display + "</table>";
    document.getElementById("table_id").innerHTML = final;
    console.log(final);
}

function add_employee()
{
    console.log("add_employee()");

    var new_employee = Object.create(employee);

    for(var property in employee[0])
    {
       new_employee[property] = document.getElementsByName(property)[0].value;
       
    }
    data.push(new_employee);
    console.log(data);
    table(data);

}
