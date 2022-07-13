
//Listen for input events & Change src attribute of img element
var photoholder = document.querySelector('.phototext');
var fakeimage = document.querySelector('.standard-image')
var formelement = document.querySelector('form');
var viewentry = document.querySelector('.ul');
var entriesform = document.querySelector('[data-view="entries"]');
var entryformview = document.querySelector('[data-view="entry-form"]');

photoholder.addEventListener('input', inputhandler);

function inputhandler(event) {
  if (falseyimage(event.target.value)) {
    fakeimage.src = event.target.value;
  } else {
    fakeimage.src = 'images/placeholder-image-square.jpg';
  }
}

function falseyimage(url) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

var entryform = document.querySelector('#entry-form');
entryform.addEventListener('submit', function entrynew(event) {
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

  entryformview.className = 'hidden';

  for (var i = 0; i < data.entries.length; i++) {
    var testentry = data.entries[i];
    viewentry.appendChild(testentry);
  }

})
//Add some dummy journal entries to the unordered- Y
//list in the HTML and style them to match the wireframe. Y
// Check that the entries list looks good on both mobile and desktop screens. Y
// Define a function that takes a single journal entry -
//object and returns a DOM tree that matches one of the example entries in the HTML.
// Use a loop to create a DOM tree for each journal entry in the data model -
//and append it to the page when the 'DOMContentLoaded' event is fired.
// Remove the example HTML entries once the user's entries are successfully being appended to the DOM on page load.
// Add a navigation item to the navbar for Entries.
// Add an anchor to the entries view that shows the entry form.
// Ensure that submitoting a new journal entry also creates a new DOM tree for it and adds it to the page.
// Ensure that submitting a new jurnal entry automatically shows the 'entries' view without reloading the page.

/**<div data-view="entries" id="entries-form" class="entriesformclass ">
  < div class="container" >
    <div class="row justifyconspaceb">
      <h1>Entries</h1>
      <a id="newentry" href="#entry-form">NEW</a>
    </div>
    <ul id="unordered-list" class="unorderedentries"></ul>
  </div>
**/
