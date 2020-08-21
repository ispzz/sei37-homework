const FLICKR_BASE_URL = 'https://api.flickr.com/services/rest';
const FLICKR_API_KEY = '2f5ac274ecfac5a455f38745704ad084';
let pageNumber = 1;

$(document).ready(function(){
    console.log('Flickr!')

    $('#searchText').focus(); // keyboard focus in form.

    $('#searchForm').on('submit', function(event){
       const query = $('#searchText').val();
        getSearchResults( query );
       event.preventDefault(); //stop form from submitting
    });

    $('#nextPage').on('click', function(){
        console.log('Next Page clicked');
        pageNumber ++;
        const query = $('#searchText').val();
        getSearchResults( query );
    })

    $('#previousPage').on('click', function(){
        console.log('previousPage clicked');
        pageNumber --;
        const query = $('#searchText').val();
        getSearchResults( query );
    });

    $(document).on('click', 'img', function(){
        const query = $('img').attr('id');
        console.log('img clicked.');
        getPhotoDetails( query )
    });
        
}); // $(document).ready();

const getSearchResults = (queryText) => {
    console.log('getSearchResults():', queryText);

    //Perform AJAX request to Flickr API
    $.getJSON( FLICKR_BASE_URL, {
        method: 'flickr.photos.search',
        api_key: FLICKR_API_KEY,
        text: queryText,
        format: 'json',
        nojsoncallback: 1,
        page: pageNumber
    })

    // .done( data => displaySearchResults(data.photos.photo) )
    .done(function (data ) {
        displaySearchResults( data.photos );
    }) 
    .fail( err => console.log(err) );

}; // getSearchResults()

const displaySearchResults = (results) => {
    console.log('displaySearchResults():', results);

    // save a reference to the results div DOM node so we're not querying the DOm in each iteration of the loop.
    const $results = $('#results');
    $results.empty();

    //display each result on the page
    results.photo.forEach( photo => {
        const thumbnailURL = generatePhotoURL( photo, 's' );
       console.log( thumbnailURL );
       $('#results').append(`<img src="${ thumbnailURL }" id="${ photo.id }" >`);

    });
    
}; //displaySearchResults()$

const getPhotoDetails = (queryText) => {

        $.getJSON( FLICKR_BASE_URL, {
            method: 'flickr.photos.search',
            api_key: FLICKR_API_KEY,
            text: queryText,
            format: 'json',
            nojsoncallback: 1,
            page: pageNumber
        })
    
        .done(function (data ) {
            displayPhotoDetails( data.photo );
        }) 
        .fail( err => console.log(err) );
         
}

const displayPhotoDetails = (results) => {

    results.photo.forEach( photo => {
        const thumbnailURL = generatePhotoURL( photo, 's' );
       console.log( thumbnailURL );
       $('#results').append(`<img src="${ thumbnailURL }">`);

       $('#details h3').html( data.original_title );
       $('#details h5').html( data.tagline);

    });

}


const generatePhotoURL = (photo, size='q') => {
    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
}

