'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const body = document.querySelector('body');
  const titleMessage = document.createElement('h2');
  const descriptionText = document.createElement('p');
  const message = document.createElement('div');

  message.className = 'notification';
  message.classList.add(type);
  titleMessage.className = 'title';

  titleMessage.textContent = title;
  descriptionText.textContent = description;
  message.append(titleMessage);
  message.append(descriptionText);
  body.append(message);

  message.style.top = `${posTop}px`;
  message.style.right = `${posRight}px`;

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
