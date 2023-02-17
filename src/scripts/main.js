'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');

  message.classList.add('notification');
  message.classList.add(type);

  const titleMessage = document.createElement('h2');

  titleMessage.classList.add('title');
  titleMessage.textContent = title;
  message.append(titleMessage);

  const text = document.createElement('p');

  text.textContent = description;

  message.append(text);
  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';

  document.body.append(message);

  setTimeout(() => {
    message.style.display = 'none';
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
