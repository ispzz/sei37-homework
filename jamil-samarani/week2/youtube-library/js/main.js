console.log(`Hello World!`);

// Step by Step:
//

// Create an array of every link on the page using document.querySelectorAll( CSS-SELECTOR-GOES-HERE )
const $allLinkTags = $(".span3 a");
// console.log(allLinks);
console.log( $allLinkTags );




// Iterate through the array. In each iteration of the loop:

// Find the current href using element.href (assuming your variable is called element), and store into a variable


for( let i = 0; i < links.length; i++ ){
  const currentLink = links[i];
  const videoURL = currentLink.href;
  const thumbnailURL = youtube.generateThumbnailUrl( videoURL );
  console.log(thumbnailURL);

  const imgTag = document.createElement(`img`);

imgTag.src = thumbnailURL;

currentLink.appendChild( imgTag );

};



// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// Create an IMG element using document.createElement(tagName)
// Set the "src" of the IMG element using newImage.src = 'something'
// Append the IMG to the link using element.appendChild(element)
