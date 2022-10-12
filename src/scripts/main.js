'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const page = document.querySelector('body');
  const newElement = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageParagraph = document.createElement('p');

  newElement.className = `notification ${type}`;
  newElement.style.position = 'absolute';
  newElement.style.boxSizing = 'content-box';
  newElement.style.top = `${posTop}px`;
  newElement.style.right = `${posRight}px`;

  messageTitle.className = 'title';
  messageTitle.textContent = title;

  messageParagraph.textContent = description;

  newElement.append(messageTitle, messageParagraph);

  page.append(newElement);

  setTimeout(() => newElement.remove(), 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(150, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(290, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
