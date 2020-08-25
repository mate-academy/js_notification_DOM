'use strict';

const pushNotification = (top, right, title, description, type) => {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="notification ${type}">
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>
  `);

  const notification = document.querySelector('.notification');

  notification.style.cssText = `top: ${top}; right: ${right};`;

  setTimeout(() => notification.remove(), 2000);
};

pushNotification('100px', '100px', 'Hello', 'This is my solution', 'success');
