'use strict';

const pushNotification = (posTop, posRight, title, description, type) => {
  const messageBox = document.createElement('div');
  const titleBox = document.createElement('h2');
  const descriptionBox = document.createElement('p');

  messageBox.classList.add('notification', type);
  titleBox.classList.add('title');
  titleBox.textContent = title;
  descriptionBox.innerText = description;
  messageBox.append(titleBox);
  messageBox.append(descriptionBox);

  messageBox.style.top = `${posTop}px`;
  messageBox.style.right = `${posRight}px`;
  document.body.append(messageBox);

  setTimeout(() => {
    messageBox.hidden = true;
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
