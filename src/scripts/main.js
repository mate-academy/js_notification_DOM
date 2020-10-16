'use strict';

const pushNotification = (top, right, title, description, type) => {
  const block = document.createElement('div');
  const blockTitle = document.createElement('h2');
  const blockMessage = document.createElement('p');

  block.classList.add(type, 'notification');
  block.styleTop = `${top}px`;
  block.styleRight = `${right}px`;

  blockTitle.className = 'title';
  blockTitle.textContent = title;

  blockMessage.textContent = description;

  block.append(blockTitle, blockMessage);
  document.body.append(block);

  setTimeout(() => block.remove(), 2000);
};

pushNotification(
  25,
  25,
  'Attention !!!',
  'Houston, we have a problems',
  'error'
);
