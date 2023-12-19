'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const body = document.querySelector('body');
  const message = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageDescription = document.createElement('p');

  message.classList += 'notification ';

  messageTitle.className = 'title';
  messageTitle.textContent = title;

  messageDescription.innerText = description;

  switch (type) {
    case 'success':
      message.classList += 'success';
      break;
    case 'error':
      message.classList += 'error';
      break;
    case 'warning':
      message.classList += 'warning';
      break;
    default:
      break;
  }

  message.append(messageTitle);
  message.append(messageDescription);

  message.style.position = 'absolute';
  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';

  body.appendChild(message);

  setTimeout(() => message.remove(), 2000);
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
