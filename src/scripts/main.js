'use strict';

const pushNotification = (top, right, title, description, type) => {
  const container = document.createElement('div');

  container.classList.add('notification', type);
  document.body.append(container);

  container.innerHTML = `
  <h2 class="notification__title">${title}</h2>
  <p class="notification__description">${description}</p>
  `;

  container.style.top = `${top}px`;
  container.style.right = `${right}px`;

  setTimeout(() => container.remove(), 2000);
};

pushNotification(
  20, 30, 'Hi, Mate!', 'You are doing well, keep going!', 'success'
);

setTimeout(() => pushNotification(
  150, 30, 'Hi, Mate!', 'You are wrong, fix your code', 'warning'), 2000
);

setTimeout(() => pushNotification(
  300, 30, 'Hi, Mate!', 'ERROR!ERROR!ERROR!', 'error'), 4000
);
