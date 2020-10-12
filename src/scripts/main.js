'use strict';

const pushNotification = (top, right, title, description, type) => {
  const notification = document.createElement('div');

  notification.classList.add('notification', type);

  notification.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  document.body.prepend(notification);

  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;

  setTimeout(() => notification.remove(), 2000);
};

pushNotification(30, 50, 'success', 'great job!', 'success');
