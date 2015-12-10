var React = require('react');
var KeyStore = require('../stores/KeyStore.js');
var KeyActions = require('../actions/KeyActions.js');
var Note = require('../util/Note.js');
var TONES = require('../constants/Tone.js');

var Key = React.createClass({
  getInitialState: function () {
    return {
      start: false,
      note: ""
    };
  },

  componentDidMount: function () {
    KeyStore.addListener(this._keysChanged);
    this.setState({ note: new Note(TONES[this.props.noteName]) });
  },

  componentWillUnmount: function () {
    KeyStore.removeListeners(this._keysChanged);
  },

  _keysChanged: function () {

    var keys = KeyStore.all();
      // console.log(keys);
    if (keys.indexOf(this.props.noteName) !== -1) {
      this.setState({ start: true })
    } else {
      this.setState({ start: false })
    }
  },

  render: function () {
    if (this.state.start) {
      // debugger;
      this.state.note.start();
    } else {
      // debugger;
      if (this.state.note !== "") {
        this.state.note.stop();
      }
    }
    return (
      <div></div>
    );
  }
});

module.exports = Key;
