$(document).ready(function() {
  const hiddenString = $('.pride').text();
  const hiddenArray = hiddenString.split(' ');
  const randomValue = function(maxNum) {
    return Math.floor(Math.random() * maxNum)
  }

  const randomWord = function() {
    const randomArrayIndex = Math.floor(Math.random() * hiddenArray.length);
    const xPos = Math.floor(Math.random() * window.innerWidth);
    const yPos = Math.floor(Math.random() * window.innerHeight);
    let word = hiddenArray[randomArrayIndex];
    let newDiv = $('<div></div>')
    let newElement = $(newDiv).appendTo($('body')).fadeIn(100, 'linear').fadeOut(1500, function() {$(this).remove();});
    const randomColour = `rgb(${randomValue(255)}, ${randomValue(255)}, ${randomValue(255)})`
    newElement.text(word).css({'left': xPos, 'top': yPos, 'position': 'absolute', 'color': randomColour});
  }


setInterval(randomWord, 100);
})//on ready
