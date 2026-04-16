'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const node = document.createElement('div');
  const titleNode = document.createElement('h2');
  const descripNode = document.createElement('p');

  node.classList.add(`notification`, type);
  titleNode.classList.add('title');

  node.style.top = posTop + 'px';
  node.style.right = posRight + 'px';

  node.append(titleNode);
  node.append(descripNode);

  titleNode.innerText = title;
  descripNode.innerText = description;

  document.body.append(node);

  setTimeout(() => {
    node.style.visibility = 'hidden';
  }, 2000);
};

pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);
