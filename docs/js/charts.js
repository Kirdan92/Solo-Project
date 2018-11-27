
var ctx = document.getElementById('myChart').getContext('2d');
/*---------------CHARTS-------------------------- */
var chart = new Chart(ctx, {
    // 1 - chart type
    type: 'bar',
    data: {
        // 2 - axis X labels
        labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
        // 3 - data series
        datasets: [{
            // 4 - data names
            label: "Signups",
            // 5 - colors for bars
            backgroundColor: '#8DBEC8',
            borderColor: '#8DBEC8',
            // 6 - example data
            data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
        },
        {
            label: "FTD",
            backgroundColor: '#F29E4E',
            borderColor: '#F29E4E',
            data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
        },
        {
            label: "Earned",
            backgroundColor: '#71B374',
            borderColor: '#71B374',
            data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
            // 7
            hidden: true,
        }]
    },
});