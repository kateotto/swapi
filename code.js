function getDate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  return yyyy + "-" + mm + "-" + dd;
}

function getTime() {
  return new Date().toTimeString().split(" ")[0];
}

function getDataToAzure(temperature, humidity) {
  var headers = {
    "x-functions-key":
      "/Ukhl5arUOXFvettOHX4W0EUdNW15aHR/xkysjSOECMCEITuVDUeKA=="
  };

  var body = JSON.stringify({
    measurement_date: getDate(),
    measurement_time: getTime(),
    temperature: temperature,
    air_humidity: humidity,
    soil_moisture: 0
  });
  fetch("https://cdv-iot-cloud.azurewebsites.net/api/", {
    method: "POST",
    body: body,
    headers: headers
  }).then(function(res) {
    if (res.status == 201) {
      console.log("SUCCESS");
    }
  });
}
