'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  // write code here
  const rooElement = document.querySelector('body');
  const messageElement = document.createElement('div');
  const messageTitle = document.createElement('h2');
  const messageText = document.createElement('p');

  messageTitle.innerText = title;
  messageTitle.className = 'title';
  messageText.innerText = description;
  messageElement.className = type;
  messageElement.classList.add('notification');
  messageElement.append(messageTitle);
  messageElement.append(messageText);
  messageElement.style.top = `${posTop}px`;
  messageElement.style.right = `${posRight}px`;

  rooElement.append(messageElement);

  function removeEl() {
    messageElement.remove();
  }

  setTimeout(removeEl, 2000);
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
