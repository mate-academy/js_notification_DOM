'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification', type);

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

  const h2 = document.createElement('h2');
  const info = document.createElement('p');

  h2.className = title;
  info.className = ['description'];

  h2.innerText = `Title of ${type} message`;
  info.innerText = 'Message';

  message.append(h2);
  message.append(info);

  document.body.append(message);

  setTimeout(() => {
    message.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
