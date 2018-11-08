 
// HTML Nodes
const currentImage = $("#current-beverage-image");
const range = $("#sugar-range");

$("document").ready(start);

range.change((e) => {
  incImageFill(e.target.value);
})
range.mousemove((e) => {
  (e.which == 1) ? incImageFill(e.target.value): '';
})

function reset() {
  currentImage.loadgo();
  currentImage.loadgo('options', { direction: 'bt'});
  currentImage.loadgo('setprogress', 0);
}

function incImageFill(value) {
  currentImage.loadgo('setprogress', value);
}

function start() {
  reset();
}
