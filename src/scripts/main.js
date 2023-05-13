'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const bodyEl = document.querySelector('body');
  const block = document.createElement('div');
  const titleMessage = document.createElement('h2');
  const descriptionEl = document.createElement('p');

  block.className = `notification ${type}`;
  titleMessage.className = 'title';

  titleMessage.innerText = title;
  descriptionEl.innerText = description;

  block.style.top = posTop + 'px';
  block.style.right = posRight + 'px';

  bodyEl.append(block);
  block.append(titleMessage);
  block.append(descriptionEl);

  block.style.boxSizing = 'content-box';

  setTimeout(() => {
    block.style.display = 'none';
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
