'use strict';

const pushNotification = (top, right, title, description, type) => {
  const block = document.createElement('div');
  const blockTitle = document.createElement('h2');
  const blockText = document.createElement('p');
  const body = document.body;

  block.style.top = `${top}px`;
  block.style.right = `${right}px`;
  block.classList.add('notification');

  blockTitle.textContent = title;
  blockText.textContent = description;

  block.append(blockTitle, blockText);
  body.append(block);

  setTimeout(() => block.remove(), 2000);
};

pushNotification(30, 750, 'Operation success', 'was added one element', 'text');
