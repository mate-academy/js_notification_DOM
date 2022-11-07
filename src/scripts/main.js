'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const element = document.createElement('div');

  element.classList.add('notification', type);
  element.style.top = posTop + 'px';
  element.style.right = posRight + 'px';

  element.insertAdjacentHTML('afterbegin', `
    <h2>${title}</h2>
    <p>${description}</p>
  `);

  const body = document.querySelector('body');

  body.append(element);
  setTimeout(() => element.remove(), 2000);
};

pushNotification(10, 10, 'Title of Success',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
