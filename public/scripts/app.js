'use strict';

function updateData() {
	const x = 'x';
	getWeightWriter(99);
}

function getWeightWriter() {
	var userId = document.getElementById("fuseridin").value
	console.log("getWeightWriter(): ");
	
	fetch(`http://localhost:8001/get_weight/${userId}`)
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
		  document.getElementById("fweight").innerHTML = weight
		 return resolve(data ? JSON.parse(data) : data);
		})
      .catch(() => {
		  console.log(-999);
        return null;
      });
}


function init() {
  document.getElementById('butRefresh').addEventListener('click', updateData);
  document.getElementById('butGetWeight').addEventListener('click', getWeightWriter);
}

init();
