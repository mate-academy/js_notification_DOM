'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const asd = description.split('\n');
  const notificationBlock = `
    <div class="notification ${type}" style="
      position: absolute; 
      top: ${posTop}px; 
      right: ${posRight}px;
    ">
      <h2>${title}</h2>
      <p>${asd[0]}
      <br>${asd[1]}
      </br>
    </div>
  `;

  body.insertAdjacentHTML('afterend', notificationBlock);

  setTimeout(() => [...document.querySelectorAll('.notification')]
    .forEach(elem => elem.remove()),
  2000);
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
