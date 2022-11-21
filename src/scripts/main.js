'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');

  block.classList.add('notification');
  block.style.top = posTop + 'px';
  block.style.right = posRight + 'px';
  block.classList.add(type);

  const header = document.createElement('h2');

  header.classList.add('title');
  header.textContent = title;
  block.append(header);

  const text = document.createElement('p');

  text.textContent = description;
  block.append(text);

  document.body.append(block);

  window.setTimeout(function() {
    block.remove();
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
