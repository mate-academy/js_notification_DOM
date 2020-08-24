'use strict';

const pushNotification = (top, right, title, description, type) => {
  const message = document.createElement('div');

  message.className = 'notification';
  message.classList.add(type);

  message.innerHTML = `
    <h2>${title}</h2>
    <p>${description}</p>
  `;

  message.style.top = top;
  message.style.right = right;

  setTimeout(() => {
    message.remove();
  }, 2000);

  document.querySelector('body').children[0].after(message);
};

pushNotification(
  '15px',
  '15px',
  'Title',
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ea illum!',
  'warning'
);
