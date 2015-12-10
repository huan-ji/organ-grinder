var React = require('react');
var ReactDOM = require('react-dom');
var Organ = require('./components/Organ.jsx');
var Key = require('./components/Key.jsx');

require("./util/KeyListener.js");

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Organ/>, document.getElementById('content'));
});
