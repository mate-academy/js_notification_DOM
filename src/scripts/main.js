'use strict';

const pushNotification = (top, right, title, description, type) => {
  document.body.insertAdjacentHTML(`beforeend`,
    `<div
      class = 'notification ${type}'
      style = 'position: absolute; top: ${top}; right: ${right}'
    >
      <h2 class = 'title'> ${title} </h2>
      <p> ${description} </p>
    </div>`);

  setTimeout(() => {
    const result = document.querySelector('.notification');

    result.hidden = true;
  }, 2000);
};

setTimeout(() => {
  pushNotification(
    '20%',
    '60%',
    'Warning',
    'You can be fined up to £5,000 if you do not register.',
    'warning');
}, 2000);
