'use strict';

const pushNotification = (top, right, title, description, type) => {
  const message = document.createElement('div');

  message.className = `notification ${type}`;
  message.style.top = `${top}px`;
  message.style.right = `${right}px`;

  message.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
  `;
  document.body.append(message);

  setTimeout(() => message.remove(), 2000);
};

pushNotification(
  '10',
  '10',
  'Remember!',
  'The winter is coming :`(',
  'warning'
);
