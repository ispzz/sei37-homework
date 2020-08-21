
const FLICKR_BASE_URL = 'https://api.flickr.com/services/rest';
const FLICKR_API_KEY  = '2f5ac274ecfac5a455f38745704ad084';

$(document).ready(function(){

  $('#searchText').focus(); // kbd focus in form

  $('#searchForm').on('submit', function(ev){

    const query = $('#searchText').val();
    getSearchResults( query );

    ev.preventDefault(); // stop form from submitting
  });

  $('#results').on('click', 'img', function(){
    console.log('image clicked');
      const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';
      console.log($(this).attr('id'));
      $.getJSON(flickrURL,{
        method: 'flickr.photos.getInfo',
        api_key: '2f5ac274ecfac5a455f38745704ad084',
        photo_id: $(this).attr('id'), //return the element's ID
        format: 'json',
      }).done(function(result){
        const url = result.photo.urls.url[0]._content;
        window.open(url, '_blank');
      });
    });
    
}); // $(document).ready();



const getSearchResults = (queryText) => {
  console.log('getSearchResults():', queryText);

  // Perform AJAX request to Flickr API
  $.getJSON( FLICKR_BASE_URL, {
    method: 'flickr.photos.search',
    api_key: FLICKR_API_KEY,
    text: queryText,
    format: 'json',
    nojsoncallback: 1
  })
  .done( function( data ){
    displaySearchResults( data.photos );
  })
  .fail( err  => console.warn(err) );

};

const displaySearchResults = (results) => {
  console.log('displaySearchResults():', results);
  const $results = $('#results');
  results.photo.forEach( photo => {
    const thumbnailURL = generatePhotoURL( photo, 's' );
    console.log( thumbnailURL );
    const $img = $('<img>', {src: thumbnailURL, class: 'pic', id: photo.id});
    $img.appendTo('#results');
  });

}; // displaySearchResults()

const generatePhotoURL = (photo, size='q') => {
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
};
