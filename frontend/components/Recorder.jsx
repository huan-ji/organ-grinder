var React = require('react');
var KeyStore = require('../stores/KeyStore.js');
var KeyActions = require('../actions/KeyActions.js');
var Note = require('../util/Note.js');
var TONES = require('../constants/Tone.js');
var Track = require('../util/Track.js');

var Recorder = React.createClass({
  getInitialState: function () {
    return {
      isRecording: false,
      track: new Track({
        name:"test track",
        roll:[]
      })
    }
  },

  componentDidMount: function () {
    KeyStore.addListener(this._keysChanged);
  },

  componentWillUnmount: function () {
    KeyStore.removeListeners(this._keysChanged);
  },

  _keysChanged: function () {
    if (this.state.isRecording) {
      this.state.track.addNotes(KeyStore.all());
    };
  },

  startRecording: function () {
    this.state.track.startRecording();
    this.setState({isRecording: true})
  },

  stopRecording: function () {
    this.state.track.stopRecording();
    this.setState({isRecording: false})
  },

  playTrack: function (e) {
    // debugger;
    this.state.track.play();
  },

  render: function () {
    var recordText;
    var recordButton;
    if (this.state.isRecording) {
      recordText = "Stop";
    } else {
      recordText = "Record";
    }

    if (this.state.isRecording) {
      recordButton = this.stopRecording;
    } else {
      recordButton = this.startRecording;
    }

    return (
      <div>
        <button onClick={recordButton}>{recordText}</button>
        <button onClick={this.playTrack}>Play</button>
      </div>
    );
  }
});

module.exports = Recorder;
