// https: //api.flickr.com/services/rest?method=flickr.photos.search&api_key=2f5ac274ecfac5a455f38745704ad084&text=coral&format=json&nojsoncallback=1
// https: //farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg

const FLICKR_BASE_URL = `https://api.flickr.com/services/rest`;
const FLICKR_API_KEY = `2f5ac274ecfac5a455f38745704ad084`;

const getSearchResults = (queryText, page) => {
  // Perform AJAX request to Flickr API
  // JSON will help us with the key value pair
  $.getJSON(FLICKR_BASE_URL, {
    method: `flickr.photos.search`,
    api_key: FLICKR_API_KEY,
    text: queryText,
    format: 'json',
    nojsoncallback: 1,
    page: page
  })
  .done(data => displaySearchResults(data.photos))
  .fail(error => console.log(error));
}; // getSearchResults function

const displaySearchResults = results => {
  $('#details').children().remove();
  // Save reference to the results div DOM node
  const $results = $('#results');
  // Clear #results div every search
  $results.children().remove();
  // Display each result on the page;
  results.photo.forEach( photo => {
    const thumbnailURL = generatePhotoURL(photo, 's');
    $results.append(`<img id="${photo.id}" src="${thumbnailURL}"> `);
  });
}; // displaySearchResults function

const generatePhotoURL = (photo, size = 'q') => {
  return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`
}; // generatePhotoURL

const getSearchResultsPages = queryText => {
  $.getJSON(FLICKR_BASE_URL, {
      method: `flickr.photos.search`,
      api_key: FLICKR_API_KEY,
      text: queryText,
      format: 'json',
      nojsoncallback: 1,
    })
    .done(data => data.photos.pages)
    .fail(error => console.log(error))
}; // getSearchResultsPages

const getPhotoDetails = id => {
  $.getJSON(FLICKR_BASE_URL, {
    method: `flickr.photos.getInfo`,
    api_key: FLICKR_API_KEY,
    photo_id: id,
    format: 'json',
    nojsoncallback: 1,
  })
  .done(data => displayPhotoDetails(data.photo))
  .fail(error => console.log(error));
}; // getPhotoDetails

const displayPhotoDetails = results => {
  $('#results').children().remove();
  $('#details').children().remove();
  const $details = $('#details');
  const thumbnailURL = generatePhotoURL(results, 'c');
  $details.append(`<img id="${results.id}" src="${thumbnailURL}">`);
  $details.append(`<h2>${results.title._content}</h2>`);
  $details.append(`<p>${results.description._content}</p>`);
}; // displayPhotoDetails

const getPhotoSlider = id => {
  $.getJSON(FLICKR_BASE_URL, {
      method: `flickr.photos.getInfo`,
      api_key: FLICKR_API_KEY,
      photo_id: id,
      format: 'json',
      nojsoncallback: 1,
    })
    .done(data => displayPhotoSlider(data.photo))
    .fail(error => console.log(error));
}; // getPhotoSlider

const displayPhotoSlider = results => {
  $('#arrows').show();
  const $slider = $('#slider');
  const thumbnailURL = generatePhotoURL(results, 'b');
  $slider.append(`<img id="${results.id}" src="${thumbnailURL}">`);
}; // displayPhotoDetails

const getPhotoSliderList = (queryText, photoId) => {
  // Perform AJAX request to Flickr API
  // JSON will help us with the key value pair
  $.getJSON(FLICKR_BASE_URL, {
      method: `flickr.photos.search`,
      api_key: FLICKR_API_KEY,
      text: queryText,
      format: 'json',
      nojsoncallback: 1,
    })
    .done(data => displayPhotoSliderListItem(data.photos.photo, photoId))
    .fail(error => console.log(error));
}; // getPhotoSliderList function

const displayPhotoSliderListItem = (photoArray, photoId) => {
  let photoIndex;
  // Find the current photo index in PAGE 1
  photoArray.forEach((photo, index) => {
    if(photo.id === photoId){
      photoIndex = index;
    }
  });
  photoIndex += 1;
  // Get the next photo
  const displayPhoto = photoArray[photoIndex];
  // Get the next photo url
  const sliderPhotoURL = generatePhotoURL(displayPhoto, 'b');
  const $slider = $('#slider');
  $slider.children('img').remove();
  $slider.append(`<img id="${displayPhoto.id}" src="${sliderPhotoURL}">`);
}; // displayPhotoSliderListItem

$(document).ready(function () {

  // Put focus on #searchText
  $('#searchText').focus();
  
  $('#searchText').on('click', function(){
    $(this).val('');
  }); // Clear #searchText field

  $('#searchForm').on('submit', ev => {
    // Stop from from submitting reloading the page
    ev.preventDefault();

    const query = $('#searchText').val();
    let page = 1;
    getSearchResults(query, page);
    $('#buttons').show();

    $('#next').on('click', () => {
      page += 1;
      // After click #next there is the previous page, so enable&pointer #previous 
      $('#previous').attr('disabled', false);
      $('#previous').css('cursor', 'pointer');
      // TODO: maxPage undefined
      const maxPage = getSearchResultsPages(query);
      console.log(maxPage);
      if (page >= maxPage) {
        $('#next').attr('disabled', true);
        $('#next').css('cursor', 'default');
      }
      getSearchResults(query, page);
    }); // #next button click handler

    $('#previous').on('click', () => {
      page -= 1;
      $('#next').attr('disabled', false);
      $('#next').css('cursor', 'pointer');
      // When on page 1 #previous should be disabled&cursor:default 
      if (page <= 1) {
        $('#previous').attr('disabled', true);
        $('#previous').css('cursor', 'default');
      }
      getSearchResults(query, page);
    }); // #previous button click handler

  }); // #form submit handler

  console.log('this on line above handler:', this);
  $(document).on('click', '#results img', function(){
    console.log('this:', this);
    const photoId = $(this).attr('id');
    getPhotoDetails(photoId);
    $('#buttons').hide();
  }); // #results img click handler

  $(document).on('click', '#details img', function(){
    $('#slider').show();
    const photoId = $(this).attr('id');
    getPhotoSlider(photoId);
  }) // #details img click handler

  $(document).on('click', '#right', function(){
    const photoId = $(this).parent().siblings('img').attr('id');
    const query = $('#searchText').val();
    getPhotoSliderList(query, photoId);
  }) // slider #right click handler

  $(document).on('keydown', function(ev){
    if(ev.key === 'Escape'){
      $('#slider').children('img').remove();
      $('#slider').hide();
    }
  }); // slider #esc keydown handler

}); // #(document).ready();