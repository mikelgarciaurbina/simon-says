
window.onload = function() {

  var playButton = document.getElementById('play-button');
  playButton.addEventListener('click', playGame, false);

  var simon = Object.create(Simon);

  function playGame() {
    var simonButtonsArray = document.getElementsByTagName('li');
    for(var i = 0; i < simonButtonsArray.length; i++) {
      simonButtonsArray[i].addEventListener('click', userPushButton, false);
      simonButtonsArray[i].addEventListener('mousedown', userMouseDown, false);
      simonButtonsArray[i].addEventListener('mouseup', userMouseUp, false);
    }
    simon.initialize(document.querySelector('input[name = "level"]:checked').value);
  }
  
  function userPushButton() {
    if(simon.playing) {
      simon.userClickBox(this.dataset.id);
    }
  }

  function userMouseDown() {
    if(simon.playing) this.style.opacity = "1";
  }

  function userMouseUp() {
    if(simon.playing) this.style.opacity = "0.55";
  }
}
