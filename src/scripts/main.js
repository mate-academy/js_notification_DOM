'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.body;

  body.insertAdjacentHTML('afterbegin', `
    <div
      class="notification ${type}"
      style="position: absolute; top: ${posTop}; right: ${posRight}">
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>
  `);

  const notification = document.querySelector('.notification');

  setTimeout(() => notification.add(), 2000);
};

pushNotification('10px', '10px', 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification('165px', '10px', 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification('290px', '10px', 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
