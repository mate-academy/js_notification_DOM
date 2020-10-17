'use strict';

const pushNotification = (top, right, title, description, type) => {
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageText = document.createElement('p');

  message.className = `notification ${type}`;
  message.style.top = top;
  message.style.right = right;

  messageTitle.className = 'title';
  messageTitle.textContent = title;

  messageText.textContent = description;

  message.append(messageTitle);
  message.append(messageText);
  document.body.append(message);

  setTimeout(() => message.remove(), 2000);
};

pushNotification(10, 10, 'Congratulations!', 'Everything is right', 'success');
