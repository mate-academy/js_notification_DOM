'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const page = document.querySelector('body');

  const desc = description.split('.');

  page.insertAdjacentHTML('afterbegin', `
  <div
    class = "notification ${type}";
    style = "top: ${posTop}px; right: ${posRight}px; width: 315px";
  >
    <h2 class = "title" style = "font-size: 16px">${title}</h2>
    <p>${desc[0]}. </br> ${desc[1]}.</p>
  </div>
`);

  const message = document.querySelector(`.${type}`);

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
