$(document).ready(function(){

  $('#generateImage').on('click', function(){
    generateRandomImage();
  }); // button handler

}); // $(document).ready()

start = new Date(1995, 0, 1)
end = new Date()

const randomDate = function(start, end) {
  let d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
};

const generateRandomImage = function() {
  randomDate(start, end);

  const url = `https://api.nasa.gov/planetary/apod?api_key=9aelacnuLb5icus2bIU3BhC2vnC8foQ1iN0uQwI7&date=${randomDate(start,end)}`;

  $.getJSON(url)
  .done(function(data){
    // This code runs when we have our response; the response will be in the callback's argument, which here we have called 'data'
    $('#result').empty();
    $('#result').append(`
      <h2><em>${data.title}</em> (${data.date})</h2>
      <p>${data.explanation}</p>
      <img class"result" src="${data.url}">`);
  }) // $.ajax().done()
  .fail(function(error){
    console.log('ERROR:', error);
  }); // $.ajax().done().fail()
}; // generateRandomImage()
