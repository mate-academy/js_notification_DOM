'use strict';

const pushNotification = (top, right, title, description, type) => {
  // write code here
  const main = document.querySelector('body');
  const block = document.createElement('div');
  const blockTitle = document.createElement('h2');
  const blockDescription = document.createElement('p');

  block.classList.add('notification', type);
  blockTitle.classList.add('title');

  block.style.top = `${top}px`;
  block.style.right = `${right}px`;
  blockTitle.innerHTML = title;
  blockDescription.innerHTML = description;

  block.append(blockTitle, blockDescription);
  main.append(block);

  setTimeout(function() {
    block.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title', 'Description', 'success');
