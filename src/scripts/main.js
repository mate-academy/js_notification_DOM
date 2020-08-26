'use strict';

const pushNotification = (top, right, title, description, type) => {
  document.body.insertAdjacentHTML('beforeend',
    `<div
    class="notification ${type}"
    style="position: absolute; top: '${top}px'; right: '${right}px'"
  >
  <h2 class="title">${title}</h2>
  <p>${description}</p>
  </div>
  `);

  setTimeout(() => document.querySelector('.notification').remove(), 2000);
};

pushNotification('10', '10', 'Title',
  `This is example of result.
  Notification should contain title and description`,
  'error');
