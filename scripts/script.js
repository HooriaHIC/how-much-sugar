
// HTML Nodes
const imageServerEndpoint = "./assets/beverages/";
const cubeSize = 4; // cube size is 4 grams
const cubeCounterElement = document.querySelector('.cube-number');
let mainimage = document.getElementById('main-image');
const sugarLevel = {
  cubeCount: 0,
  progress: 0,
  currentDrink: '',
  totalValue: 0,
  filled: 0
};

const beverages = [
  {
    "name": "coke",
    "sugar": 39,
    image: new Image()
  },
  {
    "name": "pepsi",
    "sugar": 41,
    image: new Image()
  },
  {
    "name": "mountain_dew",
    "sugar": 46,
    image: new Image()
  },
  {
    "name": "sprite",
    "sugar": 38,
    image: new Image()
  },
  {
    "name": "7_up",
    "sugar": 38,
    image: new Image()
  },
  {
    "name": "fanta",
    "sugar": 44,
    image: new Image()
  },
  {
    "name": "red_bull",
    "sugar": 39,
    image: new Image()
  },
  {
    "name": "dr_pepper",
    "sugar": 40,
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
  cubeCounterElement.textContent = 0;
  const droppableArea = document.querySelector('.droppable-area-text');
  droppableArea.addEventListener("dragenter", handleDragEnter);
  droppableArea.addEventListener("dragover", handleDragOver);
  droppableArea.addEventListener("dragleave", handleDragLeave);
  droppableArea.addEventListener("drop", handleDragDrop);

  updateMain('sprite');
};

function handleDragLeave(e) {
  e.target.style.transform = "scale(1)";
}
function handleDragOver(e) {
  e.preventDefault();
}

function handleDragEnter(e) {
  e.target.style.transitionDuration = "300ms";
  e.target.style.transform = "scale(1.2)";
}

function handleDragDrop(e) {
  event.preventDefault();
  if (e.target.className === 'droppable-area-text') {
    incrementSugar();
    e.target.style.transform = "scale(1)";
  }
}

function incrementSugar() {
  if (sugarLevel.filled < sugarLevel.totalValue) {
    sugarLevel.cubeCount = sugarLevel.cubeCount + 1;
    sugarLevel.filled = sugarLevel.filled + 4;
    cubeCounterElement.textContent = sugarLevel.cubeCount;
    sugarLevel.progress = ((sugarLevel.filled / sugarLevel.totalValue) * 100 >= 100) ? 100 : (sugarLevel.filled / sugarLevel.totalValue) * 100;
    const jQueryMainImage = $("#main-image");
    jQueryMainImage.loadgo();
    jQueryMainImage.loadgo('options', { direction: 'bt' });
    jQueryMainImage.loadgo('setprogress', sugarLevel.progress);
    console.log(sugarLevel);
  }
}

function onBeverageSelectClick(e) {
  updateMain(this.dataset.beverage);
}

function cacheImages() {
  beverages.forEach(beverage => {
    beverage.image.src = `${imageServerEndpoint}${beverage.name}.png`;
  });
}

function updateMain(newBeverageName) {
  const newMainBeverage = beverages.find(beverage => beverage.name === newBeverageName);
  mainimage.src = newMainBeverage.image.src;

  sugarLevel.cubeCount = 0;
  sugarLevel.progress = 0;
  sugarLevel.totalValue = newMainBeverage.sugar;
  sugarLevel.filled = 0;
  sugarLevel.currentDrink = newMainBeverage.name;
  cubeCounterElement.textContent = sugarLevel.cubeCount;
  console.log(sugarLevel);

  const jQueryMainImage = $("#main-image");
  jQueryMainImage.loadgo();
  jQueryMainImage.loadgo('options', { direction: 'bt' });
  jQueryMainImage.loadgo('setprogress', 0);
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

