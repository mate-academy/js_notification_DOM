'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const nodeLogo = document.querySelector('.logo');
  const nodeNotification = document.createElement('div');

  nodeNotification.classList.add('notification');
  nodeNotification.classList.add(type);

  const nodeTitleOfNotification = document.createElement('h2');

  nodeTitleOfNotification.classList.add('title');
  nodeTitleOfNotification.textContent = title;

  const nodeDescriptionOfNotification = document.createElement('p');

  nodeDescriptionOfNotification.innerText = description;

  nodeNotification.style.top = `${posTop}px`;
  nodeNotification.style.right = `${posRight}px`;

  nodeLogo.after(nodeNotification);
  nodeNotification.append(nodeTitleOfNotification);
  nodeNotification.append(nodeDescriptionOfNotification);

  setTimeout(() => {
    nodeNotification.remove();
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
