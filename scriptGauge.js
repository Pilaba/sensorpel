google.charts.load('current', {'packages':['gauge']});
google.charts.setOnLoadCallback(drawGaguge);

function drawGaguge() {
    var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Temperaturs', 0]
    ]);

    var options = {
        width: 400, height: 120,
        redFrom: 40, redTo: 50,
        yellowFrom:35, yellowTo: 40,
        minorTicks: 5, max : 50
    };

    var chart = new google.visualization.Gauge(document.getElementById('gauge'));
    chart.draw(data, options);
    setInterval(function() {
        data.setValue(0, 1, Math.round(50 * Math.random()));
        chart.draw(data, options);
    }, 2000);
}


$('#checkbox').on('change', function() { 
    if (!this.checked) {

    }
    alert((this.checked ? 'ON' : 'OFF') );
});

var ctx = document.getElementById("myChart").getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["10:29", "10:30", "10:40", "10:50"],
        datasets: [{
            label: "Humidity",
            backgroundColor: 'rgb(30,144,255)',
            borderColor: 'rgb(75,0,130)',
            data: [7, 10, 8, 12],
        }]
    },

    // Configuration options go here
    options: {}
});



