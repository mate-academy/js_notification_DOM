'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const titleText = document.createElement('h2');
  const text = document.createElement('p');

  block.classList.add(`notification`, type);
  titleText.innerText = title;
  titleText.style.fontSize = '20px';
  text.innerText = description;
  block.style.cssText = `top:${posTop}px;right:${posRight}px`;
  block.append(titleText, text);
  document.body.append(block);
  setTimeout(() => (block.remove()), 2000);
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
