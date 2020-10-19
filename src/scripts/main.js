'use strict';

const body = document.querySelector('body');

const pushNotification = (top, right, title, description, type) => {
  body.insertAdjacentHTML('afterbegin', `
    <div class='${type} notification'>
      <h2 class='title'>
        ${title}
      </h2>
      <p>
        ${description}
      </p>
    </div>
  `);

  const notification = document.querySelector('.notification');

  notification.style.cssText = `top: ${top}px; right: ${right}px`;

  setTimeout(() => notification.remove(), 2000);
};

pushNotification(10, 10, 'Oh no!', 'you are in trouble', 'error');
