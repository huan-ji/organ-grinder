var KeyActions = require('../actions/KeyActions.js')

var Mapping = {
  81: 'C5',
  87: 'C#5/Db5',
  69: 'D5',
  82: 'D#5/Eb5',
  84: 'E5',
  89: 'F5',
  85: 'F#5/Gb5',
  73: 'G5',
  79: 'G#5/Ab5',
  80: 'A5',
  219: 'A#5/Bb5',
  221: 'B5'
};

$(document).keydown(function(e) {
  KeyActions.keyPressed(Mapping[e.which])
})

$(document).keyup(function(e) {
  KeyActions.keyUnpressed(Mapping[e.which])
})
