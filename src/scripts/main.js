'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.className = 'notification';
  message.className += ` ${type}`;

  message.insertAdjacentHTML('afterbegin', `
    <h2>${title}</h2>
    <p>${description}</p>
  `);

  const heading = message.querySelector('h2');

  heading.className = 'title';

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;
  message.style.width = '350px';

  document.body.append(message);

  setTimeout(() => message.remove(), 2000);
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
