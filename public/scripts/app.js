'use strict';

function updateData() {
	const x = 'x';
	getWeightWriter(99);
}

function saveWeight() {
	var userId = document.getElementById("user-id-save-data").value
	var weight = document.getElementById("measurement-save-data").value
	console.log("saveWeight(): ");
	
	var response = fetch(`http://localhost:8001/add_measurement/user_id=${userId}&weight=${weight}`, {method: 'PUT'})
	.then((response) => {
		if (response.status == 201) {
			document.getElementById("save-user-data-response").innerHTML = "Data saved!";
			console.log("Data saved!")
		} else if (response.status == 404){
			document.getElementById("save-user-data-response").innerHTML = "Any field cannot be empty!";
			console.log("Any field cannot be empty!")
		} else {
			document.getElementById("save-user-data-response").innerHTML = "Error!";
			console.log("err!")
		}
     
      });
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
	  
	// return weight;
}


function init() {
  document.getElementById('butRefresh').addEventListener('click', updateData);
  document.getElementById('butSaveWeight').addEventListener('click', saveWeight);
  document.getElementById('butGetWeight').addEventListener('click', getWeightWriter);
  document.getElementById('butGetWeightHistory').addEventListener('click', getWeightHistoryWriter);
}

init();
