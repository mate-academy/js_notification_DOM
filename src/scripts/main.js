'use strict';

const pushNotification = (top, right, title, description, type) => {
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  message.className = `notification ${type}`;
  message.style.top = `${top}px`;
  message.style.right = `${right}px`;

  messageTitle.className = 'title';
  messageTitle.textContent = title;

  messageDescription.textContent = description;

  message.append(messageTitle, messageDescription);
  document.body.append(message);

  setTimeout(() => message.remove(), 2000);
};

pushNotification(
  10,
  20,
  'Attention!',
  `Did you repeat the theory exactly before the lecture?`,
  'error'
);
