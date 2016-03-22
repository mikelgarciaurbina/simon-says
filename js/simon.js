var Simon = {
  sequence: [],
  userSequence: [],
  round: 0,
  playing: false,
  parts: 6,

  initialize: function(circleParts) {
    this.sequence = [];
    this.userSequence = [];
    this.parts = parseInt(circleParts);
    this.changeMessage("");
    this.round = 1;
    this.playing = false;
    this.changeRoundText();
    this.initializeSequence();
    this.startAnimation();
  },

  initializeSequence: function() {
    for(var i = 0; i < 3; i++) {
      this.addSequence();
    }
  },

  addSequence: function() {
    this.sequence.push(this.randomNum());
  },

  randomNum: function() {
    return Math.floor((Math.random()*this.parts));
  },

  newRound: function() {
    this.round += 1;
    this.changeRoundText();
    this.addSequence();
    this.startAnimation();
  },

  changeRoundText: function() {
    var roundText = document.getElementById('round-number');
    roundText.innerText = this.round;
  },

  startAnimation: function() {
    var oThis = this;
    var i = 0;
    var interval = setInterval(function() {
      oThis.lightBox(oThis.sequence[i]);
      i++;
      if (i === oThis.sequence.length) {
        clearInterval(interval);
        oThis.playing = true;
      }
    }, 1000);
  },

  lightBox: function(boxNum) {
    var box = document.getElementsByTagName('li')[boxNum];
    box.style.opacity = '1';
    setTimeout(function() {
      box.style.opacity = '0.55';
    }, 800);
  },

  userClickBox: function(boxNum) {
    this.userSequence.push(parseInt(boxNum));
    var lastNum = this.userSequence.length - 1;
    if(this.userSequence[lastNum] === this.sequence[lastNum]) {
      this.checkUserWin();
    } else {
      this.playing = false;
      this.changeMessage("Game Over");
    }
  },

  checkUserWin: function() {
    if(this.userSequence.length === this.sequence.length) {
      this.playing = false;
      this.userSequence = [];
      this.newRound();
    }
  },

  changeMessage: function(text) {
    var message = document.getElementById('message');
    message.innerText = text;
  }
}