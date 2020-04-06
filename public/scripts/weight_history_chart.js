function getWeightHistoryWriter() {
	var userId = document.getElementById("chartuseridin").value
	console.log("getWeightHistoryWriter(): ");
	
	fetch(`http://localhost:8001/get_weights/${userId}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log("data");
			console.log(data);
			if (data.value === null || typeof data.value == "undefined"){
				var weight = -1
			} else {
				var weight = data.value
			}
			var weightHistoryLength = data.length;
			var weights = [], dates = []
			for (var i = 0; i < weightHistoryLength; i++) {
				weights.push(data[i].value)
				dates.push(data[i].date)
			}
			genChart(weights, dates);
			return resolve(data ? JSON.parse(data) : data);
		})
		.catch(() => {
			console.log(-999);
			return null;
		});
}


function genChart(datain, labelsin) {

	var ctx = document.getElementById('myChart');
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: labelsin,
			datasets: [{
				label: 'History of your weight',
				data: datain,
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
}
