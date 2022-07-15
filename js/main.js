
//Listen for input events & Change src attribute of img element
var photoholder = document.querySelector('.phototext');
var fakeimage = document.querySelector('.standard-image')
var formelement = document.querySelector('form');
var viewentry = document.querySelector('ul');

var headerOneEntries = document.querySelector('h1');

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
entryform.addEventListener('submit', function (event) {
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
  viewswap('entries');
})



function newentries(entry) {
  //List
  var entrylist = document.createElement('li');
  entrylist.setAttribute('class', 'row');

  //Image w classes
  var listimage = document.createElement('img');
  listimage.setAttribute('class', 'column-half borderradius margintop');
  listimage.setAttribute('src', entry.photoText);
  entrylist.appendChild(listimage);

  //Div w classes
  var entrylistdiv = document.createElement('div');
  entrylistdiv.setAttribute('class', 'column-half');
  entrylist.appendChild(entrylistdiv);
  //Heading w classes
  var entrylisthead = document.createElement('h1');
  entrylisthead.setAttribute('class', 'entryheading');
  entrylisthead.textContent = entry.titleText;
  entrylistdiv.appendChild(entrylisthead);

  //P w classes
  var entrylistnotes = document.createElement('p');
  entrylistnotes.setAttribute('class', 'marginleftlist')
  entrylistnotes.textContent = entry.textArea1;
  entrylistdiv.appendChild(entrylistnotes);

  return entrylist;
}

//DomContentLoaded event listener
document.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    var entrylist = newentries(data.entries[i])
    viewentry.appendChild(entrylist)
  }
  viewswap(data.view);
});

var entriesform = document.querySelector('[data-view="entries"]');
var entryformview = document.querySelector('[data-view="entry-form"]');
function viewswap(view) {
  if (view === 'entry-form') {
    entriesform.setAttribute('class', 'hidden');
    entryformview.setAttribute('class', 'viewable');
  } else if (view === 'entries') {
    entryformview.setAttribute('class', 'hidden');
    entriesform.setAttribute('class', 'viewable');
  }
}

var entrieslink = document.querySelector('.entrieslink');
entrieslink.addEventListener('click', function (event) {
  data.view = 'entries';
  viewswap('entries');
});

var newentry = document.querySelector('#newentry');
newentry.addEventListener('click', function (event) {
  data.view = 'entry-form';
  viewswap('entry-form');
});
