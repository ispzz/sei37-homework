const FLICKR_BASE_URL = 'https://api.flickr.com/services/rest';
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';
let pageCount = 1;
let currentQuery;

$(document).ready(function(){

  console.log('Flickr App');

  $('#flickrSearch').focus();

  $('#flickrSearch').on('submit', function(e){

    const query = $('#searchText').val();
    currentQuery = query;
    getSearchResults(query);

    console.log('Submitted');
    e.preventDefault();
  });


}); //document ready

const getSearchResults = query => {

  //do ajax request to flickr API
  $.getJSON(FLICKR_BASE_URL, {
    method: 'flickr.photos.search',
    api_key: FLICKR_API_KEY,
    text: query,
    format: 'json',
    nojsoncallback: 1,
    page: pageCount
  }).done(
    data => displaySearchResults(data.photos),
    $('#wrapper').scroll(function(e){
        if($('#photoContainer').height() - ($('#wrapper').height()*2) < e.target.scrollTop){
          loadNextPage();
        }
    })
  ).fail(
    err => console.log(err)
  );

} //getSearchResults

const displaySearchResults = results => {
  console.log(results);
  const photoContainer = $('#photoContainer');
  results.photo.forEach(photo => {
    photoContainer.append(`<img src='http://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg'> `)
  })//each photo

} //displaySearchResults


const loadNextPage = _.throttle(function(){
  pageCount++;
  getSearchResults(currentQuery);
  console.log('Loading Next Page');
}, 5000);
