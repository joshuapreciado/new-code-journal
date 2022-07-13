/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};


window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('data-local-storage', dataJSON);
});

var previousTodosJSON = localStorage.getItem('data-local-storage');
if (previousTodosJSON !== null) {
  data = JSON.parse(previousTodosJSON);
}
