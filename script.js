// Get the generate units button
const generateUnitsButton = document.getElementById('unit-generator');

// Add event listener to the generate units button
generateUnitsButton.addEventListener('click', generateUnits);

// Function to generate units
function generateUnits() {
  // Calculate the daily units for each appliance
  const appliance1Hours = parseFloat(document.getElementById('appliance1-hours').value) || 0;
  const appliance1Units = appliance1Hours * 0.5; // assume 0.5 units per hour
  document.getElementById('appliance1-units').value = appliance1Units.toFixed(2);

  const appliance2Hours = parseFloat(document.getElementById('appliance2-hours').value) || 0;
  const appliance2Units = appliance2Hours * 0.75; // assume 0.75 units per hour
  document.getElementById('appliance2-units').value = appliance2Units.toFixed(2);

  const appliance3Hours = parseFloat(document.getElementById('appliance3-hours').value) || 0;
  const appliance3Units = appliance3Hours * 1.0; // assume 1.0 units per hour
  document.getElementById('appliance3-units').value = appliance3Units.toFixed(2);

  const appliance4Hours = parseFloat(document.getElementById('appliance4-hours').value) || 0;
  const appliance4Units = appliance4Hours * 0.25; // assume 0.25 units per hour
  document.getElementById('appliance4-units').value = appliance4Units.toFixed(2);

  const appliance5Hours = parseFloat(document.getElementById('appliance5-hours').value) || 0;
  const appliance5Units = appliance5Hours * 0.5; // assume 0.5 units per hour
  document.getElementById('appliance5-units').value = appliance5Units.toFixed(2);
}

// Get the submit button
const submitButton = document.getElementById('submit');

// Add event listener to the submit button
submitButton.addEventListener('click', submitForm);

// Function to submit the form
function submitForm() {
  // Calculate the sum of monthly working hours
  const appliance1Hours = parseFloat(document.getElementById('appliance1-hours').value) || 0;
  const appliance2Hours = parseFloat(document.getElementById('appliance2-hours').value) || 0;
  const appliance3Hours = parseFloat(document.getElementById('appliance3-hours').value) || 0;
  const appliance4Hours = parseFloat(document.getElementById('appliance4-hours').value) || 0;
  const appliance5Hours = parseFloat(document.getElementById('appliance5-hours').value) || 0;
  const monthlyWorkingHours = (appliance1Hours * 30) + (appliance2Hours * 30) + (appliance3Hours * 30) + (appliance4Hours * 30) + (appliance5Hours * 30);
  document.getElementById('monthly-work-hours').value = monthlyWorkingHours.toFixed(2);

  // Calculate the sum of monthly units
  const appliance1Units = parseFloat(document.getElementById('appliance1-units').value) || 0;
  const appliance2Units = parseFloat(document.getElementById('appliance2-units').value) || 0;
  const appliance3Units = parseFloat(document.getElementById('appliance3-units').value) || 0;
  const appliance4Units = parseFloat(document.getElementById('appliance4-units').value) || 0;
  const appliance5Units = parseFloat(document.getElementById('appliance5-units').value) || 0;
  const monthlyUnits = (appliance1Units * 30) + (appliance2Units * 30) + (appliance3Units * 30) + (appliance4Units * 30) + (appliance5Units * 30);
  document.getElementById('monthly-work-units').value = monthlyUnits.toFixed(2);

  // Calculate the sum of monthly kWh
  const appliance1Kwh = parseFloat(document.getElementById('appliance1-kwh').value) || 0;
  const appliance2Kwh = parseFloat(document.getElementById('appliance2-kwh').value) || 0;
  const appliance3Kwh = parseFloat(document.getElementById('appliance3-kwh').value) || 0;
  const appliance4Kwh = parseFloat(document.getElementById('appliance4-kwh').value) || 0;
  const appliance5Kwh = parseFloat(document.getElementById('appliance5-kwh').value) || 0;
  const monthlyKwh = (appliance1Kwh ) + (appliance2Kwh ) + (appliance3Kwh ) + (appliance4Kwh ) + (appliance5Kwh );
  document.getElementById('sum-kwh').value = monthlyKwh.toFixed(2);

  // Calculate the monthly cost
  let monthlyCost;
  if (monthlyUnits <= 60) {
    monthlyCost = monthlyUnits * 25;
  } else if (monthlyUnits <= 90) {
    monthlyCost = (60 * 25) + ((monthlyUnits - 60) * 30);
  } else if (monthlyUnits <= 120) {
    monthlyCost = (60 * 25) + (30 * 30) + ((monthlyUnits - 90) * 50);
  } else if (monthlyUnits <= 180) {
    monthlyCost = (60 * 25) + (30 * 30) + (30 * 50) + ((monthlyUnits - 120) * 50);
  } else {
    monthlyCost = (60 * 25) + (30 * 30) + (30 * 50) + (60 * 50) + ((monthlyUnits - 180) * 75);
  }
  document.getElementById('monthly-cost').value = monthlyCost.toFixed(2);

  // Check if the monthly cost is high
  const fundInput = parseFloat(document.getElementById('fund').value) || 0;
  const alertBox = document.getElementById('alert-box');
  if (monthlyCost > fundInput) {
    alertBox.innerHTML = 'High energy costs detected. Switch to solar panels for significant savings.';
  } else {
    alertBox.innerHTML = 'Your utility bills are not high. No need to switch to solar panels now.';
  }
  alertBox.style.display = 'block';
}
