'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const massage = document.createElement('div');

  massage.className = 'notification' + ' ' + type;
  massage.style.top = posTop + 'px';
  massage.style.right = posRight + 'px';

  massage.innerHTML = `
  <h2 class="title">${title}</h2>
  <p>${description}</p>
  `;

  body.append(massage);

  setTimeout(() => {
    massage.remove();
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
