'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageDiv = document.createElement('div');
  const titleMessage = document.createElement('h2');
  const paragraph = document.createElement('p');

  messageDiv.className = `notification ${type}`;
  messageDiv.style.cssText = `top: ${posTop}px; right: ${posRight}px; box-sizing: content-box`;
  messageDiv.append(titleMessage, paragraph);

  titleMessage.classList.add('title');
  titleMessage.append(title);

  paragraph.innerText = description;

  document.body.append(messageDiv);

  setTimeout(() => messageDiv.remove(), 2000);
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
