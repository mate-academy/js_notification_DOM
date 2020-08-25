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

setTimeout(() => {
  pushNotification('20px', '20px', 'Hi!', 'Have a nice day:)', 'success');
}, 2000);
