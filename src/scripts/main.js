'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');

  message.setAttribute('class', `notification ${type}`);
  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';

  h2.textContent = title;
  h2.setAttribute('class', 'title');
  p.textContent = description;

  message.prepend(h2);
  message.append(p);

  document.body.append(message);

  setTimeout(() => {
    message.remove();
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
