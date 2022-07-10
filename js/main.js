
//Listen for input events & Change src attribute of img element
var photoholder = document.querySelector('.phototext');
var fakeimage = document.querySelector('.standardimage')
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

//Listen for submit events on journal ent.form and
// Put the form's input values into a new object. CHECK
// Add the nextEntryId to the object. CHECK
// Increment the nextEntryId on the data model. CHECK
// Prepend the new object to the entries in the data model. CHECK
// Reset the image preview's `src' attribute.
// Reset the form inputs.
var entryform = document.querySelector('#entry-form');
entryform.addEventListener('submit', function(event) {
  event.preventDefault();
  var inputvalues = {};
  inputvalues.titletext = formelement.elements.titletext.value;
  inputvalues.phototext = formelement.elements.phototext.value;
  inputvalues.textarea1 = formelement.elements.textarea1.value;

  inputvalues.id = data.nextEntryId;
  data.nextEntryId++;
  data.prepend(inputvalues);
  fakeimage.src = 'images/placeholder-image-square.jpg';
  formelement.reset();
})
