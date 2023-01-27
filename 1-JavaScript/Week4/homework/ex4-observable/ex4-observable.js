'use strict';

function createObservable() {
  const subscribers = [];
  return {
    subscribe: function (subscriber) {
      subscribers.push(subscriber);
    },
    notify: function (message) {
      subscribers.forEach((subscriber) => subscriber(message));
    },
  };
}

// ! Do not change or remove the code below
module.exports = createObservable;
