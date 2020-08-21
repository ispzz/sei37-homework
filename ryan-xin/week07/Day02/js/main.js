
const getCountryData = function(url){
  $.getJSON(url)
    .done(function (data) {
      // Get all au cities
      const results = data.results;
      // city_list for unique cities in results
      let city_list = [];
      // push all cities into city_list;
      results.forEach(function (item) {
        city_list.push(item.city);
      });
      // remove duplicated cities ????
      city_list = city_list.filter(function (value, index, city_list) {
        return index == city_list.indexOf(value);
      });
      // forEach to append city to #city selector
      city_list.forEach(function (city) {
        $('#city').append(`<option value="${city}" id="default_city">${city}</option>`);
      });
    })
    .fail(function (error) {
      console.warn("Data not found.")
    });
}; // getCountryData

const getCityData = function(url){
  $.getJSON(url)
    .done(function (data) {
      const results = data.results;
      // forEach to append location to #location selector
      data.results.forEach(function (item) {
        $('#location').append(`<option value="${item.location}" id="default_location">${item.location}</option>`);
      });
    })
    .fail(function (error) {
      console.warn("Data not found.");
    });
}; // getCityData

const getLocationData = function(url){
  $.getJSON(url)
    .done(function (data) {
      const results = data.results;
      // Append city country location
      $('#city_show').append(results[0].city);
      $('#country_show').append(results[0].country);
      $('#location_show').append(results[0].location);
      // forEach to append parameters value
      results[0].measurements.forEach(function (item) {
        $('#measurements').append(`<li>
            <h3>${item.parameter}</h3>
            <p>${item.value}</p>
          </li>`);
      });
    })
    .fail(function (error) {
      console.log('Data not found.');
    });
}; // getLocationData

/* -------------------- Event Handler ------------------- */

$(document).ready(function () {

  $('#city').on('click', function(){
    // Hide results div
    $('#results').hide();
    // Clear the #city selector options
    $('#default_city').siblings().remove();
    const url = `https://api.openaq.org/v1/latest?country=AU`;
    // Get all AU data
    getCountryData(url);
  }); // #city click handler
  
  $('#location').on('click', function(){
    // Clear the #location selector options
    $('#default_location').siblings().remove();
    // Get the city form #city selector
    const city = $('#city').val();
    const url = `https://api.openaq.org/v1/latest?city=${city}`;
    // Get city data
    getCityData(url);
  }); // #location click handler
  
  $('#form').on('submit', function(e){
    // Clear the results
    $('#city_show').html('');
    $('#country_show').html('');
    $('#location_show').html('');
    $('#measurements').html('');
    // Show results div
    $('#results').show();
    // Stop form submit reloading page
    e.preventDefault();
    // Get location from #location selector
    const location = $('#location').val();
    const url = `https://api.openaq.org/v1/latest?location=${location}`;
    // Get location data
    getLocationData(url);
    
    // Clear the #city selector options
    $('#default_city').siblings().remove();
    // Clear the #location selector options
    $('#default_location').siblings().remove();
    
  }); // button submit handler
  
});
