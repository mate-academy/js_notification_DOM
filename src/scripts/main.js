'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.body;
  const orange = document.createElement('div');

  orange.style.top = posTop + 'px';
  orange.style.right = posRight + 'px';

  const orangeTitle = document.createElement('h2');

  orangeTitle.classList.add('title');

  orangeTitle.textContent = title;

  const orangeMessage = document.createElement('p');

  orangeMessage.textContent = description;

  orange.appendChild(orangeTitle);
  orange.appendChild(orangeMessage);

  orange.classList.add(type);
  orange.classList.add('notification');
  body.appendChild(orange);

  setTimeout(() => {
    orange.style.display = 'none';
  }, 2000);
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
