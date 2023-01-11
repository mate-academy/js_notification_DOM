'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const h2 = document.createElement('h2');
  const paragraph = document.createElement('p');

  block.classList.add('notification');
  h2.classList.add('title');
  h2.style.fontSize = '16px';
  block.style.top = `${posTop}px`;
  block.style.right = `${posRight}px`;
  block.append(h2);
  block.append(paragraph);

  h2.innerText = title;
  paragraph.innerText = description;

  switch (type) {
    case 'success':
      block.classList.add('success');
      break;

    case 'error':
      block.classList.add('error');
      break;

    case 'warning':
      block.classList.add('warning');
      break;

    default:
      break;
  }

  document.body.append(block);

  setTimeout(() => {
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
