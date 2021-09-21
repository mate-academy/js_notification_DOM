'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.querySelector('body');
  const block = document.createElement('div');
  const titleElement = document.createElement('h2');
  const paragraph = document.createElement('p');

  titleElement.classList = 'title';
  titleElement.innerHTML = title;
  paragraph.innerHTML = description;

  block.classList.add(type, 'notification');
  block.append(titleElement);
  block.append(paragraph);
  body.append(block);
  block.style.boxSizing = 'content-box';

  block.style.top = posTop + 'px';
  block.style.right = posRight + 'px';

  setTimeout(() => block.remove(), 2000);
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
