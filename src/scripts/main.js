'use strict';

const pushNotification = (top, right, title, description, type) => {
  const body = document.body;

  body.insertAdjacentHTML('afterbegin', `
    <div
      class="notification ${type}"
      style="position: absolute; top: ${top}; right: ${right}">
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>
  `);

  const notification = document.querySelector('.notification');

  setTimeout(() => notification.remove(), 2000);
};

pushNotification('10px', '10px',
  'qweqweqweqwe', 'qweqweqweqweqweqweqweqwe', 'success');
