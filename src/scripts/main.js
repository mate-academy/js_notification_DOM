'use strict';

const pushNotification = (top, right, title, description, type) => {
  const body = document.querySelector('body');
  const messageBlock = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  messageBlock.className = `notification ${type}`;

  messageBlock.style.top = top;
  messageBlock.style.right = right;

  messageTitle.className = 'title';
  messageTitle.innerText = title;

  messageBlock.append(messageTitle);

  messageDescription.innerText = description;

  messageBlock.append(messageDescription);

  body.append(messageBlock);

  setTimeout(() => messageBlock.remove(), 2000);
};

pushNotification('10px', '10px', 'Title',
  `This is example of result.
  Notification should contain title and description`,
  'error');
