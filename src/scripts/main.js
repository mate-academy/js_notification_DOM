'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const elementParent = document.querySelector('body');
  const notificationElement = document.createElement('div');

  const titleEl = document.createElement('h2');

  titleEl.classList.add('title');
  titleEl.textContent = title;
  notificationElement.appendChild(titleEl);

  const paragraph = document.createElement('p');

  paragraph.classList.add('description');
  paragraph.textContent = description;
  notificationElement.appendChild(paragraph);

  elementParent.appendChild(notificationElement);

  notificationElement.classList.add('notification');
  notificationElement.classList.add(`${type}`);
  notificationElement.style.boxSizing = 'content-box';
  notificationElement.style.top = `${posTop}px`;
  notificationElement.style.right = `${posRight}px`;

  setTimeout(() => {
    notificationElement.remove();
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
