'use strict';

const pushNotification = (top, right, title, description, type) => {
  document.body.insertAdjacentHTML('afterbegin', `
    <div class="notification ${type}">
      <h2>${title}</h2>
      <p>${description}</p>
    </div>
  `);

  const notification = document.querySelector('.notification');

  notification.style.cssText = `top: ${top}; right: ${right}`;

  setTimeout(() => {
    notification.remove();
  }, 2000);
};

pushNotification('30px', '50px', 'Hey there!', '^______^', 'success');
