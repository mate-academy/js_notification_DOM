'use strict';

const pushNotification = (top, right, title, description, type) => {
  document.body.insertAdjacentHTML('afterbegin', `
    <div class="notification ${type}" style=top: ${top}px; rigth: ${right}px">
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>
  `);

  setTimeout(() => document.querySelector('.notification').remove(), 2000);
};

pushNotification(20, 50, 'Title', 'Lorem ipsum dolor', 'warning');
