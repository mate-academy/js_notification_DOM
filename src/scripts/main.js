'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {

  const block = document.createElement('div');
  const header = document.createElement('h2');
  const massage = document.createElement('p');

  block.className = 'notification';
  block.className += ` ${type}`;
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;

  header.textContent = title;
  header.style.fontSize = '20px';

  massage.textContent = description;
  block.append(header);
  block.append(massage);

  document.body.append(block);

  setTimeout(function() {
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
