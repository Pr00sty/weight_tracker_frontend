var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ['01/01/2020', '20/01/2020', '01/02/2020', '15/02/2020', '01/03/2020', '19/03/2020'],
		datasets: [{
			label: 'History of your weight',
			data: [70, 72, 71.5, 69, 70, 68.5],
			backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)'
			],
			borderColor: [
				'rgba(255, 99, 132, 1)',
				'rgba(54, 162, 235, 1)',
				'rgba(255, 206, 86, 1)',
				'rgba(75, 192, 192, 1)',
				'rgba(153, 102, 255, 1)',
				'rgba(255, 159, 64, 1)'
			],
			borderWidth: 1
		}]
	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: false
				}
			}]
		}
	}
});