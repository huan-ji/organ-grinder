var AppDispatcher = require('../dispatcher/Dispatcher.js');

var KeyActions = {
  keyPressed: function (note) {
    // console.log("down");
    AppDispatcher.dispatch({
      actionType: "STORE_NOTES",
      noteName: note
    });
  },

  keyUnpressed: function (note) {
    // console.log("up");
    AppDispatcher.dispatch({
      actionType: "REMOVE_NOTES",
      noteName: note
    });
  },

  keyPlayed: function (notes) {
    AppDispatcher.dispatch({
      actionType: "STORE_NOTES2",
      noteName: notes
    });
  },

  keyUnplayed: function () {
    // debugger;
    AppDispatcher.dispatch({
      actionType: "REMOVE_NOTES2",
      noteName: []
    });

  }
}

module.exports = KeyActions;
