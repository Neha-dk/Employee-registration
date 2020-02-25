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
}

function add_employee()
{

    var new_employee = Object.create(employee);

    for(var property in employee[0])
    {
        console.log(document.getElementsByName(property)[0].type);
        if(document.getElementsByName(property)[0].type === "radio")
        {
            for (let index = 0; index < document.getElementsByName(property).length; index++) 
            {
                if(document.getElementsByName(property)[index].checked == true)
                {
                    console.log("Radio-->"+document.getElementsByName(property)[index].value);
                    new_employee[property] = document.getElementsByName(property)[index].value;
                break;

                }
            }
            
        }
        else if(document.getElementsByName(property)[0].type === "checkbox")
        {
            hobby= [];
            for (let index = 0; index < document.getElementsByName(property).length; index++) 
            {
                if(document.getElementsByName(property)[index].checked == true)
                {
                   
                    hobby.push(document.getElementsByName(property)[index].value);
                    console.log(new_employee[property]);
                }
            }
            new_employee[property] = hobby;
            console.log(new_employee[property]);
        }
        else
        {
       new_employee[property] = document.getElementsByName(property)[0].value;
        }

    }
    data.push(new_employee);
    // console.log(data);
    table(data);

}
