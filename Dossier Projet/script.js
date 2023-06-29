// product page
const thumbnails = document.querySelectorAll('.image-thumbnail');
const mainImage = document.getElementById('product-image');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const newImageSrc = thumbnail.querySelector('img').getAttribute('src');
    mainImage.setAttribute('src', newImageSrc);
    
    // On enlève la classe "active" de toutes les miniatures
    thumbnails.forEach(thumb => {
      thumb.classList.remove('active');
    });
    
    // On ajoute la classe "active" à la miniature cliquée
    thumbnail.classList.add('active');
  });
});
//like
function changeImageLike(id) {
  var likeImage = document.getElementById('like'+id);
  var userNum = Math.floor((id - 1) / 3) + 1;
  var userId = id % 3 == 0 ? 3 : id % 3;
  var likeCount = document.getElementById('p'+userId+'u'+userNum).innerHTML;
  if (likeImage.src.match('like1')) {
    likeImage.src = 'asset/images/like2.png';
    likeCount++;
  } else {
    likeImage.src = 'asset/images/like1.png';
    likeCount--;
  }
  document.getElementById('p'+userId+'u'+userNum).innerHTML = likeCount;
}
// Notations
var gameplaySlider = document.getElementById("gameplayRange");
var gameplayOutput = document.getElementById("gameplayValue");
gameplayOutput.innerHTML = gameplaySlider.value;

gameplaySlider.oninput = function() {
  gameplayOutput.innerHTML = this.value;
}

var graphismesSlider = document.getElementById("graphismesRange");
var graphismesOutput = document.getElementById("graphismesValue");
graphismesOutput.innerHTML = graphismesSlider.value;

graphismesSlider.oninput = function() {
  graphismesOutput.innerHTML = this.value;
}

var originaliteSlider = document.getElementById("originaliteRange");
var originaliteOutput = document.getElementById("originaliteValue");
originaliteOutput.innerHTML = originaliteSlider.value;

originaliteSlider.oninput = function() {
  originaliteOutput.innerHTML = this.value;
}
var immersionSlider = document.getElementById("immersionRange");
var immersionOutput = document.getElementById("immersionValue");
immersionOutput.innerHTML = immersionSlider.value;

immersionSlider.oninput = function() {
  immersionOutput.innerHTML = this.value;
}
var hnSlider = document.getElementById("hnRange");
var hnOutput = document.getElementById("hnValue");
hnOutput.innerHTML = hnSlider.value;

hnSlider.oninput = function() {
  hnOutput.innerHTML = this.value;
}
var audioSlider = document.getElementById("audioRange");
var audioOutput = document.getElementById("audioValue");
audioOutput.innerHTML = audioSlider.value;

audioSlider.oninput = function() {
  audioOutput.innerHTML = this.value;
}
var rythmeSlider = document.getElementById("rythmeRange");
var rythmeOutput = document.getElementById("rythmeValue");
rythmeOutput.innerHTML = rythmeSlider.value;

rythmeSlider.oninput = function() {
  rythmeOutput.innerHTML = this.value;
}
var vieSlider = document.getElementById("vieRange");
var vieOutput = document.getElementById("vieValue");
vieOutput.innerHTML = vieSlider.value;

vieSlider.oninput = function() {
  vieOutput.innerHTML = this.value;
}
var ambianceSlider = document.getElementById("ambianceRange");
var ambianceOutput = document.getElementById("ambianceValue");
ambianceOutput.innerHTML = ambianceSlider.value;

ambianceSlider.oninput = function() {
  ambianceOutput.innerHTML = this.value;
}
var accesSlider = document.getElementById("accesRange");
var accesOutput = document.getElementById("accesValue");
accesOutput.innerHTML = accesSlider.value;

accesSlider.oninput = function() {
  accesOutput.innerHTML = this.value;
}
