'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const logo = document.body.querySelector('.logo');

  logo.insertAdjacentHTML('afterend',
    `<div class="notification ${type}">`
    + `<h2 class="title">${title}</h2>`
    + `<p>${description}</p>`
    + '</div>');

  const div = document.body.querySelector(`.${type}`);

  div.style.marginTop = `${posTop}px`;
  div.style.marginRight = `${posRight}px`;

  setTimeout(() => div.remove(), 2000);
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
