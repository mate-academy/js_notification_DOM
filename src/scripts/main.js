'use strict';

const pushNotification = (top, right, title, description, type) => {
  const body = document.body;

  body.insertAdjacentHTML('afterbegin', `
    <div class="notification ${type}" style=top: ${top}px; left: ${right}px;>
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>
  `);

  setTimeout(() => document.querySelector('div').remove(), 2000);
};

pushNotification(10, 10, 'Notification', 'You have one message', 'success');
