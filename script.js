// Dashboard Elements
const vehicles = document.getElementById("vehicles");
const status = document.getElementById("status");
const average = document.getElementById("average");
const time = document.getElementById("time");
const progressFill = document.getElementById("progressFill");
const tableBody = document.getElementById("tableBody");
const search = document.getElementById("search");

let trafficData = [];
let currentIndex = 0;

// Read Kaggle CSV
Papa.parse("traffic.csv", {
    download: true,
    header: true,
    dynamicTyping: true,

    complete: function(results) {

        trafficData = results.data.filter(row => row.traffic_volume);

        calculateAverage();

        updateDashboard();

        setInterval(updateDashboard, 1000);
    }
});

// Average Traffic
function calculateAverage(){

    let sum = 0;

    trafficData.forEach(row=>{
        sum += row.traffic_volume;
    });

    average.innerHTML = Math.round(sum / trafficData.length);

}

// Update every second
function updateDashboard(){

    if(currentIndex >= trafficData.length){
        currentIndex = 0;
    }

    let row = trafficData[currentIndex];

    vehicles.innerHTML = row.traffic_volume;

    // Date & Time
    time.innerHTML = new Date().toLocaleString();

    // Traffic Status
    let volume = row.traffic_volume;

    if(volume < 2000){

        status.innerHTML = "Low";
        status.className = "low";

    }

    else if(volume < 4000){

        status.innerHTML = "Medium";
        status.className = "medium";

    }

    else{

        status.innerHTML = "High";
        status.className = "high";

    }

    // Progress Bar
    let percent = (volume / 7000) * 100;

    if(percent > 100){
        percent = 100;
    }

    progressFill.style.width = percent + "%";

    // Add latest record
    let tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${new Date().toLocaleString()}</td>
        <td>${row.traffic_volume}</td>
        <td>${status.innerHTML}</td>
    `;

    tableBody.prepend(tr);

    // Keep only latest 10 rows
    while(tableBody.rows.length > 10){
        tableBody.deleteRow(10);
    }

    currentIndex++;

}

// Search
search.addEventListener("keyup", function(){

    let filter = search.value.toLowerCase();

    let rows = tableBody.getElementsByTagName("tr");

    for(let i=0;i<rows.length;i++){

        let text = rows[i].textContent.toLowerCase();

        if(text.indexOf(filter) > -1){

            rows[i].style.display = "";

        }

        else{

            rows[i].style.display = "none";

        }

    }

});