'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  let element;

  setTimeout(() => {
    element = document.createElement('div');
  }, 2 * 1000);

  clearTimeout(element);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
