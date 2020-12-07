'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const main = document.querySelector('body');
  const message = document.createElement('div');
  const titleMessage = document.createElement('h2');
  const descriptionMessage = document.createElement('p');

  message.classList.add('notification', type);
  message.style.cssText = `top: ${posTop}px; right: ${posRight}px`;
  titleMessage.classList.add('title');
  titleMessage.innerText = title;
  descriptionMessage.innerText = description;
  message.append(titleMessage, descriptionMessage);
  main.append(message);

  window.setTimeout(function() {
    message.remove(titleMessage, descriptionMessage);
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
