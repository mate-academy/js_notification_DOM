'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  message.setAttribute('class', `notification ${type}`);
  messageTitle.setAttribute('class', 'title');

  messageTitle.textContent = title;
  messageDescription.textContent = description;

  message.style.cssText = `position: fixed; top: ${posTop}px; right: ${posRight}px;`;

  messageDescription.innerHTML =
    'Message example. <br> Notification should contain title and description.';

  message.append(messageTitle, messageDescription);

  document.body.append(message);

  setTimeout(() => {
    message.remove();
  }, '2000');
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
