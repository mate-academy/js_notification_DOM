'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const paragraph = document.createElement('p');

  paragraph.innerText = description;
  block.className = `notification ${type}`;
  block.innerHTML = `<h3 class="title">${title}</h3>`;
  block.append(paragraph);

  block.style.cssText = `
  top: ${posTop}px;
  right: ${posRight}px;`;

  body.append(block);

  window.setTimeout(() => block.remove(), 2000);
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
