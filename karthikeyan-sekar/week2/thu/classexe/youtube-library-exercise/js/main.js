//var vid_thumbnail = youtube.generateThumbnailUrl('http://www.youtube.com/watch?v=epUk3T2Kfno');

const sample = document.querySelectorAll('.span3 li a');

for (var i = 0; i < sample.length; i++) {
  let sam = sample[i].href;
let you = youtube.generateThumbnailUrl(sam);
var ta = document.createElement('img');
ta.src = you;
sample[i].appendChild(ta);

}
