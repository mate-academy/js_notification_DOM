'use strict';

const pushNotification = (top, right, title, description, type) => {
  const body = document.querySelector('body');
  const warning = document.createElement('div');

  warning.classList.add('notification', type);

  warning.style.top = top;
  warning.style.right = right;

  warning.insertAdjacentHTML('afterbegin',
    `<h2 class="title">${title}</h2>
    <p>${description}</p>`);

  body.append(warning);

  setTimeout(() => {
    warning.remove();
  }, 2000);
};

const message = 'It\'s an example of result. Notif contains title, description';

pushNotification('75px', '75px', 'Title', message, 'warning');
