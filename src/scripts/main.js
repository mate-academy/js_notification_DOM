'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const heading = document.createElement('h2');

  heading.classList.add('title');
  heading.textContent = title;

  const text = document.createElement('p');

  text.textContent = description;

  const success = document.createElement('div');

  success.classList.add('notification', type);
  success.style.top = posTop + 'px';
  success.style.right = posRight + 'px';
  success.append(heading);
  success.append(text);
  document.body.prepend(success);

  setTimeout(() => {
    success.style.display = 'none';
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
