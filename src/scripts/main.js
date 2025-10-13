'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const message = document.createElement('div');
  message.classList.add('notification');

  const titleMessage = document.createElement('h2');
  titleMessage.classList.add('title');

  const descriptionMessage = document.createElement('p');
  descriptionMessage.style.whiteSpace = 'pre-line';

  titleMessage.textContent = title;
  descriptionMessage.textContent = description;

  message.append(titleMessage, descriptionMessage);

  message.style.cssText = `display: block; position: absolute; top: ${posTop}px; right: ${posRight}px;`;

  switch (type) {
    case 'success': {
      message.classList.add('success');
      break;
    }
    case 'error': {
      message.classList.add('error');
      break;
    }
    case 'warning': {
      message.classList.add('warning');
      break;
    }
  }

  document.body.append(message);

  setTimeout(() => {
    message.style.display = 'none';
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
