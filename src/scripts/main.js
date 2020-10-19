'use strict';

const pushNotification = (top, right, title, description, type) => {
  const block = document.createElement('div');

  block.classList.add('notification', type);

  block.style.top = `${top}px`;
  block.style.right = `${right}px`;

  block.insertAdjacentHTML(
    'beforeend', `<h2 class="title">${title}</h2><p>${description}</p>`
  );

  document.body.append(block);

  setTimeout(() => block.remove(), 2000);
};

pushNotification(
  10,
  10,
  'Attention!',
  'Very interesting thing here',
  'success'
);

pushNotification(
  120,
  10,
  'Attention!!',
  'Very bad thing here',
  'warning'
);

pushNotification(
  230,
  10,
  'Attention!!!!',
  'Houston, we have a problems here!!',
  'error'
);
