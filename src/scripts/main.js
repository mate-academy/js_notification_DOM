'use strict';

const pushNotification = (top, right, title, description, type) => {
  document.body.insertAdjacentHTML('beforeend',
    `<div
      class="notification ${type}"
      style="position: absolute; top: ${top}; right: ${right}"
    >

      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>`);
};

setTimeout(() => document.querySelector('div').remove(), 2000);

pushNotification('20px', '20px', 'Hi!', 'Have a nice day:)', 'success');
