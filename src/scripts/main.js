'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const elementTitle = document.createElement('h2');
  const elementDescription = document.createElement('p');

  elementTitle.innerHTML = title;
  elementTitle.setAttribute('class', 'title');
  elementDescription.innerText = description;
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;
  message.style.width = '320px';

  if (type === 'success') {
    message.setAttribute('class', 'notification success');
  }

  if (type === 'error') {
    message.setAttribute('class', 'notification error');
  }

  if (type === 'warning') {
    message.setAttribute('class', 'notification warning');
  }

  document.body.append(message);
  message.append(elementTitle);
  message.append(elementDescription);

  setTimeout(() => message.remove(), 2000);
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
