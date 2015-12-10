var KeyActions = require('../actions/KeyActions.js');

var Track = function (attr) {
  this.name = attr.name;
  this.roll = attr.roll;
  this.interval = null;
}

Track.prototype.startRecording = function () {
  this.roll = [];
  this.currTime = Date.now();
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

Track.prototype.addNotes = function (notes) {
  var recipe = {
    notes: notes,
    timeSlice: Date.now() - this.currTime
  }
  this.roll.push(recipe);
};

Track.prototype.play = function () {
  // debugger;
  if (this.interval) {
    return;
  } else {
    // debugger;
    var playbackStartTime = Date.now();
    var currentNote = 0;
    var callback = function () {
      // debugger;
      if (this.roll[currentNote]) {
        // debugger;
        var elapsedTime = Date.now() - playbackStartTime;
        if (elapsedTime > this.roll[currentNote].timeSlice) {
          // KeyActions.keyUnplayed();
          KeyActions.keyPlayed(this.roll[currentNote].notes);
          currentNote += 1;
        } else {
          // KeyActions.keyPlayed(this.roll[currentNote].notes);
        }
      } else {
        clearInterval(intervalId);
        this.interval = null;
      }
    }.bind(this);
    var intervalId = setInterval(callback, 10);
    this.interval = intervalId;

  }
}

module.exports = Track;
