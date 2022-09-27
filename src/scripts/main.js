'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.body;

  const message = `
    <div 
      class="notification ${type}" 
      style="top: ${posTop}px; right: ${posRight}px; box-sizing: content-box">
        <h2 class="title">${title}</h2>
        <p>${description.slice(0, 16)}<br>${description.slice(17, -1)}</p>
    </div>
  `;

  body.insertAdjacentHTML('afterbegin', message);
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
