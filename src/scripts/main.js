'use strict';

const body = document.querySelector('body');

const pushNotification = (top, right, title, description, type) => {
  body.insertAdjacentHTML('afterbegin', `
      <div
      class="notification ${type}"
      style="top: ${top}px; right: ${right}px">
           <h2 class="title">${title}</h2>
           <p>${description}</p>
      </div>
  `);

  setTimeout(() => document.querySelector(`.notification`).remove(), 2000);
};

pushNotification(10, 10, 'title', 'description', 'warning');
