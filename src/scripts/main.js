'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('p');
  const titleInMessage = document.createElement('h2');

  message.innerHTML = description;
  message.className = `notification ${type}`;
  document.body.append(message);

  titleInMessage.innerHTML = title;
  titleInMessage.className = `title`;
  message.prepend(titleInMessage);

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;
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
