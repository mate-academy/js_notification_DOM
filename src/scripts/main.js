'use strict';

const pushNotification = (top, right, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification', type);

  message.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
  `;
  message.style.top = `${top}px`;
  message.style.right = `${right}px`;
  document.body.append(message);
  setTimeout(() => message.remove(), 2000);
};

pushNotification(
  30,
  30,
  'Congratulations!',
  'You won a prize!',
  'success');
