'use strict';

const pushNotification = (top, right, title, description, type) => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="notification ${type}" style="top: ${top}; right: ${right};">
      <h2>${title}</h2>
      <p>${description}</p>
    </div>
  `);

  const message = document.body.lastElementChild;

  setTimeout(() => {
    message.remove();
  }, 2000);
};

pushNotification(100, 100, 'Warning!', 'Be careful!!!', 'warning');
