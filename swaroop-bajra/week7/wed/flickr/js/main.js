const FLICKR_BASE_URL = 'https://api.flickr.com/services/rest';
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084'
let pageNumber = 1;

$(document).ready(function(){

  $('#searchText').focus(); // kbd focus in form

  $('#searchForm').on('submit', function(ev){

    const query = $('#searchText').val();
    getSearchResults( query );

    ev.preventDefault(); // stop form from submitting
  });

  $('#next').on('click', function(ev){
    pageNumber++;
    const query = $('#searchText').val();
    getSearchResults( query );
  });

  $('#previous').on('click', function(ev){
    pageNumber--;
    const query = $('#searchText').val();
    getSearchResults( query );
  });

  $(document).on('click', 'img.result',  function(){
    const photoID = $(this).attr('photoID');
    getPhotoDetails( photoID );

  }); // img.result click handler

}); // $(document).ready();

const getPhotoDetails = (id) => {
  console.log('getPhotoDetails():', id);

  // Perform AJAX request to Flickr API
  $.getJSON( FLICKR_BASE_URL, {
    method: 'flickr.photos.info',
    api_key: FLICKR_API_KEY,
    format: 'json',
    nojsoncallback: 1,
  })
  .done( data => displayPhotoDetails(data.photo) )
  .fail( err  => console.warn(err) );

}; // getPhotoDetails()

const displayPhotoDetails = result => {
  const $results = $('#results');
  $results.empty();
  const thumbnailURL = generatePhotoURL(photo, 'c');
  $results.append(`<img id="${photo.id}" src="${thumbnailURL}">`);

}; // displayPhotoDetails



const getSearchResults = (queryText) => {
  console.log('getSearchResults():', queryText);

  // Perform AJAX request to Flickr API
  $.getJSON( FLICKR_BASE_URL, {
    method: 'flickr.photos.search',
    api_key: FLICKR_API_KEY,
    text: queryText,
    format: 'json',
    nojsoncallback: 1,
    page: pageNumber,
    per_page: 20,

  })
  .done( data => displaySearchResults(data.photos) )
  .fail( err  => console.warn(err) );

}; // getSearchResults()


const displaySearchResults = (results) => {
  console.log('displaySearchResults():', results);

  // Save a reference to the results div DOM node
  // so we're not querying the DOM in each iteration
  // of the loop (there are 100 iterations!)
  const $results = $('#results');
  $results.empty();
  // Display each result on the page:
  results.photo.forEach( photo => {
    const thumbnailURL = generatePhotoURL( photo, 's' );
    // console.log( thumbnailURL );
    $results.append(`<img photoID ="${photo.id}" class="result" src="${ thumbnailURL }"> `);
  });

}; // displaySearchResults()


const generatePhotoURL = (photo, size='q') => {
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
};
