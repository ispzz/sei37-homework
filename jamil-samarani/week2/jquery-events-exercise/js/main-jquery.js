console.log("jQuery solution");
// Find the current href using element.href (assuming your variable is called element), and store into a variable

//Get all the ,a. tags that are on the page
const $allLinkTags = $(".span3 a");
  console.log( $allLinkTags );

$allLinkTags.each( function(){
  console.log( this ); //'this' contains the current element as a vanilla DOM node
  $( this ).html("CHANGED");   // turn 'this' into a jQuery object!

  const $currentLink = $(this); // make a convenient variable

  const linkHref = $currentLink.attr('href');   // this.linkHref
  // console.log(linkHref)

  const thumbnailURL = youtube.generateThumbnailUrl( linkHref );
  console.log("thumbnailURL:", thumbnailURL)


  // Make a new image tag, set the src attribute to be the thumbnail URL
  // and append the image to the end of the link tag
  const $imgTag = $('<img>');
  $imgTag.attr('src', thumbnailURL);
  $currentLink.append( $imgTag );

});



// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// Create an IMG element using document.createElement(tagName)
// Set the "src" of the IMG element using newImage.src = 'something'
// Append the IMG to the link using element.appendChild(element)
