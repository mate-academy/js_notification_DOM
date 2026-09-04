'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.body;
  const container = document.createElement('div');
  const nameNotification = document.createElement('h2');
  const textNotification = document.createElement('p');

  body.append(container);
  container.append(nameNotification);
  container.append(textNotification);

  container.classList.add('notification');
  nameNotification.classList.add('title');

  switch (type) {
    case 'success':
      container.classList.add('success');
      break;
    case 'error':
      container.classList.add('error');
      break;

    case 'warning':
      container.classList.add('warning');
      break;

    default: {
      break;
    }
  }

  nameNotification.textContent = title;
  textNotification.textContent = description;

  container.style.top = posTop + 'px';
  container.style.right = posRight + 'px';

  setTimeout(() => {
    container.style.display = 'none';
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
