'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const bodyElem = document.querySelector('body');
  const message = document.createElement('div');

  message.classList.add('notification');

  message.style.right = posRight + 'px';
  message.style.top = posTop + 'px';

  const messTitle = document.createElement('h2');

  messTitle.classList.add('title');
  messTitle.innerHTML = title;

  const messText = document.createElement('p');

  messText.innerHTML = description;

  if (type === 'warning') {
    message.classList.add('warning');
  }

  if (type === 'success') {
    message.classList.add('success');
  }

  if (type === 'error') {
    message.classList.add('error');
  }

  bodyElem.append(message);
  message.append(messTitle);
  message.append(messText);

  setTimeout(() => message.remove(), 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example. \n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example. \n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example. \n ' + 'Notification should contain title and description.',
  'warning',
);
