'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const elementBody = document.createElement('div');
  const elementTitle = document.createElement('h2');
  const elementDescription = document.createElement('p');

  elementBody.classList.add('notification', type);
  elementBody.style.right = `${posRight}px`;
  elementBody.style.top = `${posTop}px`;

  elementTitle.textContent = title;
  elementTitle.classList.add('title');

  elementDescription.textContent = description;

  elementBody.append(elementTitle, elementDescription);

  document.body.append(elementBody);

  setTimeout(() => elementBody.remove(), 2000);
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
