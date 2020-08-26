'use strict';

const pushNotification = (top, right, title, description, type) => {
  const body = document.querySelector('body');
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  message.className = `notification ${type}`;
  message.style.position = 'absolute';
  message.style.top = `${top}`;
  message.style.right = `${right}`;

  messageTitle.className = `title`;
  messageTitle.innerText = title;
  messageDescription.innerText = description;

  message.append(messageTitle);
  message.append(messageDescription);

  body.append(message);

  setTimeout(() => message.remove(), 20000);
};

pushNotification('25px', '25px', 'Title',
  `This is example of result.`,
  'warning');
