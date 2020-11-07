$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#temp').text(data.main.temp);
  })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#min-temp').text(data.main.temp_min);
  })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#max-temp').text(data.main.temp_max);
  })

  $('#temp-up').on('click', function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').on('click', function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.turnOnPowerSavingMode();
    $('#power-saving').text('on');
    updateTemperature();
  });

  $('#powersaving-off').click(function() {
    thermostat.turnOffPowerSavingMode();
    $('#power-saving').text('off');
    updateTemperature();
  });

  function updateTemperature() {
    $('#current-temp').text(thermostat.temperature);
    $('#current-temp').attr('class', thermostat.energyUsage());
     // $('#currentTemp').text(thermostat.currentTemp);
    // if(thermostat.energyUsage() === 'low-usage') {
    //   $('#currentTemp').css('color', 'green');
    // } else if(thermostat.energyUsage() === 'medium-usage') {
    //   $('#currentTemp').css('color', 'black');
    // } else {
    //   $('#currentTemp').css('color', 'red')
    // }
  };

});