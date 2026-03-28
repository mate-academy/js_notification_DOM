'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification');
  message.classList.add(type);

  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';

  const elementH2 = document.createElement('h2');
  const elementP = document.createElement('p');

  elementH2.classList.add('title');
  elementH2.textContent = title;
  elementP.textContent = description;
  message.append(elementH2, elementP);

  document.body.append(message);

  setTimeout(() => {
    message.style.display = 'none';
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
