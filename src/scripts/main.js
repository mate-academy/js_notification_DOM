'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const titleMessage = document.createElement('h2');
  const descr = document.createElement('p');

  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';
  titleMessage.textContent = title;
  descr.textContent = description;
  message.append(titleMessage, descr);
  message.classList.add('notification', type);
  titleMessage.classList.add('title');
  document.body.append(message);

  return message;
};

const message1 = pushNotification(
  10,
  10,
  'Title of Success message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'success',
);

const message2 = pushNotification(
  150,
  10,
  'Title of Error message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'error',
);

const message3 = pushNotification(
  290,
  10,
  'Title of Warning message',
  'Message example.\n ' + 'Notification should contain title and description.',
  'warning',
);

setTimeout(() => (message1.style.display = 'none'), 2000);
setTimeout(() => (message2.style.display = 'none'), 2000);
setTimeout(() => (message3.style.display = 'none'), 2000);
