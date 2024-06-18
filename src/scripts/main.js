'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const container = document.createElement('div');
  const containerTitle = document.createElement('h2');
  const containerDescr = document.createElement('p');

  if (type === 'success' || type === 'error' || type === 'warning') {
    container.classList.add('notification', type);
  }
  container.style.top = `${posTop}px`;
  container.style.right = `${posRight}px`;
  containerTitle.classList.add('title');
  containerTitle.innerText = title;
  containerDescr.innerText = description;

  container.appendChild(containerTitle);
  container.appendChild(containerDescr);
  document.body.appendChild(container);

  setTimeout(() => {
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
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
