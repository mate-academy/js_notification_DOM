'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const titleMessage = document.createElement('h2');
  const textMessage = document.createElement('p');

  message.classList.add(`notification`);
  message.classList.add(type);
  titleMessage.classList.add('title');

  message.style.right = posRight + 'px';
  message.style.top = posTop + 'px';

  titleMessage.textContent = title;
  textMessage.textContent = description;

  message.append(titleMessage);
  message.append(textMessage);
  document.body.append(message);

  setTimeout(() => {
    document.body.removeChild(document.querySelector('.notification'));
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
