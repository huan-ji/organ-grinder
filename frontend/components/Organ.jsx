var React = require('react');
var Key = require('./Key.jsx');
var Tone = require('../constants/Tone.js')
var Recorder = require('./Recorder.jsx')

var Organ = React.createClass({
  render: function () {
    var keys = [];
    for (var note in Tone) {
      keys.push(<Key noteName={note}/>);
    };
    return (
      <div>
        {keys}
        <Recorder/>
      </div>
    );
  }
});

module.exports = Organ;
