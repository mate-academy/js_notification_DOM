'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.querySelector('body');
  const block = `
    <div class="notification ${type}" 
      style="top: ${posTop}px; right="${posRight}px""
    >
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>
  `;

  body.insertAdjacentHTML('afterbegin', block);

  setTimeout(() => {
    document.querySelector(`.notification`).remove();
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
