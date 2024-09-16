'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const div = document.createElement('div');
  const titleMessage = document.createElement('h2');
  const message = document.createElement('p');

  titleMessage.innerText = title;
  titleMessage.className = 'title';
  message.innerText = description;
  div.classList.add('notification', `${type}`);
  div.append(titleMessage, message);
  div.style.top = `${posTop}px`;
  div.style.right = `${posRight}px`;
  document.body.append(div);
  setTimeout(() => div.remove(), 2000);
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
