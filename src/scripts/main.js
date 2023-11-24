'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const box = document.querySelector('body');
  const message = document.createElement('div');

  message.style.marginRight = posRight + 'px';
  message.style.marginTop = posTop + 'px';

  switch (type) {
    case 'success':
      message.className = 'notification success';
      break;

    case 'error':
      message.className = 'notification error';
      break;

    case 'warning' :
      message.className = 'notification warning';
      break;
  }

  const titleMessage = document.createElement('h2');

  titleMessage.className = 'title';
  titleMessage.innerText = title;

  const descriptionMessage = document.createElement('p');

  descriptionMessage.innerText = description;

  message.appendChild(titleMessage);
  message.appendChild(descriptionMessage);
  box.appendChild(message);

  setTimeout(() => (message.remove()), 2000);
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
