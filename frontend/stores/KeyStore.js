var React = require('react');
var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher.js');
var Key = require('../components/Key.jsx');


var KeyStore = new Store(AppDispatcher);

var _notes = [];

KeyStore.all = function () {
  return _notes.slice();
};

KeyStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "STORE_NOTES":
      storeNote(payload.noteName);
      KeyStore.__emitChange();
      // console.log(_notes);
      break;
    case "REMOVE_NOTES":
      removeNote(payload.noteName);
      KeyStore.__emitChange();
      // console.log(_notes);
      break;
    case "STORE_NOTES2":
      storeNote2(payload.noteName);
      KeyStore.__emitChange();
      // console.log(_notes);
      break;
    case "REMOVE_NOTES2":
      removeNote2(payload.noteName);
      // console.log(_notes);
      break;

  }
};

var storeNote = function (note) {
  if (_notes.indexOf(note) === -1) {
    _notes.push(note);

  }
};

var removeNote = function (note) {
  var noteIdx = _notes.indexOf(note);
  _notes.splice(noteIdx, 1);
};

var storeNote2 = function (notes) {
  // debugger;
  _notes = notes;
};

var removeNote2 = function (notes) {
  // debugger;
  _notes = []
};

module.exports = KeyStore;
