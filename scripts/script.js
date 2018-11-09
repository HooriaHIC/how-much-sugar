
// HTML Nodes
const imageServerEndpoint = "./assets/beverages/";
const cubeSize = 4; // cube size is 4 grams
const beverages = [
  {
    "name": "coke",
    "sugar": 39,
    image: new Image()
  },
  {
    "name": "pepsi",
    "suger": 41,
    image: new Image()
  },
  {
    "name": "mountain_dew",
    "suger": 46,
    image: new Image()
  },
  {
    "name": "sprite",
    "suger": 38,
    image: new Image()
  },
  {
    "name": "7_up",
    "suger": 38,
    image: new Image()
  },
  {
    "name": "fanta",
    "suger": 44,
    image: new Image()
  },
  {
    "name": "red_bull",
    "suger": 39,
    image: new Image()
  },
  {
    "name": "dr_pepper",
    "suger": 40,
    image: new Image()
  },
];

$("document").ready(start);

function start() {
  const allSelectButtons = document.querySelectorAll('.beverage-item-button');
  cacheImages();
  allSelectButtons.forEach(button => {
    button.addEventListener("click", onBeverageSelectClick);
  })
};

// WAIT
function onBeverageSelectClick(e) {
  updateMain(this.dataset.beverage);
}

function cacheImages() {
  beverages.forEach(beverage => {
    beverage.image.src = `${imageServerEndpoint}${beverage.name}.png`;
    console.log(`${beverage.name}.png`);
  });
}

function updateMain(newBeverageName) {
  const newMainBeverage = beverages.find(beverage => beverage.name === newBeverageName);
  console.log(newMainBeverage.image);
}
/*

range.change((e) => {
  incImageFill(e.target.value);
});

range.mousemove((e) => {
  (e.which == 1) ? incImageFill(e.target.value) : '';
});

function reset() {
  currentImage.loadgo();
  currentImage.loadgo('options', { direction: 'bt' });
  currentImage.loadgo('setprogress', 0);
};

function incImageFill(value) {
  currentImage.loadgo('setprogress', value);
};
*/