'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const noteItem = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageText = document.createElement('p');

  messageTitle.innerText = title;
  messageTitle.className = 'title';
  noteItem.prepend(messageTitle);

  messageText.textContent = description;
  noteItem.append(messageText);

  noteItem.className = `notification ${type}`;
  noteItem.style.cssText = `top: ${posTop}px; right:${posRight}px;`;
  body.append(noteItem);

  setTimeout(() => {
    noteItem.remove();
  }, 2000);
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
