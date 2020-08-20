
let currentPage = 1;

const FLICKR_BASE_URL = 'https://api.flickr.com/services/rest';
const FLICKR_API_KEY  = '2f5ac274ecfac5a455f38745704ad084';

$(document).ready(function(){

$('#searchText').focus(); // kdb focus in form

$('#nextPage').on('click', function(){
  currentPage++;
  $('#results').empty();
  // console.log('Clicked!');
  const next = $('#searchText').val();
  getSearchResults( next );
});

$('#previousPage').on('click', function(){
  currentPage--;
  $('#results').empty();
  // console.log('Clicked!');
  const next = $('#searchText').val();
  getSearchResults( next );
});

$('#searchForm').on('submit', function(ev){
  const query = $('#searchText').val();
  getSearchResults( query );

  // console.log('query:', query);
  ev.preventDefault(); // stop form from submitting
});


}); // $(document).ready

const getSearchResults = (queryText) => {
  console.log('getSearchResults():', queryText);

  // Perform AJAX request to Flickr API
  $.getJSON( FLICKR_BASE_URL, {
    method: 'flickr.photos.search',
    api_key: FLICKR_API_KEY,
    text: queryText,
    format: 'json',
    page: currentPage,
    nojsoncallback: 1
  })
  .done( data => displaySearchResults(data.photos) )
  // .done( function( data){
  //   displaySearchResults( data);
  // })
  .fail( err  => console.warn(err) );

}; // getSearchResults()

const displaySearchResults = (results) => {
  console.log('displaySearchResults():', results);

  // save a reference to the results div DOM node so were not querying the DOM in each iteration of the loop (there are 100 iterations!)
  const $results = $('#results');

  // Display each result on the page:
  results.photo.forEach( photo => {
    const thumbnailURL = generatePhotoURL( photo, 's' );
    console.log( thumbnailURL );
    $results.append(`<img src="${ thumbnailURL }"> `)
  });

}; // displaySearchResults

const generatePhotoURL = (photo, size='q') => {
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
};
