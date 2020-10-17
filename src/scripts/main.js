'use strict';

const pushNotification = (top, right, title, description, type) => {
  const body = document.querySelector('body');

  body.innerHTML = `
    <div>
      <h2 class="title">${title}</h2>
      <p>${description}</p>
    </div>
    <h1 class="logo">MA</h1>
    <script type="text/javascript" src="scripts/main.js"></script>
  `;

  const notification = document.querySelector('div');

  notification.classList.add('notification');
  notification.classList.add(`${type}`);
  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;

  setTimeout(() => notification.remove(), 3000);
};

pushNotification(20, 20, 'HEY COWBOY!!!', "Let's ROCK!", 'success');
