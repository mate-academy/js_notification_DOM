'use strict';

const body = document.querySelector('body');

const pushNotification = (posTop, posRight, title, description, type) => {
  const notificationDiv = document.createElement('div');
  notificationDiv.className = `notification ${type}`;
  notificationDiv.style.top = `${posTop}px`;
  notificationDiv.style.right = `${posRight}px`;

  const createElement = (element, content, classOfContent = '') => {
    const notificationElement = document.createElement(element);
    notificationElement.className = classOfContent;
    notificationElement.textContent = content;
    notificationDiv.appendChild(notificationElement);
  }

  createElement('h2', title, 'title');
  createElement('p', description)

  body.append(notificationDiv)

  setTimeout(()=>{
    body.removeChild(notificationDiv)
  }, 1000)
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
