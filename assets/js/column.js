var isDark = 0;
var isRtl = 0;

var options = {
        series: [
            {
                name: 'Sales',
                data: [44, 55, 41, 67, 22, 43, 21],
            },
            {
                name: 'Last Week',
                data: [13, 23, 20, 8, 13, 27, 33],
            },
        ],
        chart: {
            height: 160,
            type: 'bar',
            fontFamily: 'Nunito, sans-serif',
            toolbar: {
                show: false,
            },
            stacked: true,
            stackType: '100%',
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 1,
        },
        colors: ['#e2a03f', '#e0e6ed'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0,
                    },
                },
            },
        ],
        xaxis: {
            labels: {
                show: false,
            },
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        },
        yaxis: {
            show: false,
        },
        fill: {
            opacity: 1,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '25%',
            },
        },
        legend: {
            show: false,
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false,
                },
            },
            padding: {
                top: 0,
                right: -20,
                bottom: -20,
                left: -20,
            },
        },
    };
    var chart = new ApexCharts(document.querySelector("#dailysales"), options);
    chart.render();