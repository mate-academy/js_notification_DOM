'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const popup = document.createElement('div');
  const h2 = document.createElement('h2');
  const text = document.createElement('p');

  popup.classList.add('notification', type);
  h2.classList.add('title');
  h2.textContent = title;
  text.textContent = description;
  popup.append(h2, text);
  popup.style.top = posTop + 'px';
  popup.style.right = posRight + 'px';
  document.body.append(popup);

  setTimeout(() => (popup.style.display = 'none'), 2000);
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
