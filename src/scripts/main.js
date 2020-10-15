'use strict';

const pushNotification = (top, right, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification', type);
  message.style.top = `${top}px`;
  message.style.right = `${right}px`;
  document.querySelector('body').append(message);

  message.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;

  setTimeout(() => message.remove(), 2000);
};

pushNotification(
  10,
  10,
  'Title of notification',
  'Some interesting thing in this notification',
  'success'
);
