'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const body = document.querySelector('body');

  message.style.right = posRight + 'px';
  message.style.top = posTop + 'px';

  message.classList.add('notification');
  message.classList.add(type);

  const titleMessage = document.createElement('h2');

  titleMessage.classList.add('title');
  titleMessage.innerHTML = title;
  message.append(titleMessage);

  const descriptionMessage = document.createElement('p');

  descriptionMessage.innerHTML = description;
  message.append(descriptionMessage);
  body.append(message);

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
