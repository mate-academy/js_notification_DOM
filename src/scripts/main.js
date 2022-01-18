'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  document.body.appendChild(message);
  message.classList.add('notification');
  message.classList.add(type);

  message.insertAdjacentHTML('beforeend', `
    <h2 class='title'>${title}</h2> \
    <p class='description'>${description}</p>
  `);
  message.style.position = 'absolute';
  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';
  message.style.width = 'auto';

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
