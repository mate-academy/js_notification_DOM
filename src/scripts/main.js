'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification');
  message.classList.add(type);

  const titleEl = document.createElement('h2');

  titleEl.textContent = title;
  titleEl.classList.add('title');

  message.appendChild(titleEl);

  const descEl = document.createElement('p');

  descEl.textContent = description;
  message.appendChild(descEl);

  // message.style.position = 'absolute';
  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';

  document.body.appendChild(message);

  setTimeout(() => (message.style.visibility = 'hidden'), 2000);
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
