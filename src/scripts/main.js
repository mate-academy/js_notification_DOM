'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const descriptionTransfers = description.split('\n');
  const notificationBlock = `
    <div class="notification ${type}" style="
      position: absolute; 
      top: ${posTop}px; 
      right: ${posRight}px;
    ">
      <h2>${title}</h2>
      <p>${descriptionTransfers[0]} 
      \n ${descriptionTransfers[1]}</p>
      </br>
    </div>
  `;

  body.insertAdjacentHTML('afterend', notificationBlock);

  setTimeout(() => document.querySelector('.notification').remove(), 2000);
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
