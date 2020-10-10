'use strict';

const pushNotification = (top, right, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification', type);

  message.style.top = `${top}px`;
  message.style.right = `${right}px`;

  message.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  setTimeout(() => message.remove(), 2000);

  document.body.append(message);
};

pushNotification(50, 50, 'Note', 'Everything is fine', 'success');
