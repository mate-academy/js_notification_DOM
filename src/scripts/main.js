'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification', `${type}`);
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  const h2 = document.createElement('h2');

  h2.classList.add('title');
  h2.textContent = title;
  message.append(h2);

  const p = document.createElement('p');

  p.textContent = description;
  message.append(p);

  document.body.append(message);

  setTimeout(() => {
    message.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(165, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
