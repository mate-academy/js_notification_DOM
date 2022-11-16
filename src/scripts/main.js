'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const body = document.querySelector('body');

  message.classList.add('notification', type);
  message.style.boxSizing = 'content-box';
  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;
  body.append(message);

  const elementTitle = document.createElement('h2');

  elementTitle.textContent = title;
  elementTitle.className = 'title';
  message.append(elementTitle);

  const elementDescription = document.createElement('p');

  elementDescription.innerText = description;
  message.append(elementDescription);

  setTimeout(() => {
    message.remove();
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
