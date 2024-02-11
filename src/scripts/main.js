'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const message = document.createElement('div');
  const titleMessage = document.createElement('h2');
  const descriptionMessage = document.createElement('p');

  message.className = 'notification';
  message.classList.add(type);
  message.style.top = posTop + 'px';
  message.style.right = posRight + 'px';
  titleMessage.className = 'title';
  titleMessage.innerHTML = title;
  descriptionMessage.innerHTML = description.replace('\n', '<br>');
  message.append(titleMessage);
  message.append(descriptionMessage);

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
