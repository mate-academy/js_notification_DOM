'use strict';

const pushNotification = (top, right, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification');
  message.classList.add(type);
  message.style.top = top + 'px';
  message.style.right = right + 'px';

  message.innerHTML = `
  <h2 class="title">${title}</h2>
  <p>${description}</p>
  `;

  document.body.append(message);

  setTimeout(() => message.remove(), 2000);
};

pushNotification(20, 20, 'Success!',
  'You are on the right path!', 'success');
