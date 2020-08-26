'use strict';

const pushNotification = (top, right, title, description, type) => {
  const block = document.createElement('div');

  block.classList.add('notification', type);

  block.innerHTML = `
    <h2 class="title">${title}</h2>
    <p>${description}</p>
    `;

  block.style.top = `${top}px`;
  block.style.right = `${right}px`;

  document.body.append(block);

  setTimeout(() => block.remove(), 2000);
};

pushNotification(200, 400, 'Title', 'description content', 'success');
