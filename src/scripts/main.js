'use strict';

// const pushNotification = (top, right, title, description, type) => {
//   // write code here
// };

const pushNotification = (top, right, title, description, type) => {
  document.body.insertAdjacentHTML('afterbegin', `
    <div
      class="notification ${type}"
      style="position: absolute; top: ${top}; right: ${right}"
    >
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>
  `);

  setTimeout(() => document.querySelector('.notification').remove(), 2000);
};

setTimeout(() => {
  pushNotification(
    '50px',
    '50px',
    'ВНИМАНИЕ!!!',
    'Спасибо за внимание!',
    'warning'
  );
}, 1000);
