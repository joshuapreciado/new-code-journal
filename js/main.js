
//Listen for input events & Change src attribute of img element
var photoholder = document.querySelector('.phototext');
var fakeimage = document.querySelector('.standard-image')
var formelement = document.querySelector('form');

photoholder.addEventListener('input', inputhandler);

function inputhandler(event) {
  if (falseyimage < event.target.value) {
    fakeimage.src = event.target.value;
  } else {
    fakeimage.src = 'images/placeholder-image-square.jpg';
  }
}

function falseyimage(url) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

var entryform = document.querySelector('#entry-form');
entryform.addEventListener('submit', function(event) {
  event.preventDefault();
  var inputvalues = {};
  inputvalues.titleText = formelement.elements.titleText.value;
  inputvalues.photoText = formelement.elements.photoText.value;
  inputvalues.textArea1 = formelement.elements.textArea1.value;

  inputvalues.entryId = data.nextEntryId;
  data.nextEntryId++;
  data.entries.unshift(inputvalues);
  fakeimage.src = 'images/placeholder-image-square.jpg';
  formelement.reset();
})
