'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');

  body.innerHTML += `
    <div class = 'notification ${type}'>
      <h2 class = 'title'>${title}</h2>

      <p>${description}</p>
    </div>
  `;

  const block = document.querySelector(`.${type}`);

  block.style.top = posTop + 'px';
  block.style.rigth = posRight + 'px';

  setTimeout(() => document.querySelector('div').remove(), 2000);
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
