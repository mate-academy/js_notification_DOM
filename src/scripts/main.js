'use strict';

const pushNotification = (top, right, title, description, type) => {
  const body = document.querySelector('body');
  const message = document.createElement('div');

  message.className = `notification ${type}`;
  message.style.position = 'absolute';
  message.style.top = `${top}px`;
  message.style.right = `${right}px`;

  body.prepend(message);

  const messageTitle = document.createElement('h2');

  messageTitle.className = 'title';
  messageTitle.innerText = `${title}`;

  message.prepend(messageTitle);

  const messageDescription = document.createElement('p');

  messageDescription.innerText = `${description}`;

  message.append(messageDescription);

  setTimeout(() => {
    message.remove();
  }, 2000);
};

pushNotification(30, 30, 'Success', "It's an expected result", 'success');
