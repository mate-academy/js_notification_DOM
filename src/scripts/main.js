'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const block = document.createElement('div');
  const titleBlock = document.createElement('h2');
  const descriptionBlock = document.createElement('p');
  const topToString = posTop + 'px';
  const rightToString = posRight + 'px';

  block.className = 'notification';

  titleBlock.innerText = title;
  descriptionBlock.innerText = description;

  block.appendChild(titleBlock);
  block.appendChild(descriptionBlock);

  block.style.top = topToString;
  block.style.right = rightToString;

  switch (type) {
    case 'success':
      block.className = 'notification success';
      break;

    case 'error':
      block.className = 'notification error';
      break;

    case 'warning':
      block.className = 'notification warning';
      break;
  }

  document.body.append(block);

  setTimeout(function() {
    block.remove();
  }, 2000);
};

pushNotification(10, 10, 'Title of Success message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'success');

pushNotification(200, 10, 'Title of Error message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'error');

pushNotification(360, 10, 'Title of Warning message',
  'Message example.\n '
  + 'Notification should contain title and description.', 'warning');
